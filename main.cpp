#define CROW_ENABLE_SSL
#include "crow.h"
#include <mysqlx/xdevapi.h>
#include <iostream>
#include <string>
#include "headers/Application.h"



int main(int argc, const char* argv[]) {

    // Initialize the Crow application
    crow::SimpleApp app;


    // Define a route for the root URL
    CROW_ROUTE(app, "/") ([](){
        return "Hello world\n";
    });

    //Enable SSL for HTTPS request
    app.port(443)
            .ssl_file("cert.pem", "key.pem")
            .multithreaded()
            .run();


    return 0;
}
