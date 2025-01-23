import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gmail, setGmail] = useState("");
  const [password, setPassword] = useState("");

  const showData = () => {
    alert(name + "\n" + lastName + "\n" + gmail + "\n" + password)
  }

  return (
    <div className="App">
      <div className="Data">
        <label>Name: <input onChange={e => setName(e.target.value)} type="text"></input></label>
        <label>Last name: <input onChange={e => setLastName(e.target.value)} type="text"></input></label>
        <label>Gmail: <input onChange={e => setGmail(e.target.value)} type="email"></input></label>
        <label>Password: <input onChange={e => setPassword(e.target.value)} type="password"></input></label>
        <button onClick={showData}>Register</button>
      </div>
    </div>
  );
}

export default App;
