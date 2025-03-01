"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
    recentOrders: [],
  });

  useEffect(() => {
    async function fetchStats() {
      const response = await fetch("/api/dashboard");
      const data = await response.json();
      setStats(data);
    }
    fetchStats();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">📊 Dashboard Insights</h1>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">🛍️ Total Products</h2>
          <p className="text-2xl font-bold">{stats.totalProducts}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">📦 Total Orders</h2>
          <p className="text-2xl font-bold">{stats.totalOrders}</p>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold">💰 Total Revenue</h2>
          <p className="text-2xl font-bold">${stats.totalRevenue.toFixed(2)}</p>
        </div>
      </div>

      {/* Recent Orders */}
      <h2 className="text-2xl font-semibold mt-8">🛒 Recent Orders</h2>
      <div className="mt-4">
        {stats.recentOrders.length > 0 ? (
          <ul className="space-y-2">
            {stats.recentOrders.map((order) => (
              <li key={order.id} className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg shadow-md">
                <p><strong>Product:</strong> {order.product.name}</p>
                <p><strong>Price:</strong> ${order.product.price}</p>
                <p><strong>Status:</strong> {order.status}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No recent orders.</p>
        )}
      </div>
    </div>
  );
}
