'use client';

import { useState } from 'react';

export default function NewItem() {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-xl font-medium">Quantity: {quantity}</div>
      <div className="flex space-x-4">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="px-4 py-2 bg-gray-300 rounded disabled:bg-gray-500"
        >
          -
        </button>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-blue-300"
        >
          +
        </button>
      </div>
    </div>
  );
}