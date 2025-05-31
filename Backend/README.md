# User API Endpoints

This document describes the available user-related API endpoints in the backend of the Uber-CabConnect project. All endpoints are prefixed with `/api/user` (or as configured in your main router).

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

## Validation

- Email must be valid.
- First name must be at least 3 characters.
- Password must be at least 6 characters.

## Notes

- All passwords are securely hashed before storage.
- JWT token is returned on successful registration and login.

---

For more details, see the source code in the `controllers/`, `models/`, `routes/`, and `services/` folders.
