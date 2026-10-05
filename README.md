# Trello Backend Project

[English](#english) | [Deutsch](#deutsch)

---

## English

### About the project

This project is a REST API for a simple Trello-style task management application. It is built with Node.js, Express, and MongoDB. The API currently supports user registration and login, reading users and lists, and full CRUD operations for cards.

The application uses Mongoose to store and validate data, bcrypt to hash passwords, and JSON Web Tokens (JWT) for authentication tokens.

### Features

- Register users and securely hash their passwords
- Log in with an email address and password
- Generate a JWT after registration or login
- Read all users
- Read all lists
- Create, read, update, and delete cards
- Validate data with Mongoose and `validator`
- Accept JSON and URL-encoded request bodies
- Enable Cross-Origin Resource Sharing (CORS)

> **Current status:** The API creates JWTs during signup and login, but it does not yet use authentication middleware to protect routes. The user and list APIs currently only provide read operations. There is no board API yet.

### Technologies

- Node.js
- Express 5
- MongoDB and Mongoose
- JSON Web Token (`jsonwebtoken`)
- bcrypt.js
- dotenv
- CORS
- Morgan
- validator

### Project structure

```text
.
|-- app.js                  # Express configuration and route mounting
|-- server.js               # Environment setup, database connection, and server start
|-- config.env              # Local environment variables
|-- controllers/
|   |-- authController.js   # Signup, login, password check, and JWT creation
|   |-- cardsController.js  # Card CRUD operations
|   |-- listsController.js  # List queries
|   `-- usersController.js  # User queries
|-- model/
|   |-- cardModel.js        # Card schema
|   |-- listModel.js        # List schema
|   `-- userModel.js        # User schema and password hashing
|-- routes/
|   |-- cardsRoutes.js      # /api/v1/cards routes
|   |-- listsRoutes.js      # /api/v1/lists routes
|   `-- usersRoutes.js      # /api/v1/users routes
|-- docs/                   # Project documentation and videos
|-- package.json
`-- README.md
```

### Requirements

- Node.js 18 or newer is recommended
- npm
- A running MongoDB database, either locally or through MongoDB Atlas

### Installation and startup

1. Clone the repository and enter the project directory:

   ```bash
   git clone https://github.com/hackychristki/Trello-Backend-Projekt.git
   cd Trello-Backend-Projekt
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Create or update `config.env` in the project root:

   ```env
   DATABASE=mongodb://127.0.0.1:27017/trello-backend
   PORT=3000
   JWT_SECRET=replace-this-with-a-long-random-secret
   JWT_EXPIRES_IN=7d
   ```

   For MongoDB Atlas, replace `DATABASE` with your Atlas connection string. Do not commit real database credentials or JWT secrets to Git.

4. Start the server:

   ```bash
   npm start
   ```

5. After a successful start, the console displays the database connection message and the port. With the example configuration, the API is available at:

   ```text
   http://localhost:3000/api/v1
   ```

### Environment variables

| Variable | Required | Description | Example |
| --- | --- | --- | --- |
| `DATABASE` | Yes | MongoDB connection URI | `mongodb://127.0.0.1:27017/trello-backend` |
| `PORT` | No | HTTP port; defaults to `3000` | `3000` |
| `JWT_SECRET` | Yes | Secret used to sign authentication tokens | A long random string |
| `JWT_EXPIRES_IN` | Yes | Token lifetime accepted by `jsonwebtoken` | `7d` |

### API endpoints

#### Users and authentication

| Method | Endpoint | Description |
| --- | --- | --- |
| `POST` | `/api/v1/users/signup` | Create a user and return a JWT |
| `POST` | `/api/v1/users/login` | Log in and return a JWT |
| `GET` | `/api/v1/users` | Return all users |

Signup body:

```json
{
  "name": "Alex Example",
  "email": "alex@example.com",
  "password": "password123"
}
```

Login body:

```json
{
  "email": "alex@example.com",
  "password": "password123"
}
```

Passwords must contain at least eight characters. Email addresses are validated and stored in lowercase.

#### Lists

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/v1/lists` | Return all lists |

A list contains a unique `name`, the required board reference `idBoard`, a numeric `pos`, and `createdAt`.

#### Cards

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/v1/cards` | Return all cards |
| `POST` | `/api/v1/cards` | Create a card |
| `GET` | `/api/v1/cards/:id` | Return one card by its MongoDB ID |
| `PATCH` | `/api/v1/cards/:id` | Update a card |
| `DELETE` | `/api/v1/cards/:id` | Delete a card |

Example card body:

```json
{
  "name": "Write project documentation",
  "desc": "Complete the bilingual README",
  "idList": "LIST_ID",
  "due": "2026-10-10T12:00:00.000Z",
  "pos": 1
}
```

The card `name` is required and unique. If `desc` is omitted, it defaults to `No description`.

Example request:

```bash
curl -X POST http://localhost:3000/api/v1/cards \
  -H "Content-Type: application/json" \
  -d '{"name":"My first card","desc":"Test the API","pos":1}'
```

### Testing the API

You can test the endpoints with tools such as Postman, Insomnia, Bruno, or `curl`. Send request bodies as JSON and set this header:

```text
Content-Type: application/json
```

There is currently no automated test suite. The existing `npm test` script is only a placeholder.

---

## Deutsch

### Über das Projekt

Dieses Projekt ist eine REST-API für eine einfache Aufgabenverwaltung nach dem Vorbild von Trello. Es wurde mit Node.js, Express und MongoDB entwickelt. Die API unterstützt aktuell die Registrierung und Anmeldung von Benutzern, das Auslesen von Benutzern und Listen sowie vollständige CRUD-Operationen für Karten.

Mongoose übernimmt die Speicherung und Validierung der Daten. Passwörter werden mit bcrypt gehasht und für die Anmeldung werden JSON Web Tokens (JWT) erstellt.

### Funktionen

- Benutzer registrieren und Passwörter sicher hashen
- Mit E-Mail-Adresse und Passwort anmelden
- Nach Registrierung oder Anmeldung ein JWT erstellen
- Alle Benutzer abrufen
- Alle Listen abrufen
- Karten erstellen, lesen, bearbeiten und löschen
- Daten mit Mongoose und `validator` validieren
- JSON- und URL-kodierte Request-Bodys verarbeiten
- Cross-Origin Resource Sharing (CORS) erlauben

> **Aktueller Stand:** Die API erstellt bei der Registrierung und Anmeldung JWTs, verwendet aber noch keine Authentifizierungs-Middleware zum Schutz der Routen. Für Benutzer und Listen sind aktuell nur Lesezugriffe vorhanden. Eine Board-API gibt es noch nicht.

### Verwendete Technologien

- Node.js
- Express 5
- MongoDB und Mongoose
- JSON Web Token (`jsonwebtoken`)
- bcrypt.js
- dotenv
- CORS
- Morgan
- validator

### Projektstruktur

```text
.
|-- app.js                  # Express-Konfiguration und Einbindung der Routen
|-- server.js               # Umgebungsvariablen, Datenbankverbindung und Serverstart
|-- config.env              # Lokale Umgebungsvariablen
|-- controllers/
|   |-- authController.js   # Registrierung, Login, Passwortprüfung und JWT-Erstellung
|   |-- cardsController.js  # CRUD-Operationen für Karten
|   |-- listsController.js  # Abfragen für Listen
|   `-- usersController.js  # Abfragen für Benutzer
|-- model/
|   |-- cardModel.js        # Schema für Karten
|   |-- listModel.js        # Schema für Listen
|   `-- userModel.js        # Benutzerschema und Passwort-Hashing
|-- routes/
|   |-- cardsRoutes.js      # Routen unter /api/v1/cards
|   |-- listsRoutes.js      # Routen unter /api/v1/lists
|   `-- usersRoutes.js      # Routen unter /api/v1/users
|-- docs/                   # Projektdokumentation und Videos
|-- package.json
`-- README.md
```

### Voraussetzungen

- Node.js 18 oder neuer wird empfohlen
- npm
- Eine laufende MongoDB-Datenbank, lokal oder über MongoDB Atlas

### Installation und Start

1. Repository klonen und in den Projektordner wechseln:

   ```bash
   git clone https://github.com/hackychristki/Trello-Backend-Projekt.git
   cd Trello-Backend-Projekt
   ```

2. Abhängigkeiten installieren:

   ```bash
   npm install
   ```

3. Im Projektstamm die Datei `config.env` erstellen oder aktualisieren:

   ```env
   DATABASE=mongodb://127.0.0.1:27017/trello-backend
   PORT=3000
   JWT_SECRET=durch-ein-langes-zufaelliges-geheimnis-ersetzen
   JWT_EXPIRES_IN=7d
   ```

   Bei MongoDB Atlas muss `DATABASE` durch den eigenen Atlas-Verbindungsstring ersetzt werden. Echte Datenbank-Zugangsdaten und JWT-Geheimnisse dürfen nicht in Git eingecheckt werden.

4. Server starten:

   ```bash
   npm start
   ```

5. Nach dem erfolgreichen Start zeigt die Konsole die Datenbankverbindung und den verwendeten Port an. Mit der Beispielkonfiguration ist die API hier erreichbar:

   ```text
   http://localhost:3000/api/v1
   ```

### Umgebungsvariablen

| Variable | Erforderlich | Beschreibung | Beispiel |
| --- | --- | --- | --- |
| `DATABASE` | Ja | MongoDB-Verbindungs-URI | `mongodb://127.0.0.1:27017/trello-backend` |
| `PORT` | Nein | HTTP-Port; Standardwert ist `3000` | `3000` |
| `JWT_SECRET` | Ja | Geheimnis zum Signieren der Anmelde-Tokens | Eine lange zufällige Zeichenfolge |
| `JWT_EXPIRES_IN` | Ja | Gültigkeitsdauer, die `jsonwebtoken` akzeptiert | `7d` |

### API-Endpunkte

#### Benutzer und Authentifizierung

| Methode | Endpunkt | Beschreibung |
| --- | --- | --- |
| `POST` | `/api/v1/users/signup` | Benutzer erstellen und ein JWT zurückgeben |
| `POST` | `/api/v1/users/login` | Benutzer anmelden und ein JWT zurückgeben |
| `GET` | `/api/v1/users` | Alle Benutzer zurückgeben |

Request-Body für die Registrierung:

```json
{
  "name": "Alex Beispiel",
  "email": "alex@example.com",
  "password": "passwort123"
}
```

Request-Body für die Anmeldung:

```json
{
  "email": "alex@example.com",
  "password": "passwort123"
}
```

Passwörter müssen mindestens acht Zeichen lang sein. E-Mail-Adressen werden validiert und in Kleinbuchstaben gespeichert.

#### Listen

| Methode | Endpunkt | Beschreibung |
| --- | --- | --- |
| `GET` | `/api/v1/lists` | Alle Listen zurückgeben |

Eine Liste enthält einen eindeutigen `name`, die erforderliche Board-Referenz `idBoard`, eine numerische Position `pos` und `createdAt`.

#### Karten

| Methode | Endpunkt | Beschreibung |
| --- | --- | --- |
| `GET` | `/api/v1/cards` | Alle Karten zurückgeben |
| `POST` | `/api/v1/cards` | Eine Karte erstellen |
| `GET` | `/api/v1/cards/:id` | Eine Karte über ihre MongoDB-ID zurückgeben |
| `PATCH` | `/api/v1/cards/:id` | Eine Karte bearbeiten |
| `DELETE` | `/api/v1/cards/:id` | Eine Karte löschen |

Beispiel für einen Karten-Body:

```json
{
  "name": "Projektdokumentation schreiben",
  "desc": "Die zweisprachige README fertigstellen",
  "idList": "LIST_ID",
  "due": "2026-10-10T12:00:00.000Z",
  "pos": 1
}
```

Der Kartenname `name` ist erforderlich und muss eindeutig sein. Wenn `desc` fehlt, wird standardmäßig `No description` verwendet.

Beispielanfrage:

```bash
curl -X POST http://localhost:3000/api/v1/cards \
  -H "Content-Type: application/json" \
  -d '{"name":"Meine erste Karte","desc":"API testen","pos":1}'
```

### API testen

Die Endpunkte können beispielsweise mit Postman, Insomnia, Bruno oder `curl` getestet werden. Request-Bodys werden als JSON gesendet und benötigen diesen Header:

```text
Content-Type: application/json
```

Aktuell gibt es noch keine automatisierten Tests. Das vorhandene Script `npm test` ist lediglich ein Platzhalter.
