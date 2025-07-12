'use client';

export default function ManageUsers() {
  const users = [
    { id: 1, name: 'Rahul Sharma', email: 'rahul.sharma@example.com', role: 'User' },
    { id: 2, name: 'Priya Singh', email: 'priya.singh@example.com', role: 'User' },
    { id: 3, name: 'Amit Verma', email: 'amit.verma@example.com', role: 'User' },
    { id: 4, name: 'Neha Kapoor', email: 'neha.kapoor@example.com', role: 'User' },
    { id: 5, name: 'Rohan Mehta', email: 'rohan.mehta@example.com', role: 'User' },
    { id: 6, name: 'Sneha Patil', email: 'sneha.patil@example.com', role: 'User' },
    { id: 7, name: 'Ankit Jain', email: 'ankit.jain@example.com', role: 'User' },
    { id: 8, name: 'Isha Malhotra', email: 'isha.malhotra@example.com', role: 'User' },
    { id: 9, name: 'Vikram Desai', email: 'vikram.desai@example.com', role: 'User' },
    { id: 10, name: 'Pooja Nair', email: 'pooja.nair@example.com', role: 'User' },
    { id: 11, name: 'Karan Bhatia', email: 'karan.bhatia@example.com', role: 'User' },
    { id: 12, name: 'Deepika Reddy', email: 'deepika.reddy@example.com', role: 'User' },
  ];

  return (
    <div className="min-h-screen bg-white px-4 py-8 md:px-10 lg:px-20">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">👥 Manage Users</h1>

      <div className="overflow-x-auto rounded-lg shadow border border-gray-200">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100 border-b border-gray-200">
            <tr>
              <th className="text-left text-sm font-semibold text-gray-700 px-6 py-4">Name</th>
              <th className="text-left text-sm font-semibold text-gray-700 px-6 py-4">Email</th>
              <th className="text-left text-sm font-semibold text-gray-700 px-6 py-4">Role</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {users.map((user) => (
              <tr key={user.id} className="border-t hover:bg-gray-50 transition">
                <td className="px-6 py-4 text-gray-800">{user.name}</td>
                <td className="px-6 py-4 text-gray-800">{user.email}</td>
                <td className="px-6 py-4 text-gray-800">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
