"use client";

// Client Page
export default function page() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">
        FakeStore <span className="text-orange-500">Users</span>
      </h1>

      <p className="text-center text-sm text-gray-600">
        This page should load faster when navigating because it is a client page
      </p>
    </div>
  );
}
