# Keycloak Setup Guide

## 1. Install Dependencies


npm install
2. Run Keycloak in Docker

docker run -p 8080:8080 \
  -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=admin \
  -v keycloak_data:/opt/keycloak/data \
  quay.io/keycloak/keycloak:latest start-dev
3. Configure Keycloak
Create Realm:

Log in to the admin console at http://127.0.0.1:8080 using the admin credentials.
Navigate to Realms and click Add Realm.
Name your realm and save.
Set URLs:

Go to the Realm Settings tab.
Set Root URL to http://127.0.0.1:PORT/ (replace PORT with your app's port).
Set Valid Redirect URIs to http://127.0.0.1:PORT/*.
Enable Credentials:

In the Realm Settings, go to the Credentials tab.
Enable password and other credential options as needed.
Create User:

Go to Users and click Add User.
Fill out user details, then go to the Credentials tab to set a password.
