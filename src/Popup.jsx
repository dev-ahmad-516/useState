import React, { useState } from "react";
import "./Popup.css";

function Popup({ isOpen, onClose, children }) {
  React.useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 3000); // closes in 3 sec
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;
  return (
    <div className="popup-wrapper">
      <div className="popup-top">
        <button onClick={onClose} className="popup-close" aria-label="Close">
          X
        </button>
        {children}
      </div>
    </div>
  );
}

export default function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div className="popup-container">
      <h2>Random</h2>
      <button className="popup-btn" onClick={() => setIsPopupOpen(true)}>
        Show Popup
      </button>

      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <h3>Ahmad.</h3>
        <p>Task completed successfully!</p>
      </Popup>
    </div>
  );
}
