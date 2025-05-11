import React, { useState } from 'react';
import AddItemForm from "./components/AddItemForm";
import WardrobeList from "./components/WardrobeList";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prev) => [...prev, item]);
  };

  const deleteItem = (indexToRemove) => {
    setItems((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={{ padding: "2rem", backgroundColor: "#fff", color: "#000" }}>
      <h1>👕 ReClobba is running</h1>
    </div>
  );
}

export default App;
