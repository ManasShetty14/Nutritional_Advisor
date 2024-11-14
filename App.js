import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [jsonData, setJsonData] = useState(null);
  const [showAdvice, setShowAdvice] = useState(false);

  useEffect(() => {
    // Fetching JSON from the public folder
    fetch('/n3.json')
      .then((response) => response.json())
      .then((data) => setJsonData(data));
  }, []);

  const handleShowClick = () => {
    setShowAdvice(true);
  };

  const handleCloseClick = () => {
    setShowAdvice(false);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Nutritional Advisor</h1>
        <p>Get nutritional advice based on your food intake</p>
      </header>
      <div className="content-container">
        {/* Display the image if jsonData is available */}
        {jsonData && (
          <img
            src={`data:image/jpeg;base64,${jsonData.image}`}
            alt={jsonData.food_item}
            className="food-image"
          />
        )}
        <div className="button-container">
          {!showAdvice && (
            <button className="rect-button" onClick={handleShowClick}>
              Show Advice
            </button>
          )}
        </div>
        {showAdvice && jsonData && (
          <div className="json-output">
            <h3>
              Food Item Detected: {jsonData.food_item
                .toLowerCase()
                .split(' ')
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ')}
            </h3>
            <h3>Nutritional Advice</h3>
            <p>{jsonData.nutritional_advice}</p>
            <button className="close-button" onClick={handleCloseClick}>
              Close Advice
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
