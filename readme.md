# URL Shortener API

API for shortening URLs built with Node.js and TypeScript.
The application allows users to create a shortened URL and redirect to the original URL using the generated code.

## 🚀 Technologies Used

* Node.js
* Express
* TypeScript
* PostgreSQL
* Joi (data validation)
* express-async-handler (async error handling)
* Helmet (HTTP security headers)
* Git

## 🔐 Security

The application uses **Helmet** to automatically configure several **HTTP security headers**, helping protect the API against common web vulnerabilities.

## 📁 Architecture

The project follows a layered architecture:

* **Controller** → handles HTTP requests and responses
* **Service** → contains the business logic
* **Repository** → manages database access
* **Middleware** → request validation and error handling
* **Schema** → validation schemas using Joi

## 📌 Endpoints

### Create Short URL

POST `/shorten`

```json
{
  "url": "https://example.com"
}
```

Response:

```json
{
  "shortUrl": "http://localhost:3000/abc123"
}
```

### Redirect to Original URL

GET `/:code`

Example:

```
http://localhost:3000/abc123
```

This endpoint automatically redirects to the original URL.

## ⚙️ Installation

```bash
git clone <repo-url>
npm install
npm run dev
```

## 📄 License

This project was developed for study purposes.

