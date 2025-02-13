# Keycloak Setup Guide

## 1. Install Dependencies
Run the following command to install necessary npm packages:
```bash
npm install
2. Run Keycloak in Docker
Start Keycloak using Docker with the following command:

bash
Copy
Edit
docker run -p 8080:8080 \
  -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=admin \
  -v keycloak_data:/opt/keycloak/data \
  quay.io/keycloak/keycloak:latest start-dev
3. Configure Keycloak
Create Realm:
Log in to the admin console at http://127.0.0.1:8080 using the admin credentials.
Navigate to Realms and click Add Realm.
Name your realm and click Save.
Set URLs:
Go to the Realm Settings tab.
Set Root URL to http://127.0.0.1:PORT/ (replace PORT with your app's port).
Set Valid Redirect URIs to http://127.0.0.1:PORT/*.
Enable Credentials:
In the Realm Settings, go to the Credentials tab.
Enable password and other credential options as needed.
Create User:
Go to the Users section and click Add User.
Fill out the user details and click Save.
Go to the Credentials tab to set the user password.
