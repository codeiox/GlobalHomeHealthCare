//
// Created by CODEX on 4/16/25.
//
#include "../headers/routesSetUp.h"
#include "../headers/config.h"
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




void setupRoutes(crow::SimpleApp& app) {


    // Serves index.html page
    CROW_ROUTE(app, "/")([]() {
        std::ifstream file("../docs/index.html");
        if (!file) return crow::response(404);
        std::stringstream buffer;
        buffer << file.rdbuf();
        return crow::response(buffer.str());
    });

    // Serves ourservice.html page
    CROW_ROUTE(app, "/ourservice")([]() {
        std::ifstream file("../docs/ourservice.html");
        if (!file) return crow::response(404);
        std::stringstream buffer;
        buffer << file.rdbuf();
        return crow::response(buffer.str());
    });

    // Serves about.html page
    CROW_ROUTE(app, "/about")([]() {
        std::ifstream file("../docs/about.html");
        if (!file) return crow::response(404);
        std::stringstream buffer;
        buffer << file.rdbuf();
        return crow::response(buffer.str());
    });

    // Serves form.html page
    CROW_ROUTE(app, "/form")([]() {
        std::ifstream file("../docs/form.html");
        if (!file) return crow::response(404);
        std::stringstream buffer;
        buffer << file.rdbuf();
        return crow::response(buffer.str());
    });

    // Serves employment.html page
    CROW_ROUTE(app, "/employment")([]() {
        std::ifstream file("../docs/employment.html");
        if (!file) return crow::response(404);
        std::stringstream buffer;
        buffer << file.rdbuf();
        return crow::response(buffer.str());
    });

    // Serves resources.html page
    CROW_ROUTE(app, "/resources")([]() {
        std::ifstream file("../docs/resources.html");
        if (!file) return crow::response(404);
        std::stringstream buffer;
        buffer << file.rdbuf();
        return crow::response(buffer.str());
    });

    // serve contact page
    CROW_ROUTE(app, "/contact")([]() {
        std::ifstream file("../docs/contact.html");

        if (!file) {
            return crow::response(404);
        }
        std::stringstream buffer;
        buffer << file.rdbuf();
        return crow::response(buffer.str());
    });


    // serves css file
    CROW_ROUTE(app, "/css/<string>")([](const std::string& file) {
        std::ifstream f("../docs/css/" + file);
        if (!f) return crow::response(404);
        std::stringstream buffer; buffer << f.rdbuf();
        crow::response res(buffer.str());
        res.set_header("Content-Type", "text/css");
        return res;
    });

    // serves js file
    CROW_ROUTE(app, "/js/<string>")([](const std::string& file) {
        std::ifstream f("../docs/js/" + file);
        if (!f) return crow::response(404);
        std::stringstream buffer; buffer << f.rdbuf();
        crow::response res(buffer.str());
        res.set_header("Content-Type", "application/javascript");
        return res;
    });

    // serves logo
    CROW_ROUTE(app, "/assets/logo/<string>")([](const std::string& file) {
        std::ifstream f("../docs/assets/logo/" + file, std::ios::binary);
        if (!f) return crow::response(404);
        std::ostringstream buffer; buffer << f.rdbuf();
        crow::response res(buffer.str());
        res.set_header("Content-Type", "image/png");
        return res;
    });

    // serves carousel images
    CROW_ROUTE(app, "/assets/carousel/<string>")([](const std::string& file) {
        std::ifstream f("../docs/assets/carousel/" + file, std::ios::binary);
        if (!f) return crow::response(404);
        std::ostringstream buffer; buffer << f.rdbuf();
        crow::response res(buffer.str());
        res.set_header("Content-Type", "image/png");
        return res;
    });


    // favicon.ico icon routing
    CROW_ROUTE(app, "/favicon.ico")([] {
        std::ifstream file("../docs/favicon.ico", std::ios::binary);
            if (!file) return crow::response(404);

            std::ostringstream buffer;
            buffer << file.rdbuf();
            auto res = crow::response(buffer.str());
            res.set_header("Content-Type", "image/x-icon");
            return res;
    });




    // Define a route for the root URL
    CROW_ROUTE(app, "/submit").methods("POST"_method)
    ([](const crow::request& req) {

        auto body = crow::json::load(req.body);

        // loading config file
        Config config_env;
        config_env.load_env();

        //reCaptcha validation
        std::string recaptchaToken = std::string(body["recaptcha_token"]);
        const char* secret = std::getenv("RECAPTCHA_SECRET");

        if (!verifyRecaptcha(recaptchaToken, secret ? secret : "")) {
            return crow::response(403, "reCAPTCHA verification failed.");
        }


        if (!body) return crow::response(400, "Invalid JSON");

        // Extract data from Application form
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

        // Use Application class
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

        // Connect to the MySQL server
        Session session(config_env.GetHostName(), 33060, config_env.GetDbUserName(), config_env.GetDbPass());
        Schema db = session.getSchema(config_env.GetDbName());
        Table table = db.getTable("applications");

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

        // Close the session
        return crow::response(200, "Application submitted");

    });
}
