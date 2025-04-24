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
bool verifyRecaptcha(const std::string &token, const std::string &secretKey) {
    CURL *curl = curl_easy_init(); //This creates and initializes a new CURL handle
    if (!curl) {
        return false;
    }
    std::string postFields = "secret=" + secretKey + "&response=" + token;
    std::string response;

    curl_easy_setopt(curl, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
    curl_easy_setopt(curl, CURLOPT_POSTFIELDS, postFields.c_str());

    curl_easy_setopt(curl, CURLOPT_WRITEFUNCTION,
                     +[](char *ptr, size_t size, size_t nmemb, std::string *data) {
                         data->append(ptr, size * nmemb);
                         return size * nmemb;
                     });
    curl_easy_setopt(curl, CURLOPT_WRITEDATA, &response);

    CURLcode res = curl_easy_perform(curl);
    curl_easy_cleanup(curl);

    return res == CURLE_OK && response.find("\"success\": true") != std::string::npos;
}


// Utility: Manually check if a string ends with a given suffix
bool endsWith(const std::string &str, const std::string &suffix) {
    return str.size() >= suffix.size() &&
           str.compare(str.size() - suffix.size(), suffix.size(), suffix) == 0;
}


// Routes static website content such as images, HTML, CSS, JavaScript, and more.
void setupRoutes(crow::SimpleApp &app) {


    // Route: Serves static assets (JS, CSS, images) built by Vite under /assets/
    // Usage: Matches requests like /assets/index-*.js, /assets/index-*.css, etc.
    // Route: Serves all assets in /dist/assets/** (including subfolders)
    // Route: Serve any file from /assets/** with correct MIME types
    CROW_ROUTE(app, "/assets/<path>")
    ([](const crow::request &, crow::response &res, const std::string &path) {
        std::ifstream file("../react-ui/dist/assets/" + path, std::ios::binary);
        if (!file.is_open()) {
            res.code = 404;
            res.end("Asset not found");
            return;
        }

        std::ostringstream buffer;
        buffer << file.rdbuf();

        if (endsWith(path, ".js")) {
            res.set_header("Content-Type", "application/javascript");
        }
        else if (endsWith(path, ".css")) {
            res.set_header("Content-Type", "text/css");
        }
        else if (endsWith(path, ".png")) {
            res.set_header("Content-Type", "image/png");
        }
        else if (endsWith(path, ".jpg") || endsWith(path, ".jpeg")) {
            res.set_header("Content-Type", "image/jpeg");
        }
        else if (endsWith(path, ".webp")) {
            res.set_header("Content-Type", "image/webp");
        }
        else if (endsWith(path, ".woff")) {
            res.set_header("Content-Type", "font/woff");
        }
        else if (endsWith(path, ".woff2")) {
            res.set_header("Content-Type", "font/woff2");
        }
        else {
            res.set_header("Content-Type", "application/octet-stream");
        }

        res.write(buffer.str());
        res.end();
    });


// Fallback: Serves index.html for React Router routes like /home, /contact, etc.
    CROW_ROUTE(app, "/")
            ([](const crow::request &, crow::response &res) {
                std::ifstream file("../react-ui/dist/index.html");
                if (!file.is_open()) {
                    res.code = 404;
                    res.end("index.html not found");
                    return;
                }

                std::stringstream buffer;
                buffer << file.rdbuf();
                res.set_header("Content-Type", "text/html");
                res.write(buffer.str()); // adds content to the response body.
                res.end(); //finalizes and sends the response to the client.
            });


    CROW_ROUTE(app, "/<path>")
    ([](const crow::request &req, crow::response &res, const std::string& /*path*/) {
        std::ifstream file("../react-ui/dist/index.html");
        if (!file.is_open()) {
            res.code = 404;
            res.end("index.html not found");
            return;
        }

        std::stringstream buffer;
        buffer << file.rdbuf();
        res.set_header("Content-Type", "text/html");
        res.write(buffer.str()); // adds content to the response body.
        res.end(); // finalizes and sends the response to the client.
    });



    // Serves favicon.ico via HTTP request
    CROW_ROUTE(app, "/favicon.ico")([]() {
        std::ifstream favicon("../react-ui/dist/favicon.ico", std::ios::binary);
        if (!favicon.is_open()) {
            return crow::response(404, "favicon.ico not found");
        }

        std::ostringstream buffer;
        buffer << favicon.rdbuf();
        crow::response res(buffer.str());
        res.set_header("Content-Type", "image/x-icon");
        return res;
    });






    // Define a route for the root URL                    Lambda function
    CROW_ROUTE(app, "/submit").methods("POST"_method)([](const crow::request &req) {

        auto body = crow::json::load(req.body);  // reads the raw JSON string data from
        // the request body and parses it into a crow::json::rvalue object

        // loading config file
        Config config_env;
        config_env.load_env();

        //reCaptcha validation
        std::string recaptchaToken = std::string(body["recaptcha_token"]);
        const char *secret = std::getenv("RECAPTCHA_SECRET");

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
        catch (const mysqlx::Error &err) {
            CROW_LOG_ERROR << "MySQL error: " << err.what();
            return crow::response(500, "Database connection or query failed.");
        }

        // Close the session
        return crow::response(200, "Application submitted");

    });




    // Route to handle contact form submission and insert data into a separate table
    CROW_ROUTE(app, "/submit_contact").methods("POST"_method)([](const crow::request &req) {

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
        catch (const mysqlx::Error &err) {
            CROW_LOG_ERROR << "MySQL error: " << err.what();
            return crow::response(500, "Database connection or query failed.");
        }

        // close the session
        return crow::response(200, "Message has been sent!");

    });


}
