import React, { useState } from 'react';
import AddItemForm from './components/AddItemForm';
import WardrobeList from './components/WardrobeList';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prev) => [...prev, item]);
  };

  const deleteItem = (indexToRemove) => {
    setItems((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>👕 ReClobba</h1>
      <AddItemForm addItem={addItem} />
      <WardrobeList items={items} deleteItem={deleteItem} />
    </div>
  );
}

export default App;
