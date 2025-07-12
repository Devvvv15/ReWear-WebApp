import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-2xl font-bold">ReWear</h1>
      <div className="space-x-6 text-lg">
        <Link href="/login" className="hover:text-blue-300 transition">Login</Link>
        <Link href="/register" className="hover:text-blue-300 transition">Register</Link>
        <Link href="/dashboard" className="hover:text-blue-300 transition">Dashboard</Link>
      </div>
    </nav>
  );
}
