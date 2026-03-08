"use client";

// Client Page
export default function HomePage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-5xl font-bold mb-8 text-center">
        Welcome to <span className="text-orange-500">FakeStore!</span>
      </h1>
      <p className="text-center text-3xl mb-4 font-medium">
        Build using <span className="font-bold">Next.js</span>
      </p>

      <p className="text-center text-sm text-gray-600">
        Used by some of the world&apos;s largest
        companies, Next.js enables you to create high-quality web applications
        with the power of React components.
      </p>
    </div>
  );
}
