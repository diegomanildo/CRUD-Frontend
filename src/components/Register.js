import React, { useState } from 'react';
import './Register.css'

function Register() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({ name: "", lastName: "", mail: "", password: "" });

  const validateName = (value) => /^[A-Z][a-zA-Z]*$/.test(value);
  const validateMail = (value) => /^[^@]+@[^@]+\.[^@]+$/.test(value);
  const validatePassword = (value) => value.length >= 6;

  const showData = () => {
    const newErrors = { name: "", lastName: "", mail: "", password: "" };

    if (name === "") {
      newErrors.name = "Empty field. Please fill it!";
    } else if (!validateName(name)) {
      newErrors.name = "Name must start with an uppercase letter and only contain letters.";
    }

    if (lastName === "") {
      newErrors.lastName = "Empty field. Please fill it!";
    } else if (!validateName(lastName)) {
      newErrors.lastName = "Last name must start with an uppercase letter and only contain letters.";
    }

    if (mail === "") {
      newErrors.mail = "Empty field. Please fill it!";
    } else if (!validateMail(mail)) {
      newErrors.mail = "Email must be valid (must contain one @ and one .).";
    }

    if (password === "") {
      newErrors.password = "Empty field. Please fill it!";
    } else if (!validatePassword(password)) {
      newErrors.password = "Password must have at least 6 characters.";
    }

    const isValid = Object.values(newErrors).every((error) => error === "");

    setErrors(newErrors);

    if (isValid) {
      alert(`Name: ${name}\nLast Name: ${lastName}\nEmail: ${mail}\nPassword: ${password}`);
    }
  };

  return (
    <div className="Register">
      <h1>Register</h1>
      <label>
        Name:
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
          style={{ borderColor: errors.name ? "red" : "" }}
        />
        {errors.name && <p className="error">{errors.name}</p>}
      </label>
      <label>
        Last name:
        <input
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          value={lastName}
          style={{ borderColor: errors.lastName ? "red" : "" }}
        />
        {errors.lastName && <p className="error">{errors.lastName}</p>}
      </label>
      <label>
        Email:
        <input
          onChange={(e) => setMail(e.target.value)}
          type="email"
          value={mail}
          style={{ borderColor: errors.mail ? "red" : "" }}
        />
        {errors.mail && <p className="error">{errors.mail}</p>}
      </label>
      <label>
        Password:
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
          style={{ borderColor: errors.password ? "red" : "" }}
        />
        {errors.password && <p className="error">{errors.password}</p>}
      </label>
      <button onClick={showData}>Register</button>
    </div>
  );
}

export default Register;
