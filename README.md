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
-p 8080:8080: Exposes port 8080 on your host machine.
-e KEYCLOAK_ADMIN=admin: Sets the admin username.
-e KEYCLOAK_ADMIN_PASSWORD=admin: Sets the admin password.
-v keycloak_data:/opt/keycloak/data: Mounts a Docker volume for persisting Keycloak data.
3. Configure Keycloak
a. Create a Realm
Once Keycloak is up and running, navigate to the admin console at http://127.0.0.1:8080. Log in using the admin credentials (admin / admin).

Go to the Realms section.
Click on Add Realm to create a new realm.
b. Set Up URLs
Within the newly created realm:

Under the Settings tab, add the Root URL:

http://127.0.0.1:PORT/
Replace PORT with the appropriate port number for your application.
Add Valid Redirect URIs:

http://127.0.0.1:PORT/*
c. Create a User
In the Users section, click on Add User.
Fill in the required user details such as username, email, etc.
After creating the user, go to the Credentials tab to set a password for the user.
Enable or disable the user based on your requirements.
