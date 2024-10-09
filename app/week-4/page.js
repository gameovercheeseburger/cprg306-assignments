import NewItem from './new-item';

export default function Page() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <NewItem />
    </main>
  );
}