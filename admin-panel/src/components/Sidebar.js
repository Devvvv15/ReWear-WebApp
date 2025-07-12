import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 text-white p-4 space-y-4">
      <h2 className="text-xl font-bold mb-4">ReWear Admin</h2>
      <nav className="flex flex-col space-y-2">
        <Link href="/dashboard" className="hover:text-gray-300">Dashboard</Link>
        <Link href="/dashboard/items" className="hover:text-gray-300">Manage Items</Link>
        <Link href="/dashboard/users" className="hover:text-gray-300">Users</Link>
      </nav>
    </aside>
  );
}