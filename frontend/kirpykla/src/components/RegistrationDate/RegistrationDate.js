import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function RegistrationDate({
  registrationDate,
  setRegistrationDate,
}) {
  return (
    <div>
      <label>
        Registracijos laikas{" "}
        <DatePicker
          id="registrationDate"
          selected={registrationDate ? new Date(registrationDate) : null}
          onChange={(date) => setRegistrationDate(date)}
          showTimeSelect={true}
          timeIntervals={15}
          dateFormat="yyyy-MM-dd HH:mm"
          timeFormat="HH:mm"
        />
      </label>
    </div>
  );
}
