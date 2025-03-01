"use client";

import { useEffect, useState } from "react";

export default function Orders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    async function fetchOrders() {
      const response = await fetch("/api/orders");
      const data = await response.json();
      setOrders(data);
    }
    fetchOrders();
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Orders</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {orders.map((order) => (
          <div key={order.id} className="bg-gray-900 text-white p-4 rounded-lg shadow-md">
            <h2 className="text-lg font-semibold">{order.product.name}</h2>
            <p className="text-sm text-gray-400">{order.product.category}</p>
            <p className="text-sm">{order.product.description}</p>
            <p className="text-lg font-bold mt-2">${order.product.price}</p>
            <p className="text-sm text-green-400 mt-2">Status: {order.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
