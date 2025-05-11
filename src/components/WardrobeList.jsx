import React from "react";

function WardrobeList({ items }) {
  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">Your Wardrobe</h2>
      {items.length === 0 ? (
        <p className="text-gray-500">No items added yet.</p>
      ) : (
        <ul className="space-y-2">
          {items.map((item, index) => (
            <li key={index} className="bg-white shadow p-3 rounded flex justify-between items-center">
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">{item.category} – {item.season}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default WardrobeList;

console.log("Rendering WardrobeList");
