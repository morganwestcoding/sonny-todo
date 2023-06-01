import React from 'react';

function DateRow() {
  const currentDate = new Date().toLocaleDateString();

  return (
<div>
     <h2>{currentDate}</h2>   
</div>
   
    );
}

export default DateRow;