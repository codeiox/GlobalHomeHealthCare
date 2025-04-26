import { useState } from "react";
import "../src/css/EmploymentComp.css";

export function EmploymentForm() {
  const states = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ];

  // Handles State Selection
  const [selectedState, setSelectedState] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (state: string) => {
    setSelectedState(state);
    setIsOpen(false);
  };

  // Handles Age Selection
  const [selectedAge, setSelectedAge] = useState("");
  const [isAgeOpen, setIsAgeOpen] = useState(false);

  const handleAgeSelect = (ageOption: string) => {
    setSelectedAge(ageOption);
    setIsAgeOpen(false);
  };

  // Handles Best Time to Reach out Selection
  const [selectedBestTime, setSelectedBestTime] = useState("");
  const [isBestTimeOpen, setIsBestTimeOpen] = useState(false);

  const handleSelectBestTime = (time: string) => {
    setSelectedBestTime(time);
    setIsBestTimeOpen(false);
  };

  return (
    <div className="form-wrapper">
      <form>
        <div className="box">
          <label>
            <span style={{ color: "red" }}>*</span> Name:
            <input type="text" name="name" placeholder="Enter name" required />
          </label>
          <label>
            <span style={{ color: "red" }}>*</span> Email:
            <input
              type="text"
              name="email"
              placeholder="name@example.com"
              required
            />
          </label>
        </div>

        <div className="box">
          <label>
            <span style={{ color: "red" }}>*</span> Phone:
            <input
              type="text"
              name="phone"
              placeholder="123-456-7890"
              required
            />
          </label>
          <label>
            <span style={{ color: "red" }}>*</span> Address:
            <input
              type="text"
              name="address"
              placeholder="Enter address"
              required
            />
          </label>
        </div>

        <div className="box">
          <label>
            Apt#:
            <input type="text" name="apt" placeholder="Enter apt" />
          </label>
          <label>
            <span style={{ color: "red" }}>*</span> City:
            <input type="text" name="city" placeholder="Enter city" required />
          </label>
        </div>

        <div className="box">
          <label>
            <span style={{ color: "red" }}>*</span> State:
            <div className="custom-dropdown">
              <div
                className="custom-dropdown-header"
                onClick={() => setIsOpen(!isOpen)}
              >
                {selectedState || "Select a state"}
              </div>
              {isOpen && (
                <ul className="custom-dropdown-list">
                  {states.map((state) => (
                    <li
                      key={state}
                      onClick={() => handleSelect(state)}
                      className="custom-dropdown-item"
                    >
                      {state}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </label>

          <label>
            <span style={{ color: "red" }}>*</span> ZipCode:
            <input
              type="text"
              name="zipcode"
              placeholder="Enter zipcode"
              required
            />
          </label>
        </div>

        <div className="box">
          <label>
            <span style={{ color: "red" }}>*</span> Are you over 18?
            <div className="custom-dropdown">
              <div
                className="custom-dropdown-header"
                onClick={() => setIsAgeOpen(!isAgeOpen)}
              >
                {selectedAge || "Select"}
              </div>
              {isAgeOpen && (
                <ul className="custom-dropdown-list">
                  {["Yes", "No"].map((ageOption) => (
                    <li
                      key={ageOption}
                      onClick={() => handleAgeSelect(ageOption)}
                      className="custom-dropdown-item"
                    >
                      {ageOption}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </label>
          <label>
            <span style={{ color: "red" }}>*</span> Best time to reach:
            <div className="custom-dropdown">
              <div
                className="custom-dropdown-header"
                onClick={() => setIsBestTimeOpen(!isBestTimeOpen)}
              >
                {selectedBestTime || "Select"}
              </div>
              {isBestTimeOpen && (
                <ul className="custom-dropdown-list">
                  {["Morning", "Afternoon", "Evening"].map((time) => (
                    <li
                      key={time}
                      onClick={() => handleSelectBestTime(time)}
                      className="custom-dropdown-item"
                    >
                      {time}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </label>
        </div>

        <div className="box">
          <label>
            <span style={{ color: "red" }}>*</span> Attach files:
            <input type="file" name="attachments" multiple required />
          </label>
        </div>

        <div className="box">
          <label>
            Message:
            <textarea
              name="message"
              placeholder="Write something..."
              rows={4}
              cols={30}
            ></textarea>
          </label>
        </div>

        <div className="submit-box">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}
