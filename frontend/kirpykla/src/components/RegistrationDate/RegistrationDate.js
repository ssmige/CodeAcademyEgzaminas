import { lt } from "date-fns/locale";
import styles from "./RegistrationDate.module.css";
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function RegistrationDate({
  registrationDate,
  setRegistrationDate,
  className,
  children,
  onClick,
}) {
  const filterWorkingHours = (time) => {
    return time.getHours() >= 8 && time.getHours() < 20;
  };

  const filterPassedDays = (date) => new Date() < date;

  return (
    <div>
      <DatePicker
        className={styles.datePicker}
        id="registrationDate"
        selected={registrationDate ? new Date(registrationDate) : null}
        onChange={(date) => setRegistrationDate(date)}
        showTimeSelect={true}
        timeIntervals={15}
        dateFormat="yyyy-MM-dd HH:mm"
        timeFormat="HH:mm"
        // showIcon
        placeholderText={"Pasirinkite vizito laiką"}
        calendarStartDay={1}
        locale={lt}
        timeCaption="Laikas"
        filterTime={filterWorkingHours}
        filterDate={filterPassedDays}
      />
    </div>
  );
}
