//
// Created by CODEX on 4/13/25.
//

#ifndef JOB_APPLICATION_H
#define JOB_APPLICATION_H
#include <iostream>
#include <string>
#include <mysqlx/xdevapi.h>


// base class for appointment

// Keep concrete class unless there is different type of appointments

class Application {
private:
    std::string full_name;
    std::string email;
    std::string phone_number;
    std::string address;
    int apt_number;
    std::string city;
    std::string state;
    std::string zip_code;
    bool is_over18;
    std::string description;
    std::string resumeFilename;

public:
    // Default constructor
    Application() = default; //Tells the compiler to auto-generate the default constructor.

    Application(std::string& full_name, std::string& email, std::string& phone_number, std::string& address,
                int& apt_number, std::string& city, std::string& state,
                std::string& zip_code, bool is_over18, std::string& description/*, std::string& resumeFilename*/);

    // Setter and getter
    void SetName(std::string& full_name);
    void SetEmail(std::string& email);

    void SetPhoneNumber(std::string& phone_number);
    void SetAddress(std::string& address);

    void SetAptNumber(int& apt_number);
    void SetCity(std::string& city);

    void SetState(std::string& state);
    void SetZipCode(std::string& zip_code);

    void SetIsOver18(bool is_over18);
    void SetDescription(std::string& description);

    //void SetResumeFilename(std::string& resumeFilename);

    const std::string& GetName() const;
    const std::string& GetEmail() const;

    const std::string& GetPhoneNumber() const;
    const std::string& GetAddress() const;
    const int& GetAptNumber() const;

    const std::string& GetCity() const;
    const std::string& GetState() const;

    const std::string& GetZipCode() const;
    const bool& GetIsOver18() const;

    const std::string& GetDescription() const;

    //const std::string& GetResumeFilename() const;




};


#endif //JOB_APPLICATION_H
