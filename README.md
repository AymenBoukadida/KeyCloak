#npm install
#docker run -p 8080:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin -v keycloak_data:/opt/keycloak/data quay.io/keycloak/keycloak:latest start-dev
#configure keycloak :
    * create realm  
    * add root url : http://127.0.0.1:port/
    * add valid uri : http://127.0.0.1:port/*
    * create a user 
    
    
