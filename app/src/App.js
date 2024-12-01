import React, { useState, useEffect } from 'react';

function hello(target, i) {
  if (i < target.length) {
    return target[i]; // Return characters from "Hello World" based on i (starting from H)
  }
  return ''; // Return empty string after the full target string is shown
}

function App() {
  const [displayText, setDisplayText] = useState('');
  const target = "Hello World";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText((prevText) => prevText + hello(target, i)); // Append the character from hello
      i += 1;
      if (i >= target.length) { 
        setDisplayText((prevText) => prevText + '!'); // Add '!' at the end
        clearInterval(interval); // Stop after the target string is fully displayed
      }
    }, 100); // Update every 100 milliseconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, []);

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <h1 style={{ fontSize: '8vw', fontWeight: 'bold', textAlign: 'center' }}>
        {displayText}
      </h1>
    </div>
  );
}

export default App;
