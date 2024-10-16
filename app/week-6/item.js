import React from 'react';

const Item = ({ name, quantity, category }) => {
  return (
    <li className="p-4 bg-gray-100 rounded-md shadow-md my-2">
      <span className="block text-lg font-semibold text-gray-700">{name}</span>
      <span className="block text-sm text-gray-500">Buy {quantity} in {category}</span>
    </li>
  );
};

export default Item;
