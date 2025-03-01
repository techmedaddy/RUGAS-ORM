export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-8">
      <h1 className="text-5xl font-extrabold text-primary">
        🚀 Welcome to My App
      </h1>
      <p className="text-lg text-secondary mt-3">
        Manage your products and orders efficiently with a sleek UI.
      </p>

      <div className="flex gap-4 mt-6">
        <a href="/dashboard" className="button">Go to Dashboard</a>
        <a href="/products" className="button bg-accent hover:bg-yellow-500">View Products</a>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="card">
          <h3 className="text-lg font-semibold">📦 Manage Products</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Add, update, and track inventory seamlessly.
          </p>
        </div>
        <div className="card">
          <h3 className="text-lg font-semibold">🛒 Track Orders</h3>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            View and fulfill customer orders quickly.
          </p>
        </div>
      </div>
    </div>
  );
}
