import type { Metadata } from "next";
import Link from "next/link"; 
import "./globals.css";

export const metadata: Metadata = {
  title: "Dashboard App",
  description: "Manage products and orders efficiently",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {/* Navbar */}
        <nav className="bg-primary text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">MyApp</h1>
            <div className="flex gap-6">
              <Link href="/" className="hover:underline">Home</Link>
              <Link href="/dashboard" className="hover:underline">Dashboard</Link>
              <Link href="/products" className="hover:underline">Products</Link>
              <Link href="/orders" className="hover:underline">Orders</Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container mx-auto p-8 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
