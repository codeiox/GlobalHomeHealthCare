//#define CROW_ENABLE_SSL
#include "crow.h"
#include <mysqlx/xdevapi.h>
#include "headers/Application.h"
#include "headers/routesSetUp.h"
#include <cstdlib>
#include "headers/config.h"


int main(int argc, const char* argv[]) {

    // Initialize the Crow application
    crow::SimpleApp app;


    // python to send notification
//    Config config;
//    config.load_env();  // sets environment for C++ and Python
//
//    // Run Python scripts before server starts
//    int result = system("python3 ../include/scripts/notify.py");
//
//    if (result == 0) {
//        std::cout << "Python script executed sucessfully.\n";
//    }
//    else {
//        std::cerr << "Python script execution failed.\n";
//    }
//
//
//    int result1 = system("python3 ../include/scripts/delete_record.py");
//
//    if (result1 == 0) {
//        std::cout << "Deleted all data.\n";
//    }
//    else {
//        std::cerr << "Python delete script failed.\n";
//    }



    // Calling function to route HTTPS request
    setupRoutes(app);

    //Tells Crow to hide less important logs
    //app.loglevel(crow::LogLevel::Warning);





    //Enable SSL for HTTPS request handling
    // secure the connection using cert.pem and key.pem self-signed certificate
    //app.port(18080).ssl_file("../ssl/cert.pem", "../ssl/key.pem").multithreaded().run();
    app.port(18080).multithreaded().run();


    return 0;
}
