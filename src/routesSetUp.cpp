//
// Created by CODEX on 4/16/25.
//
#include "../headers/routesSetUp.h"
#include "../headers/config.h"
#include "../headers/contact.h"
#include "curl/curl.h"
#include <sstream>
#include <string>


// validated reCAPTCHA
bool verifyRecaptcha(const std::string& token, const std::string& secretKey) {
    CURL* curl = curl_easy_init(); //This creates and initializes a new CURL handle
    if (!curl) {
        return false;
    }
    std::string postFields = "secret=" + secretKey + "&response=" + token;
    std::string response;

    curl_easy_setopt(curl, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
    curl_easy_setopt(curl, CURLOPT_POSTFIELDS, postFields.c_str());

    curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION,
                     +[](char* ptr, size_t size, size_t nmemb, std::string* data) {
        data->append(ptr, size * nmemb);
        return size * nmemb;
    });
    curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);

    CURLcode res = curl_easy_perform(curl);
    curl_easy_cleanup(curl);

    return res == CURLE_OK && response.find("\"success\": true") != std::string::npos;
}



// Routes static website content such as images, HTML, CSS, JavaScript, and more.
void setupRoutes(crow::SimpleApp& app) {


    // Serves index.html page via HTTP request
    CROW_ROUTE(app, "/")([]() {
        std::ifstream htmlFile("../docs/index.html");
        if (!htmlFile.is_open())  {
            std::ifstream errorPage("../docs/404.html");
            if (!errorPage.is_open()) {
                return crow::response(404, "404 Not Found");
            }
            std::stringstream errorBuffer;
            errorBuffer << errorPage.rdbuf();
            crow::response res(errorBuffer.str());
            res.code = 404;
            return res;
        }
        std::stringstream buffer;
        buffer << htmlFile.rdbuf();
        return crow::response(buffer.str());
    });

    // Serves ourservice.html page via HTTP request
    CROW_ROUTE(app, "/ourservice")([]() {
        std::ifstream htmlFile("../docs/ourservice.html");
        if (!htmlFile.is_open()) {
            std::ifstream errorPage("../docs/404.html");
            if (!errorPage.is_open()) {
                return crow::response(404, "404 Not Found");
            }
            std::stringstream errorBuffer;
            errorBuffer << errorPage.rdbuf();
            crow::response res(errorBuffer.str());
            res.code = 404;
            return res;
        }
        std::stringstream buffer;
        buffer << htmlFile.rdbuf();
        return crow::response(buffer.str());
    });

    // Serves about.html page via HTTP request
    CROW_ROUTE(app, "/about")([]() {
        std::ifstream htmlFile("../docs/about.html");
        if (!htmlFile.is_open()) {
            std::ifstream errorPage("../docs/404.html");
            if (!errorPage.is_open()) {
                return crow::response(404, "404 Not Found");
            }
            std::stringstream errorBuffer;
            errorBuffer << errorPage.rdbuf();
            crow::response res(errorBuffer.str());
            res.code = 404;
            return res;
        }
        std::stringstream buffer;
        buffer << htmlFile.rdbuf();
        return crow::response(buffer.str());
    });

    // Serves form.html page via HTTP request
    CROW_ROUTE(app, "/form")([]() {
        std::ifstream htmlFile("../docs/form.html");
        if (!htmlFile.is_open()) {
            std::ifstream errorPage("../docs/404.html");
            if (!errorPage.is_open()) {
                return crow::response(404, "404 Not Found");
            }
            std::stringstream errorBuffer;
            errorBuffer << errorPage.rdbuf();
            crow::response res(errorBuffer.str());
            res.code = 404;
            return res;
        }
        std::stringstream buffer;
        buffer << htmlFile.rdbuf();
        return crow::response(buffer.str());
    });

    // Serves employment.html page via HTTP request
    CROW_ROUTE(app, "/employment")([]() {
        std::ifstream htmlFile("../docs/employment.html");
        if (!htmlFile.is_open()) {
            std::ifstream errorPage("../docs/404.html");
            if (!errorPage.is_open()) {
                return crow::response(404, "404 Not Found");
            }
            std::stringstream errorBuffer;
            errorBuffer << errorPage.rdbuf();
            crow::response res(errorBuffer.str());
            res.code = 404;
            return res;
        }
        std::stringstream buffer;
        buffer << htmlFile.rdbuf();
        return crow::response(buffer.str());
    });

    // Serves resources.html page via HTTP request
    CROW_ROUTE(app, "/resources")([]() {
        std::ifstream htmlFile("../docs/resources.html");
        if (!htmlFile.is_open()) {
            std::ifstream errorPage("../docs/404.html");
            if (!errorPage.is_open()) {
                return crow::response(404, "404 Not Found");
            }
            std::stringstream errorBuffer;
            errorBuffer << errorPage.rdbuf();
            crow::response res(errorBuffer.str());
            res.code = 404;
            return res;
        }
        std::stringstream buffer;
        buffer << htmlFile.rdbuf();
        return crow::response(buffer.str());
    });

    // serve contact page via HTTP request
    CROW_ROUTE(app, "/contact")([]() {
        std::ifstream htmlFile("../docs/contact.html");

        if (!htmlFile) {
            std::ifstream errorPage("../docs/404.html");
            if (!errorPage.is_open()) {
                return crow::response(404, "404 Not Found");
            }
            std::stringstream errorBuffer;
            errorBuffer << errorPage.rdbuf();
            crow::response res(errorBuffer.str());
            res.code = 404;
            return res;
        }
        std::stringstream buffer;
        buffer << htmlFile.rdbuf();
        return crow::response(buffer.str());
    });

    // Serves privacy policy page via HTTP request
    CROW_ROUTE(app, "/privacy")([]() {
        std::ifstream htmlFile("../docs/privacy.html"); // full path to file

        if(!htmlFile.is_open()) { // if file not open
            std::ifstream errorPage("../docs/404.html");
            if (!errorPage.is_open()) {
                return crow::response(404, "404 Not Found");
            }
            std::stringstream errorBuffer;
            errorBuffer << errorPage.rdbuf();
            crow::response res(errorBuffer.str());
            res.code = 404;
            return res;
        }
        std::stringstream buffer;
        buffer << htmlFile.rdbuf(); // redirect buffer
        return crow::response(buffer.str());
    });


    // Serves Terms and Conditions page via HTTP request
    CROW_ROUTE(app, "/termsAndConditions") ([]() {
        std::ifstream htmlFile("../docs/termsAndConditions.html");
        if (!htmlFile.is_open()) { // if file not open
            std::ifstream errorPage("../docs/404.html");
            if (!errorPage.is_open()) {
                return crow::response(404, "404 Not Found");
            }
            std::stringstream errorBuffer;
            errorBuffer << errorPage.rdbuf();
            crow::response res(errorBuffer.str());
            res.code = 404;
            return res;
        }
        std::stringstream buffer; // else
        buffer << htmlFile.rdbuf(); // redirect buffer
        return crow::response(buffer.str());
    });



    // Serves 404 error page via HTTP request

    CROW_ROUTE(app, "/404")([]() {
        std::ifstream file_404("../docs/404.html");

        if (!file_404.is_open()) {
            return crow::response(404);
        }
        std::stringstream buffer;
        buffer << file_404.rdbuf();
        return crow::response(buffer.str());
    });

    CROW_ROUTE(app, "/assets/404_page/<string>")([](const std::string& file) {
        std::ifstream mp4_file("../docs/assets/404_page/" + file, std::ios::binary);

        if (!mp4_file.is_open()) {
            return crow::response(404);
        }
        std::stringstream buffer;
        buffer << mp4_file.rdbuf();
        crow::response res(buffer.str());
        res.set_header("Content-Type", "video/mp4");
        return res;
    });






    // serves css file via HTTP request
    CROW_ROUTE(app, "/css/<string>")([](const std::string& file) {
        std::ifstream cssFile("../docs/css/" + file);
        if (!cssFile.is_open()) {
            std::ifstream errorPage("../docs/404.html");
            if (!errorPage.is_open()) {
                return crow::response(404, "404 Not Found");
            }
            std::stringstream errorBuffer;
            errorBuffer << errorPage.rdbuf();
            crow::response res(errorBuffer.str());
            res.code = 404;
            return res;
        }
        std::stringstream buffer;
        buffer << cssFile.rdbuf();
        crow::response res(buffer.str());
        res.set_header("Content-Type", "text/css");
        return res;
    });



    // serves js file via HTTP request
    CROW_ROUTE(app, "/js/<string>")([](const std::string& file) {
        std::ifstream js_File("../docs/js/" + file);
        if (!js_File.is_open()) {
            std::ifstream errorPage("../docs/404.html");
            if (!errorPage.is_open()) {
                return crow::response(404, "404 Not Found");
            }
            std::stringstream errorBuffer;
            errorBuffer << errorPage.rdbuf();
            crow::response res(errorBuffer.str());
            res.code = 404;
            return res;
        }
        std::stringstream buffer;
        buffer << js_File.rdbuf();
        crow::response res(buffer.str());
        res.set_header("Content-Type", "application/javascript");
        return res;
    });



    // serves logo via HTTP request
    CROW_ROUTE(app, "/assets/logo/<string>")([](const std::string& file) {
        std::ifstream imgContent("../docs/assets/logo/" + file, std::ios::binary);
        if (!imgContent.is_open()) {
            std::ifstream errorPage("../docs/404.html");
            if (!errorPage.is_open()) {
                return crow::response(404, "404 Not Found");
            }
            std::stringstream errorBuffer;
            errorBuffer << errorPage.rdbuf();
            crow::response res(errorBuffer.str());
            res.code = 404;
            return res;
        }
        std::ostringstream buffer;
        buffer << imgContent.rdbuf();
        crow::response res(buffer.str());
        res.set_header("Content-Type", "image/png");
        return res;
    });



    // serves carousel images via HTTP request
    CROW_ROUTE(app, "/assets/carousel/<string>")([](const std::string& file) {
        std::ifstream imgContent("../docs/assets/carousel/" + file, std::ios::binary);
        if (!imgContent.is_open()) {
            std::ifstream errorPage("../docs/404.html");
            if (!errorPage.is_open()) {
                return crow::response(404, "404 Not Found");
            }
            std::stringstream errorBuffer;
            errorBuffer << errorPage.rdbuf();
            crow::response res(errorBuffer.str());
            res.code = 404;
            return res;
        }
        std::ostringstream buffer;
        buffer << imgContent.rdbuf();
        crow::response res(buffer.str());
        res.set_header("Content-Type", "image/png");
        return res;
    });

    // Serves about page image via HTTP request
    CROW_ROUTE(app, "/assets/about_page_img/<string>")([](const std::string& file) {
        std::ifstream imgContent("../docs/assets/about_page_img/" + file, std::ios::binary);

        if (!imgContent.is_open()) {
            std::ifstream errorPage("../docs/404.html");
            if (!errorPage.is_open()) {
                return crow::response(404, "404 Not Found");
            }
            std::stringstream errorBuffer;
            errorBuffer << errorPage.rdbuf();
            crow::response res(errorBuffer.str());
            res.code = 404;
            return res;
        }
        std::ostringstream buffer;
        buffer << imgContent.rdbuf(); // redirect buffer
        crow::response res(buffer.str()); // creates HTTP response (The binary file data is turned into the HTTP response body.)
        res.set_header("Content-Type", "image/png"); //This tells the browser it’s receiving a PNG image.
        return res;

    });

    // Serves favicon.ico icon via HTTP request
    CROW_ROUTE(app, "/favicon.ico")([]() {
        std::ifstream favicon_img("../docs/favicon.ico", std::ios::binary);
            if (!favicon_img.is_open()) {
                std::ifstream errorPage("../docs/404.html");
                if (!errorPage.is_open()) {
                    return crow::response(404, "404 Not Found");
                }
                std::stringstream errorBuffer;
                errorBuffer << errorPage.rdbuf();
                crow::response res(errorBuffer.str());
                res.code = 404;
                return res;
            }

            std::ostringstream buffer;
            buffer << favicon_img.rdbuf();
            auto res = crow::response(buffer.str());
            res.set_header("Content-Type", "image/x-icon");
            return res;
    });


    // Serves contact image via HTTP request
    CROW_ROUTE(app, "/assets/contact_page/<string>")([](const std::string& file) {
        std::ifstream imgContent("../docs/assets/contact_page/" + file, std::ios::binary);
        if (!imgContent.is_open()) {
            std::ifstream errorPage("../docs/404.html");
            if (!errorPage.is_open()) {
                return crow::response(404, "404 Not Found");
            }
            std::stringstream errorBuffer;
            errorBuffer << errorPage.rdbuf();
            crow::response res(errorBuffer.str());
            res.code = 404;
            return res;
        }
        std::ostringstream buffer;
        buffer << imgContent.rdbuf();
        crow::response res(buffer.str());
        res.set_header("Content-Type", "image/png");
        return res;
    });





    // Define a route for the root URL                    Lambda function
    CROW_ROUTE(app, "/submit").methods("POST"_method) ([](const crow::request& req) {

        auto body = crow::json::load(req.body);  // reads the raw JSON string data from
                                                        // the request body and parses it into a crow::json::rvalue object

        // loading config file
        Config config_env;
        config_env.load_env();

        //reCaptcha validation
        std::string recaptchaToken = std::string(body["recaptcha_token"]);
        const char* secret = std::getenv("RECAPTCHA_SECRET");

        // secret token validation
        if (!verifyRecaptcha(recaptchaToken, secret ? secret : "")) {
            return crow::response(403, "reCAPTCHA verification failed.");
        }

        if (!body) {
            CROW_LOG_ERROR << "Invalid JSON: " << req.body;
            return crow::response(400, "Invalid JSON");
        }

        // Extract data from Application form
        // Accepts a request body as JSON format
        std::string name = std::string(body["full_name"]);
        std::string email = std::string(body["email"]);
        std::string phone = std::string(body["phone_number"]);
        std::string address = std::string(body["address"]);
        int apt = static_cast<int>(body["apt_number"]);
        std::string city = std::string(body["city"]);
        std::string state = std::string(body["state"]);
        std::string zip = std::string(body["zipcode"]);
        bool over18 = (body["is_over18"].b());
        std::string desc = std::string(body["description"]);
        //std::string resume = std::string(body["resume_filename"]);

        // Use Application class to set data
        Application appData;
        appData.SetName(name);
        appData.SetEmail(email);
        appData.SetPhoneNumber(phone);
        appData.SetAddress(address);
        appData.SetAptNumber(apt);
        appData.SetCity(city);
        appData.SetState(state);
        appData.SetZipCode(zip);
        appData.SetIsOver18(over18);
        appData.SetDescription(desc);
        //appData.SetResumeFilename(resume);


        using namespace mysqlx; // MySQL Connector/C++ API
        try {



            // Connect to the MySQL server and Logs in to database using config file (.env)
            //              // Host Name              // Port           // username             // password
            Session session(config_env.GetHostName(), 33060, config_env.GetDbUserName(), config_env.GetDbPass());
            Schema db = session.getSchema(config_env.GetDbName()); // gets the database name
            Table table = db.getTable("applications"); // gets the table to insert data

            // inserts the data into table
            table.insert("full_name", "email", "phone_number", "address", "apt_number", "city", "state", "zipcode", "is_over18", "description")

                    .values(
                            appData.GetName(),
                            appData.GetEmail(),
                            appData.GetPhoneNumber(),
                            appData.GetAddress(),
                            appData.GetAptNumber(),
                            appData.GetCity(),
                            appData.GetState(),
                            appData.GetZipCode(),
                            appData.GetIsOver18(),
                            appData.GetDescription()/*,
                        appData.GetResumeFilename()*/
                    ).execute();
        }
        catch (const mysqlx::Error& err) {
            CROW_LOG_ERROR << "MySQL error: " << err.what();
            return crow::response(500, "Database connection or query failed.");
        }

        // Close the session
        return crow::response(200, "Application submitted");

    });




    // Route to handle contact form submission and insert data into a separate table
    CROW_ROUTE(app, "/submit_contact").methods("POST"_method) ([](const crow::request& req) {

        auto body = crow::json::load(req.body);
        Config config;
        config.load_env(); // gets the database credentials from .env config file
        using namespace mysqlx; // MySQL Connector/C++ API

        if (!body) {
            CROW_LOG_ERROR << "Invalid JSON: " << req.body;
            return crow::response(400, "Invalid JSON");
        }


        // Extract data from Application form
        // Accepts a request body as JSON format
        std::string name = std::string(body["full_name"]);
        std::string email = std::string(body["email"]);
        std::string phone = std::string(body["phone_number"]);
        std::string message = std::string(body["message"]);


        // passes the data to class members
        Contact contactData;
        contactData.SetName(name);
        contactData.SetEmail(email);
        contactData.SetPhone(phone);
        contactData.SetMessage(message);

        // Connect to the MySQL server and Logs in to database using config file (.env)
        try {
            //              // Host Name        // Port         // username         // password
            Session session(config.GetHostName(), 33060, config.GetDbUserName(), config.GetDbPass());
            Schema db = session.getSchema(config.GetDbName()); // gets the database name and opens with all credentials
            Table table = db.getTable("contact_submissions"); // opens the table named contact_submissions in the database

            // Now insert the data into database
            table.insert("full_name", "email", "phone_number", "message").values(
                    contactData.GetName(), contactData.GetEmail(), contactData.GetPhone(), contactData.GetMessage()
            ).execute();


        }
        catch (const mysqlx::Error& err) {
            CROW_LOG_ERROR << "MySQL error: " << err.what();
            return crow::response(500, "Database connection or query failed.");
        }

        // close the session
        return crow::response(200, "Message has been sent!");

    });


}
