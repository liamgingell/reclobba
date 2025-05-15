import React, { useState } from 'react';
import AddItemForm from './components/AddItemForm';
import WardrobeList from './components/WardrobeList';
import './App.css';

function App() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems((prev) => [...prev, item]);
  };

  const deleteItem = (indexToRemove) => {
    setItems((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 flex flex-col items-center justify-start p-8">
      <div className="w-full max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-blue-600 text-center">Welcome to ReClobba</h1>
        <p className="mt-2 mb-6 text-gray-700 dark:text-gray-300 text-center">
          Your AI-powered sustainable wardrobe assistant
        </p>

        <AddItemForm addItem={addItem} />
        <WardrobeList items={items} deleteItem={deleteItem} />
      </div>
    </div>
  );
}

export default App;
