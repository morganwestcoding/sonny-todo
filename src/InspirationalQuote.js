import React, { useEffect, useState } from 'react';

function InspirationalQuote() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json())
      .then((data) => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex];
        setQuote(randomQuote.text);
      })
      .catch((error) => {
        console.error('Error fetching quote:', error);
      });
  }, []);

  return (
    <div>
      <h2>Inspirational Quote:</h2>
      <p>{quote}</p>
    </div>
  );
}

export default InspirationalQuote;