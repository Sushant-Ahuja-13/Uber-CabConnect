# API Documentation

This document provides an overview of all the API endpoints available in the backend of the Uber-CabConnect project. Each endpoint is described with its purpose, request format, and response examples.

## Base URL
All endpoints are prefixed with `/api/user` (or as configured in your main router).

---

## Endpoints

### 1. Register User

- **URL:** `/register`
- **Method:** `POST`
- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }
  ```
- **Success Response:**
  - **Status:** `200 OK`
  - **Body:**
    ```json
    {
      "token": "<jwt_token>",
      "user": {
        "_id": "<user_id>",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketId": null
      }
    }
    ```
- **Error Responses:**
  - **Status:** `400 Bad Request`
    ```json
    {
      "errors": [
        { "msg": "First name must be at least 3 characters long", "param": "fullname.firstname", ... }
      ]
    }
    ```

---

### 2. Login User

- **URL:** `/login`
- **Method:** `POST`
- **Description:** Authenticates a user and returns a JWT token.
- **Request Body:**
  ```json
  {
    "email": "john.doe@example.com",
    "password": "yourpassword"
  }
  ```
- **Success Response:**
  - **Status:** `200 OK`
  - **Body:**
    ```json
    {
      "token": "<jwt_token>",
      "user": {
        "_id": "<user_id>",
        "fullname": {
          "firstname": "John",
          "lastname": "Doe"
        },
        "email": "john.doe@example.com",
        "socketId": null
      }
    }
    ```
- **Error Responses:**
  - **Status:** `400 Bad Request`
    ```json
    {
      "errors": [
        { "msg": "Invalid email", "param": "email", ... }
      ]
    }
    ```
  - **Status:** `401 Unauthorized`
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

---

### 3. Get User Profile

- **URL:** `/profile`
- **Method:** `GET`
- **Description:** Retrieves the profile of the authenticated user.
- **Headers:**
  - `Authorization: Bearer <jwt_token>`
- **Success Response:**
  - **Status:** `200 OK`
  - **Body:**
    ```json
    {
      "_id": "<user_id>",
      "fullname": {
        "firstname": "John",
        "lastname": "Doe"
      },
      "email": "john.doe@example.com",
      "socketId": null
    }
    ```
- **Error Responses:**
  - **Status:** `401 Unauthorized`
    ```json
    {
      "message": "Unauthorized Access"
    }
    ```

---

### 4. Logout User

- **URL:** `/logout`
- **Method:** `GET`
- **Description:** Logs out the authenticated user by blacklisting the JWT token.
- **Headers:**
  - `Authorization: Bearer <jwt_token>`
- **Success Response:**
  - **Status:** `200 OK`
  - **Body:**
    ```json
    {
      "message": "Logout successful"
    }
    ```
- **Error Responses:**
  - **Status:** `401 Unauthorized`
    ```json
    {
      "message": "Unauthorized Access"
    }
    ```

---

## Notes
- All passwords are securely hashed before storage.
- JWT tokens are blacklisted upon logout and automatically removed after 24 hours.
- Use the `Authorization` header or cookies to pass the JWT token for protected routes.

For more details, see the source code in the `controllers/`, `models/`, `routes/`, and `middlewares/` folders.
