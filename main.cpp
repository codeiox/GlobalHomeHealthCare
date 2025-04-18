#define CROW_ENABLE_SSL
#include "crow.h"
#include <mysqlx/xdevapi.h>
#include <iostream>
#include <string>
#include "headers/Application.h"
#include "headers/routesSetUp.h"


int main(int argc, const char* argv[]) {

    // Initialize the Crow application
    crow::SimpleApp app;

    // Calling function to route HTTPS request
    setupRoutes(app);

    //Tells Crow to hide less important logs
    //app.loglevel(crow::LogLevel::Warning);


    //Enable SSL for HTTPS request handling
    // secure the connection using cert.pem and key.pem self-signed certificate
    app.port(18080).ssl_file("../ssl/cert.pem", "../ssl/key.pem").bindaddr("127.0.0.1").multithreaded().run();


    return 0;
}
