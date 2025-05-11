import React from 'react';

function WardrobeList({ items, deleteItem }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} style={{ marginBottom: '0.5rem' }}>
          <strong>{item.name}</strong> — {item.category}, {item.season}
          <button onClick={() => deleteItem(index)} style={{ marginLeft: '1rem' }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default WardrobeList;
