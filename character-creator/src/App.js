import { useState } from "react";
import "./App.css";

export default function App() {
  const [name, setName] = useState("");
  const [charClass, setCharClass] = useState("Warrior");
  const [strength, setStrength] = useState(0);

  const increaseStrength = () => {
    if (strength < 20) {
      setStrength(strength + 1);
    }
  };

  const decreaseStrength = () => {
    if (strength > 0) {
      setStrength(strength - 1);
    }
  };

  return (
    <div className="page">
      <div className="box">
        <h2>Character Creator</h2>

        <label>Character Name</label>
        <input
          type="text"
          placeholder="Enter name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Class</label>
        <select
          value={charClass}
          onChange={(e) => setCharClass(e.target.value)}
        >
          <option>Warrior</option>
          <option>Mage</option>
          <option>Rogue</option>
        </select>

        <label>Strength</label>
        <div className="counter">
          <button onClick={decreaseStrength}>-</button>
          <span>{strength}</span>
          <button onClick={increaseStrength}>+</button>
        </div>

        <div className="card">
          <h3>Character Preview</h3>
          <p><b>Name:</b> {name === "" ? "Unknown" : name}</p>
          <p><b>Class:</b> {charClass}</p>
          <p><b>Strength:</b> {strength}</p>
        </div>
      </div>
    </div>
  );
}
