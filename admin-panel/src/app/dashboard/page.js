// app/admin/page.js
'use client';

import { useRouter } from 'next/navigation';
import {
  LogOut,
  PlusCircle,
  CheckCircle,
  Ban,
  Users,
  Settings,
  RefreshCw,
} from 'lucide-react';

export default function DashboardHome() {
  const router = useRouter();

  const handleLogout = () => {
    alert('Logging out...');
    router.push('/login');
  };

  const quickActions = [
    {
      title: 'Review New Listings',
      description: 'Moderate and approve new item submissions.',
      icon: <PlusCircle className="text-blue-500" size={28} />,
      link: '/admin/review-listings',
    },
    {
      title: 'Approved Items',
      description: 'View and manage approved clothing items.',
      icon: <CheckCircle className="text-green-500" size={28} />,
      link: '/admin/manage-items',
    },
    {
      title: 'Flagged/Spam Items',
      description: 'Review flagged or inappropriate items.',
      icon: <Ban className="text-red-500" size={28} />,
      link: '/admin/flagged-items',
    },
    {
      title: 'Manage Users',
      description: 'View, ban, or promote users.',
      icon: <Users className="text-purple-500" size={28} />,
      link: '/admin/manage-users',
    },
    {
      title: 'System Settings',
      description: 'Adjust platform-wide configurations.',
      icon: <Settings className="text-gray-600" size={28} />,
      link: '/admin/settings',
    },
    {
      title: 'Refresh Item Cache',
      description: 'Reload recent item listings.',
      icon: <RefreshCw className="text-orange-500" size={28} />,
      link: '/admin/refresh-cache',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded shadow"
        >
          <LogOut size={18} /> Logout
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <StatCard title="New Listings" value="12" color="bg-blue-500" />
        <StatCard title="Approved Items" value="87" color="bg-green-500" />
        <StatCard title="Flagged Items" value="5" color="bg-red-500" />
        <StatCard title="Total Users" value="342" color="bg-purple-500" />
      </div>

      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {quickActions.map((action, index) => (
            <div
              key={index}
              onClick={() => router.push(action.link)}
              className="cursor-pointer bg-white rounded-xl shadow hover:shadow-md transition p-5 hover:bg-gray-50"
            >
              <div className="flex items-center gap-3 mb-2">
                {action.icon}
                <h3 className="text-md font-semibold text-gray-800">{action.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{action.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl shadow p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Recent Admin Activity</h2>
        <ul className="text-sm text-gray-700 space-y-2">
          <li>✅ Approved 3 new items submitted by users</li>
          <li>⚠️ Flagged item “Vintage Jacket” reviewed and removed</li>
          <li>🔄 Refreshed system cache</li>
          <li>👤 Banned user “spammer123” for repeated offenses</li>
        </ul>
      </div>
    </div>
  );
}

function StatCard({ title, value, color }) {
  return (
    <div className={`rounded-xl p-5 text-white shadow ${color}`}>
      <h3 className="text-sm font-medium">{title}</h3>
      <p className="text-2xl font-bold mt-1">{value}</p>
    </div>
  );
}

