'use client';

import React, { useState } from 'react';
import ItemList from './item-list';
import NewItem from './new-item';


const Page = () => {
  //const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <main className="p-8 bg-black text-white w-1/4 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <NewItem onAddItem={handleAddItem} />
      <ItemList items={items} />
    </main>
  );
};

export default Page;
