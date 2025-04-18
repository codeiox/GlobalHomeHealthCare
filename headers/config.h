//
// Created by CODEX on 4/16/25.
//

#ifndef GLOBAL_HOME_HEALTH_CARE_CONFIG_H
#define GLOBAL_HOME_HEALTH_CARE_CONFIG_H
#include <iostream>
#include <fstream>
#include <sstream>
#include "../include/dotenv/dotenv.h"


class Config {
private:
    std::string db_hostname;
    std::string db_name;
    std::string db_username;
    std::string db_pass;

public:
    Config() = default; // default constructor;

    std::string GetHostName() const { return db_hostname; }
    std::string GetDbName() const { return db_name; }
    std::string GetDbUserName() const { return db_username; }
    std::string GetDbPass() const { return db_pass; }

    void load_env() {
        std::ifstream file(".env"); // opens the file

        if (!file.is_open()) {
            throw std::runtime_error("Unable to open .env file." );
        }

        std::string line;
        while (std::getline(file, line)) {
            // Skip comments and empty lines
            if (line.empty() || line[0] == '#') continue;

            size_t delimiter_pos = line.find('=');
            if (delimiter_pos == std::string::npos) continue;

            std::string key = line.substr(0, delimiter_pos);
            std::string value = line.substr(delimiter_pos + 1);

            // Remove potential whitespace
            key.erase(0, key.find_first_not_of(" \t\n\r\f\v"));
            key.erase(key.find_last_not_of(" \t\n\r\f\v") + 1);
            value.erase(0, value.find_first_not_of(" \t\n\r\f\v"));
            value.erase(value.find_last_not_of(" \t\n\r\f\v") + 1);

            // Set environment variable
            setenv(key.c_str(), value.c_str(), 1);


            // Assign values to corresponding class members
            if (key == "DB_HOST") {
                db_hostname = value;
            }
            else if (key == "DB_NAME") {
                db_name = value;
            }
            else if (key == "DB_USER") {
                db_username = value;
            }
            else if (key == "DB_PASS") {
                db_pass = value;
            }
        }

        file.close(); // close the file
    }

};

#endif //GLOBAL_HOME_HEALTH_CARE_CONFIG_H
