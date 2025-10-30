
import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./PasswordToggle.css";

export default function PasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="password-container">
      <h2>Enter password</h2>

      <div className="password-input-wrapper">
        <input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          className="password-input"
        />
        <span
          className="toggle-eye"
          onClick={() => setShowPassword(!showPassword)}
          title={showPassword ? "Hide Password" : "Show Password"}
        >
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
    </div>
  );
}

