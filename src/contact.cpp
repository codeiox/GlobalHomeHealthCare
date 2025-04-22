//
// Created by CODEX on 4/21/25.
//

#include "../headers/contact.h"


Contact::Contact(std::string& name, std::string& email, std::string& phone_no, std::string& message) {
    this->name = name;
    this->email = email;
    this->phone_no = phone_no;
    this->message = message;
}

// Setters & Getters

void Contact::SetName(std::string& name) {
    this->name = name;
}
void Contact::SetEmail(std::string& email) {
    this->email = email;
}
void Contact::SetPhone(std::string& phone_no) {
    this->phone_no = phone_no;
}
void Contact::SetMessage(std::string& message) {
    this->message = message;
}

const std::string& Contact::GetName() const {
    return name;
}
const std::string& Contact::GetEmail() const {
    return email;
}
const std::string& Contact::GetPhone() const {
    return phone_no;
}
const std::string& Contact::GetMessage() const {
    return message;
}
