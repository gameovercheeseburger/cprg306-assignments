'use client';

import React, { useState } from 'react';
import Item from './item';

const ItemList = ({ items }) => {
  const [sortBy, setSortBy] = useState('name');
  const [isGrouped, setIsGrouped] = useState(false);

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === 'name') {
      return a.name.localeCompare(b.name);
    } else if (sortBy === 'category') {
      return a.category.localeCompare(b.category);
    }
    return 0;
  });

  const groupedItems = sortedItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div>
      <div className="flex space-x-8 mb-8">
        <button
          onClick={() => {
            setIsGrouped(false);
            setSortBy('name');
          }}
          className={`px-8 py-2 rounded ${sortBy === 'name' && !isGrouped ? 'bg-blue-500 text-white' : 'bg-orange-500 text-white'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => {
            setIsGrouped(false);
            setSortBy('category');
          }}
          className={`px-8 py-2 rounded ${sortBy === 'category' && !isGrouped ? 'bg-blue-500 text-white' : 'bg-orange-500 text-white'}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setIsGrouped(true)}
          className={`px-8 py-2 rounded ${isGrouped ? 'bg-blue-500 text-white' : 'bg-orange-500 text-white'}`}
        >
          Group by Category
        </button>
      </div>

      {!isGrouped ? (
        <ul className="space-y-8">
          {sortedItems.map(item => (
            <Item
              key={item.id}
              name={item.name}
              quantity={item.quantity}
              category={item.category}
            />
          ))}
        </ul>
      ) : (
        Object.keys(groupedItems).map(category => (
          <div key={category}>
            <h2 className="text-lg font-bold capitalize my-4">{category}</h2>
            <ul className="space-y-2">
              {groupedItems[category].map(item => (
                <Item
                  key={item.id}
                  name={item.name}
                  quantity={item.quantity}
                  category={item.category}
                />
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default ItemList;
