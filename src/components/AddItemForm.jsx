import React, { useState } from "react";

function AddItemForm({ addItem }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("top");
  const [season, setSeason] = useState("all-season");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    addItem({ name, category, season });
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 grid gap-4 max-w-md mx-auto">
      <input
        type="text"
        placeholder="Item name (e.g. Blue Shirt)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded">
        <option value="top">Top</option>
        <option value="bottom">Bottom</option>
        <option value="outerwear">Outerwear</option>
        <option value="footwear">Footwear</option>
        <option value="accessory">Accessory</option>
      </select>
      <select value={season} onChange={(e) => setSeason(e.target.value)} className="border p-2 rounded">
        <option value="summer">Summer</option>
        <option value="winter">Winter</option>
        <option value="spring">Spring</option>
        <option value="autumn">Autumn</option>
        <option value="all-season">All Season</option>
      </select>
      <button type="submit" className="bg-blue-600 text-white py-2 rounded">Add Item</button>
    </form>
  );
}

export default AddItemForm;

console.log("Rendering AddItemForm");
