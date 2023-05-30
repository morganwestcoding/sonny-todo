import React from 'react';

function DateRow() {
  const currentDate = new Date().toLocaleDateString();

  return <p>{currentDate}</p>;
}

export default DateRow;