'use client';

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function NewItem({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState('');
  const [category, setCategory] = useState('Produce');

  const increment = () => {
    setQuantity((prevQuantity) => Math.min(prevQuantity + 1, 20));
  };

  const decrement = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && category) {
      onAddItem({
        id: uuidv4(), 
        name,
        quantity,
        category,
      });
      setName('');
      setQuantity(1);
      setCategory('Produce'); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center space-y-4">
      <div className="text-xl font-medium">Quantity: {quantity}</div>
      <div className="flex space-x-8">
        <button
          onClick={decrement}
          disabled={quantity === 1}
          className="px-6 py-2 bg-gray-300 rounded disabled:bg-gray-500"
        >
          -
        </button>
        <button
          onClick={increment}
          disabled={quantity === 20}
          className="px-6 py-2 bg-blue-500 text-white rounded disabled:bg-blue-300"
        >
          +
        </button>
      </div>
      <input
        type="text"
        placeholder="Item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="px-6 py-2 border border-gray-300 rounded w-full text-black"
      />
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="px-6 py-2 border border-gray-300 rounded w-full text-black"
      >
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Bakery">Bakery</option>
        <option value="Meat">Meat</option>
        <option value="Frozen Food">Frozen Food</option>
        <option value="Dry Goods">Dry Goods</option>
        <option value="Beverage">Beverage</option>
        <option value="Snacks">Snacks</option>
        <option value="Household">Household</option>
        <option value="Others">Others</option>
      </select>
      <button
        type="submit"
        className="px-6 py-2 bg-green-500 text-white rounded mb-4" 
      >
        Add Item
      </button>
      {}
      <div className="h-8" /> {}
    </form>
  );
}
