import React from 'react';

function DateRow() {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className='date'>
      <h2>Date:</h2>
      <p>{currentDate}</p>
    </div>
    );
}

export default DateRow;