import React from "react";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleContactChange = (event) => {
    setContact(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title-input">Title</label>
      <input
        type="text"
        id="title-input"
        value={title}
        onChange={handleTitleChange}
      />
      <label htmlFor="date-input">Date</label>
      <input
        type="date"
        id="date-input"
        value={date}
        onChange={handleDateChange}
        min={getTodayString()}
      />
      <label htmlFor="time-input">Time</label>
      <input
        type="time"
        id="time-input"
        value={time}
        onChange={handleTimeChange}
      />
      <label htmlFor="contact-input">Contact</label>
      <select id="contact-input" value={contact} onChange={handleContactChange}>
        {contacts.map((contact) => (
          <option key={contact.name} value={contact.name}>
            {contact.name}
          </option>
        ))}
      </select>
      <button type="submit">Add Appointment</button>
    </form>
  );
}