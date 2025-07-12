'use client';

export default function ItemCard({ item }) {
  const handleAction = async (action) => {
    await fetch(`http://localhost:5000/api/items/${item.id}/${action}`, { method: 'PATCH' });
    window.location.reload();
  };

  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition">
      <img src={item.images?.[0]} alt={item.title} className="w-full h-40 object-cover rounded" />
      <h3 className="font-bold text-lg mt-2">{item.title}</h3>
      <p className="text-sm text-gray-600">{item.description}</p>
      <div className="flex gap-2 mt-4">
        <button onClick={() => handleAction('approve')} className="bg-green-500 text-white px-3 py-1 rounded">Approve</button>
        <button onClick={() => handleAction('reject')} className="bg-red-500 text-white px-3 py-1 rounded">Reject</button>
      </div>
    </div>
  );
}