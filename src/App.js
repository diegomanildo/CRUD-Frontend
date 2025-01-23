import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({ name: "", lastName: "", mail: "", password: "" });

  const validateName = (value) => /^[A-Z][a-zA-Z]*$/.test(value); // Starts with uppercase
  const validateMail = (value) => /^[^@]+@[^@]+\.[^@]+$/.test(value); // Valid email format (@ and .)
  const validatePassword = (value) => value.length >= 6; // Minimum 6 characters

  const showData = () => {
    const newErrors = { name: "", lastName: "", mail: "", password: "" };
    let isValid = true;

    if (!validateName(name)) {
      newErrors.name = "Name must start with an uppercase letter and only contain letters.";
      isValid = false;
    }

    if (!validateName(lastName)) {
      newErrors.lastName = "Last name must start with an uppercase letter and only contain letters.";
      isValid = false;
    }

    if (!validateMail(mail)) {
      newErrors.mail = "Email must be valid (must contain one @ and one .).";
      isValid = false;
    }
    
    if (!validatePassword(password)) {
      newErrors.password = "Password must have at least 6 characters.";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      alert(`Name: ${name}\nLast Name: ${lastName}\nEmail: ${mail}\nPassword: ${password}`);
    }
  };

  return (
    <div className="App">
      <div className="Data">
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
    </div>
  );
}

export default App;
