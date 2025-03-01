"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [price, setPrice] = useState("");
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  const handleAddProduct = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const response = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, category, description, imageUrl, price: Number(price) }),
    });

    if (response.ok) {
      alert("Product added successfully!");
      setName("");
      setCategory("");
      setDescription("");
      setImageUrl("");
      setPrice("");
      router.refresh(); // Refresh the page to see the new product
    } else {
      alert("Failed to add product.");
    }
  };

  const handleBuyNow = async (productId: string) => {
    try {
      const response = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ productId }),
      });

      if (response.ok) {
        alert("Order placed successfully!");
        router.push("/orders");
      } else {
        alert("Failed to place order.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Products</h1>

      {/* Add Product Form */}
      <form onSubmit={handleAddProduct} className="mb-6 space-y-4">
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="border p-2 w-full" required />
        <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 w-full" required />
        <input type="text" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} className="border p-2 w-full" required />
        <input type="text" placeholder="Image URL" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="border p-2 w-full" required />
        <input type="number" placeholder="Price" value={price} onChange={(e) => setPrice(e.target.value)} className="border p-2 w-full" required />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Add Product</button>
      </form>

      {/* Product List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.length === 0 ? (
          <p className="text-center text-gray-500">No products available.</p>
        ) : (
          products.map((product: any) => (
            <div key={product.id} className="bg-gray-900 text-white p-4 rounded-lg shadow-md">
              <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded-md" />
              <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
              <p className="text-sm text-gray-400">{product.category}</p>
              <p className="text-sm">{product.description}</p>
              <p className="text-lg font-bold mt-2">${product.price}</p>
              <div className="flex gap-3 mt-3">
                <button className="bg-green-500 px-4 py-2 rounded text-white">Add to Cart</button>
                <button
                  className="bg-blue-500 px-4 py-2 rounded text-white"
                  onClick={() => handleBuyNow(product.id)} // ✅ Fixed Issue
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
