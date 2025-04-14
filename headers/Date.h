//
// Created by CODEX on 4/13/25.
//

#ifndef JOB_TRAINING_DATE_H
#define JOB_TRAINING_DATE_H


class Date {
private:
    int day;
    int month;
    int year;
public:
    Date() = default;
    Date(int day, int month, int year);

    // setters and getters
    void SetDay(int day);
    void SetMonth(int month);
    void SetYear(int year);

    int GetDay() const;
    int GetMonth() const;
    int GetYear() const;
};


#endif //JOB_TRAINING_DATE_H
