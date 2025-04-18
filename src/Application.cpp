//
// Created by CODEX on 4/13/25.
//
#include "../headers/Application.h"

// constructor
Application::Application(std::string& full_name, std::string& email, std::string& phone_number, std::string& address, int& apt_number,
                         std::string& city, std::string& state,std::string& zip_code, bool is_over18, std::string& description/*,
                         std::string& resumeFilename*/) : full_name(full_name), email(email), phone_number(phone_number) ,address(address),
                         apt_number(apt_number), city(city), state(state), zip_code(zip_code),
                         is_over18(is_over18), description(description)/*, resumeFilename(resumeFilename)*/ { }


// Setter

void Application::SetName(std::string& full_name) {
    this->full_name = full_name;
}

void Application::SetEmail(std::string& email) {
    this->email = email;
}

void Application::SetPhoneNumber(std::string& phone_number) {
    this->phone_number = phone_number;
}
void Application::SetAddress(std::string& address) {
    this->address = address;
}

void Application::SetAptNumber(int& apt_number) {
    this->apt_number = apt_number;
}

void Application::SetCity(std::string& city) {
    this->city = city;
}

void Application::SetState(std::string& state) {
    this->state = state;
}
void Application::SetZipCode(std::string& zip_code) {
    this->zip_code = zip_code;
}
void Application::SetIsOver18(bool is_over18) {
    this->is_over18 = is_over18;
}


void Application::SetDescription(std::string& description) {
    this->description = description;
}

/*void Application::SetResumeFilename(std::string& resumeFilename) {
    this->resumeFilename = resumeFilename;
}*/



// Getters

const std::string& Application::GetName() const {
    return full_name;
}

const std::string& Application::GetPhoneNumber() const {
    return phone_number;
}
const std::string& Application::GetAddress() const {
    return address;
}
const int& Application::GetAptNumber() const {
    return apt_number;
}
const std::string& Application::GetCity() const {
    return city;
}
const std::string& Application::GetState() const {
    return state;
}
const std::string& Application::GetZipCode() const {
    return zip_code;
}
const bool& Application::GetIsOver18() const {
    return is_over18;
}
/*const std::string& Application::GetResumeFilename() const {
    return resumeFilename;
}*/

const std::string& Application::GetEmail() const {
    return email;
}

const std::string& Application::GetDescription() const {
    return description;
}