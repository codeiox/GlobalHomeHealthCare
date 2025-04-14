//
// Created by CODEX on 4/13/25.
//

#ifndef JOB_TRAINING_TIME_H
#define JOB_TRAINING_TIME_H


class Time {
private:
    int hour;
    int minutes;
public:
    Time() = default;
    Time(int hour, int minutes);

    // getters and setters
    void SetHour(int hour);
    void SetMinutes(int minutes);

    int GetHours() const;
    int GetMinutes() const;

};


#endif //JOB_TRAINING_TIME_H
