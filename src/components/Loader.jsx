export default function Loader() {
  return (
    <div className="flex items-center justify-center py-10">
      <div className="text-center">
        {/* Spinner */}
        <div className="mb-4">
          <div className="w-12 h-12 mx-auto border-4 border-orange-200 border-t-orange-500 rounded-full animate-spin"></div>
        </div>
        <h2 className="text-xl font-semibold text-gray-700">Loading...</h2>
        <p className="text-sm text-gray-500 mt-2">Please wait while we fetch the data</p>
      </div>
    </div>
  );
}
