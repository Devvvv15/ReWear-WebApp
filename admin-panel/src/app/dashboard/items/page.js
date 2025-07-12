'use client';
import Image from 'next/image';

export default function ItemsModeration() {
  const items = [
    {
      id: 1,
      title: 'Kurta Set',
      status: 'Pending',
      image:
        'https://images.unsplash.com/photo-1602810313164-d717f9d19be6?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 2,
      title: 'Lehenga',
      status: 'Pending',
      image:
        'https://images.unsplash.com/photo-1603785915848-8f70e8b7c5b6?auto=format&fit=crop&w=400&q=80',
    },
    {
      id: 3,
      title: 'Denim Jacket',
      status: 'Pending',
      image:
        'https://images.unsplash.com/photo-1618354691210-66a1b76b2527?auto=format&fit=crop&w=400&q=80',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8 md:px-10 lg:px-20">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">🛍️ Pending Items</h2>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div key={item.id} className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
            <Image
              src={item.image}
              alt={item.title}
              width={400}
              height={300}
              className="object-cover w-full h-60"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">Status: {item.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
