import React, { useState } from "react";

function PasswordStrengthChecker() {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState("");

  const evaluateStrength = (password) => {
    if (password.length === 0) {
      return "";
    } else if (password.length < 6) {
      return "Weak";
    }

    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*]/.test(password);

    if (hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar && password.length >= 10) {
      return "Strong";
    } else if ((hasUpperCase || hasLowerCase) && hasNumbers && password.length >= 8) {
      return "Medium";
    } else {
      return "Weak";
    }
  };

  const handleChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    setStrength(evaluateStrength(newPassword));
  };

  return (
    <div style={{ width: "300px", margin: "0 auto", textAlign: "center" }}>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
        style={{ width: "100%", padding: "8px", fontSize: "16px" }}
      />
      <div style={{ marginTop: "10px", fontSize: "18px" }}>
        <span
          style={{
            color:
              strength === "Strong"
                ? "green"
                : strength === "Medium"
                ? "orange"
                : "red",
          }}
        >
          {strength}
        </span>
      </div>
    </div>
  );
}

export default PasswordStrengthChecker;
