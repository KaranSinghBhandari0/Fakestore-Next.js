"use client";

export default function ErrorFallback({ error, resetError }) {
  return (
    <div className="flex items-center justify-center mt-4">
      <div className="text-center p-8 rounded-lg max-w-md">
        <div className="text-4xl mb-4">⚠️</div>
        <h2 className="text-xl font-semibold text-red-700 mb-2">Oops! Something went wrong</h2>
        <p className="text-sm text-red-600 mb-4">
          {error?.message || "Failed to load data. Please try again."}
        </p>
        <button
          onClick={resetError}
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
