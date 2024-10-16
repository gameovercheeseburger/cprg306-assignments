"use client";

import React, { useState } from 'react';
import Item from './item';

const ItemList = () => {
  const items = [
    {
      "id": "1h2GJKH12gkHG31h1H",
      "name": "milk, 4 L 🥛",
      "quantity": 1,
      "category": "dairy"
    },
    {
      "id": "2KJH3k2j3H1k2J3K1H",
      "name": "bread 🍞",
      "quantity": 2,
      "category": "bakery"
    },
    {
      "id": "3h2KJH3k2j3H1k2J3",
      "name": "eggs, dozen 🥚",
      "quantity": 2,
      "category": "dairy"
    },
    {
      "id": "4k2J3K1H2GJKH12gk",
      "name": "bananas 🍌",
      "quantity": 6,
      "category": "produce"
    },
    {
      "id": "5H1h1H2KJH3k2j3H",
      "name": "broccoli 🥦",
      "quantity": 3,
      "category": "produce"
    },
    {
      "id": "6H1k2J3K1H2GJKH1",
      "name": "chicken breasts, 1 kg 🍗",
      "quantity": 1,
      "category": "meat"
    },
    {
      "id": "7gkHG31h1H2KJH3k",
      "name": "pasta sauce 🍝",
      "quantity": 3,
      "category": "canned goods"
    },
    {
      "id": "8j3H1k2J3K1H2GJK",
      "name": "spaghetti, 454 g 🍝",
      "quantity": 2,
      "category": "dry goods"
    },
    {
      "id": "9H12gkHG31h1H2KJ",
      "name": "toilet paper, 12 pack 🧻",
      "quantity": 1,
      "category": "household"
    },
    {
      "id": "10H3k2j3H1k2J3K1",
      "name": "paper towels, 6 pack",
      "quantity": 1,
      "category": "household"
    },
    {
      "id": "11k2J3K1H2GJKH12",
      "name": "dish soap 🍽️",
      "quantity": 1,
      "category": "household"
    },
    {
      "id": "12GJKH12gkHG31h1",
      "name": "hand soap 🧼",
      "quantity": 4,
      "category": "household"
    }
  ];

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
      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => {
            setIsGrouped(false);
            setSortBy('name');
          }}
          className={`px-4 py-2 rounded ${sortBy === 'name' && !isGrouped ? 'bg-blue-500 text-white' : 'bg-orange-500 text-white'}`}
        >
          Sort by Name
        </button>
        <button
          onClick={() => {
            setIsGrouped(false);
            setSortBy('category');
          }}
          className={`px-4 py-2 rounded ${sortBy === 'category' && !isGrouped ? 'bg-blue-500 text-white' : 'bg-orange-500 text-white'}`}
        >
          Sort by Category
        </button>
        <button
          onClick={() => setIsGrouped(true)}
          className={`px-4 py-2 rounded ${isGrouped ? 'bg-blue-500 text-white' : 'bg-orange-500 text-white'}`}
        >
          Group by Category
        </button>
      </div>

      {!isGrouped ? (
        <ul className="space-y-4">
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
