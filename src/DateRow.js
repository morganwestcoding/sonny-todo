import React from 'react';

function DateRow() {
  const currentDate = new Date().toLocaleDateString();

  return (
<div>
     <h3>{currentDate}</h3>   
</div>
   
    );
}

export default DateRow;