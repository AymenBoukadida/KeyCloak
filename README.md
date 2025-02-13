# Keycloak Setup Guide

## 1. Install Dependencies

```bash
npm install
2. Run Keycloak in Docker
bash
Copy
Edit
docker run -p 8080:8080 \
  -e KEYCLOAK_ADMIN=admin \
  -e KEYCLOAK_ADMIN_PASSWORD=admin \
  -v keycloak_data:/opt/keycloak/data \
  quay.io/keycloak/keycloak:latest start-dev
3. Configure Keycloak
Create Realm: Log in to the admin console at http://127.0.0.1:8080, go to Realms, and add a new realm.
Set URLs:
Root URL: http://127.0.0.1:PORT/ (replace PORT with your app's port).
Valid Redirect URIs: http://127.0.0.1:PORT/*.
Create User: In Users, add a user and set their password.
For more details, visit the Keycloak documentation.

css
Copy
Edit

This version provides the essentials in a more compact form.






You said:
include creating a realm and configuring the enable crendential stuff and the root url and valid uri 
ChatGPT said:
Here's a more streamlined version with the realm creation, credential configuration, and URL setup included:

markdown
Copy
Edit
# Keycloak Setup Guide

## 1. Install Dependencies

```bash
npm install
2. Run Keycloak in Docker
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
