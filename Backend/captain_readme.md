# Captain API Documentation

This document provides an overview of all the API endpoints available for captains in the backend of the Uber-CabConnect project. Each endpoint is described with its purpose, request format, and response examples.

## Base URL
All captain-related endpoints are prefixed with `/api/captains` (or as configured in your main router).

---

## Endpoints

### 1. Register Captain

- **URL:** `/register`
- **Method:** `POST`
- **Description:** Registers a new captain.
- **Request Body:**
  ```json
  {
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "password": "yourpassword",
    "vehicle": {
      "color": "Red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
  ```
- **Success Response:**
  - **Status:** `201 Created`
  - **Body:**
    ```json
    {
      "token": "<jwt_token>",
      "captain": {
        "_id": "<captain_id>",
        "fullname": {
          "firstname": "Jane",
          "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "vehicle": {
          "color": "Red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
    }
    ```
- **Error Responses:**
  - **Status:** `400 Bad Request`
    ```json
    {
      "message": "Captain already exists"
    }
    ```
  - **Status:** `400 Bad Request`
    ```json
    {
      "errors": [
        { "msg": "First name must be at least 3 characters long", "param": "fullname.firstname", ... }
      ]
    }
    ```

---

### 2. Login Captain

- **URL:** `/login`
- **Method:** `POST`
- **Description:** Authenticates a captain and returns a JWT token.
- **Request Body:**
  ```json
  {
    "email": "jane.doe@example.com",
    "password": "yourpassword"
  }
  ```
- **Success Response:**
  - **Status:** `200 OK`
  - **Body:**
    ```json
    {
      "token": "<jwt_token>",
      "captain": {
        "_id": "<captain_id>",
        "fullname": {
          "firstname": "Jane",
          "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "vehicle": {
          "color": "Red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
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
      "message": "Captain not found"
    }
    ```

---

### 3. Get Captain Profile

- **URL:** `/profile`
- **Method:** `GET`
- **Description:** Retrieves the profile of the authenticated captain.
- **Headers:**
  - `Authorization: Bearer <jwt_token>`
- **Success Response:**
  - **Status:** `200 OK`
  - **Body:**
    ```json
    {
      "captain": {
        "_id": "<captain_id>",
        "fullname": {
          "firstname": "Jane",
          "lastname": "Doe"
        },
        "email": "jane.doe@example.com",
        "vehicle": {
          "color": "Red",
          "plate": "ABC123",
          "capacity": 4,
          "vehicleType": "car"
        }
      }
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

### 4. Logout Captain

- **URL:** `/logout`
- **Method:** `GET`
- **Description:** Logs out the authenticated captain by blacklisting the JWT token.
- **Headers:**
  - `Authorization: Bearer <jwt_token>`
- **Success Response:**
  - **Status:** `200 OK`
  - **Body:**
    ```json
    {
      "message": "Logged out successfully"
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
