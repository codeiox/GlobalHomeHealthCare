//
// Created by CODEX on 4/16/25.
//

#ifndef GLOBAL_HOME_HEALTH_CARE_ROUTESSETUP_H
#define GLOBAL_HOME_HEALTH_CARE_ROUTESSETUP_H

#include <iostream>
#include "../headers/Application.h"
#include "crow.h"
#include <mysqlx/xdevapi.h>

void setupRoutes(crow::SimpleApp& app);

// validated reCAPTCHA
bool verifyRecaptcha(const std::string& token, const std::string& secretKey);

#endif //GLOBAL_HOME_HEALTH_CARE_ROUTESSETUP_H
