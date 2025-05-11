import React, { useState } from "react";
import AddItemForm from "./components/AddItemForm";
import WardrobeList from "./components/WardrobeList";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div>
      <AddItemForm addItem={addItem} />
      <WardrobeList items={items} />
    </div>
  );
}

export default App;
