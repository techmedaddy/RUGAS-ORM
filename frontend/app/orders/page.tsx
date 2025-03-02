"use client";

import { useEffect, useState } from "react";

// ✅ Define a Type for Orders
interface Order {
  id: string;
  status: string;
  product?: {
    name: string;
    price: number;
  };
}

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]); // ✅ Use the `Order` type
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchOrders() {
      try {
        const response = await fetch("/api/orders");
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data: Order[] = await response.json(); // ✅ Enforce TypeScript type
        
        if (Array.isArray(data)) {
          setOrders(data);
        } else {
          throw new Error("Invalid data format received");
        }
      } catch (error: any) {
        console.error("Error fetching orders:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }
    fetchOrders();
  }, []);

  if (loading) return <p className="text-center text-gray-500">Loading orders...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Orders</h1>

      {orders.length === 0 ? (
        <p className="text-center text-gray-500">No orders found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {orders.map((order) => (
            <div key={order.id} className="bg-gray-900 text-white p-4 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold">{order.product?.name || "Unknown Product"}</h2>
              <p className="text-sm">Status: {order.status}</p>
              <p className="text-lg font-bold">${order.product?.price || "N/A"}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
