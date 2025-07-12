'use client';

export default function ManageItems() {
  const items = [
    { id: 1, title: 'Blue T-Shirt', status: 'Approved' },
    { id: 2, title: 'Vintage Jacket', status: 'Pending' },
    { id: 3, title: 'Summer Dress', status: 'Flagged' },
    { id: 4, title: 'Kurta Set', status: 'Approved' },
    { id: 5, title: 'Lehenga', status: 'Pending' },
    { id: 6, title: 'Denim Jeans', status: 'Approved' },
    { id: 7, title: 'Sweater', status: 'Flagged' },
    { id: 8, title: 'Crop Top', status: 'Pending' },
    { id: 9, title: 'Blazer', status: 'Approved' },
    { id: 10, title: 'Dupatta', status: 'Flagged' },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-8 md:px-10 lg:px-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">🛍️ Manage Items</h1>

      <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="text-left text-sm font-semibold text-gray-700 px-6 py-4">Title</th>
              <th className="text-left text-sm font-semibold text-gray-700 px-6 py-4">Status</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {items.map((item) => (
              <tr key={item.id} className="border-t hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-gray-800">{item.title}</td>
                <td className="px-6 py-4 text-gray-800">{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
