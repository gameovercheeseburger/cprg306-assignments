import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="p-8 bg-black text-white w-1/4 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;