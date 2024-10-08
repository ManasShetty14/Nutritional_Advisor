import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const [jsonData, setJsonData] = useState(null);

  useEffect(() => {
    // Fetching JSON from the public folder
    fetch('/hello15.json')
      .then((response) => response.json())
      .then((data) => setJsonData(data));
  }, []);

  const handleClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="App">
      <div className="button-container">
        <button className="circle-button" onClick={handleClick}>
          Click me
        </button>
      </div>
      {showPopup && jsonData && (
        <div className="popup">
          <div className="popup-content">
            <span>{jsonData.nutritional_advice}</span>
            <hr/>
            <button className="close-button" onClick={closePopup}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
