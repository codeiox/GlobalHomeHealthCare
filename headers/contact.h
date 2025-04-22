//
// Created by CODEX on 4/21/25.
//

#ifndef GLOBAL_HOME_HEALTH_CARE_CONTACT_H
#define GLOBAL_HOME_HEALTH_CARE_CONTACT_H
#include <iostream>
#include <string>

class Contact {
private:
    std::string name;
    std::string email;
    std::string phone_no;
    std::string message;
public:
    Contact() = default;
    Contact(std::string& name, std::string& email, std::string& phone_no, std::string& message);

    // Setters & Getters

    void SetName(std::string& name);
    void SetEmail(std::string& email);
    void SetPhone(std::string& phone_no);
    void SetMessage(std::string& message);

    const std::string& GetName() const;
    const std::string& GetEmail() const;
    const std::string& GetPhone() const;
    const std::string& GetMessage() const;

};


#endif //GLOBAL_HOME_HEALTH_CARE_CONTACT_H
