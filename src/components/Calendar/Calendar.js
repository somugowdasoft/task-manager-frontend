import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import CheckIcon from "@mui/icons-material/Check";
import "./Calendar.css";

const Calendar = () => {
  const [value, setValue] = useState(new Date());
  const [highlightedDays, setHighlightedDays] = useState([1, 2, 13]);

  // Function to toggle the highlighted day
  const toggleHighlightDay = (day) => {
    const dayOfMonth = day.getDate();
    setHighlightedDays((prev) =>
      prev.includes(dayOfMonth)
        ? prev.filter((d) => d !== dayOfMonth)  // Remove if already highlighted
        : [...prev, dayOfMonth]  // Add to highlighted
    );
  };

  // This function checks if a day should be highlighted
  const isDayHighlighted = (day) => {
    return highlightedDays.includes(day.getDate());
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <StaticDatePicker
        variant="static"
        orientation="portrait"
        value={value}
        disableFuture
        onChange={(newValue) => setValue(newValue)}
        renderInput={(params) => <TextField {...params} />}
        renderDay={(day, _value, DayComponentProps) => {
          const isSelected = !DayComponentProps.outsideCurrentMonth && isDayHighlighted(day);

          return (
            <Badge
              key={day.toString()}
              overlap="circular"
              badgeContent={isSelected ? <CheckIcon color="red" /> : undefined}
            >
              <PickersDay
                {...DayComponentProps}
                onClick={() => toggleHighlightDay(day)}  // Toggle highlight on click
              />
            </Badge>
          );
        }}
      />
    </LocalizationProvider>
  );
};

export default Calendar;
