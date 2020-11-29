import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import './style.css';
import 'react-datepicker/dist/react-datepicker.css';
function OverkayBlock(props) {
  const [date, setDate] = useState(new Date());

  const handleDateSelect = () => {
    props.onAddContacts({ date });
  };

  const handleDateChange = date => {
    setDate(date);
  };

  return (
    <DatePicker
      minDate={new Date()}
      className="calendar"
      selected={date}
      onSelect={handleDateSelect} //when day is clicked
      onChange={handleDateChange} //only when value has changed
    />
  );
}

export default OverkayBlock;
