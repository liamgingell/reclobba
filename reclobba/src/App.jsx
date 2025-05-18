import React, { useState, useEffect } from 'react';
import AddItemForm from './components/AddItemForm';
import WardrobeList from './components/WardrobeList';

function App() {
  const [items, setItems] = useState([]);

  // ⬇️ Function to add item
  const addItem = async (item) => {
    try {
      const response = await fetch('http://localhost:3000/api/v1/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ item }),
      });

      const data = await response.json();
      setItems((prev) => [...prev, data]);
    } catch (err) {
      console.error('Failed to add item:', err);
    }
  };

  // Optional: fetch items on page load
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/items')
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error('Failed to load items:', err));
  }, []);

  return (
    <div className="...">
      <h1>ReClobba</h1>
      <AddItemForm addItem={addItem} />
      <WardrobeList items={items} />
    </div>
  );
}

export default App;
