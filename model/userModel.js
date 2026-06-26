const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema(
{
    name: {
        type: String,
    },
    email: {
        type: String,
        required: [true, "A user must have an email"],
        unique: true,
        lowercase: true,
        validate: [validator.isEmail, "provide a valid email"]
    },
    password: {
        type: String,
        required: [true, "A user must have a password"],
        minlength: 8,
        select: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
{
    _id: true
});

userSchema.pre("save", async function (next) {
    // only run if password was modified
    if (!this.isModified("password")) return next();

    this.password = await bcrypt.hash(this.password, 12);

    next();
});

userSchema.methods.correctPassword = async function (
    candidatePassword,
    userPassword
) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

const User = mongoose.model("User", userSchema);

module.exports = User;