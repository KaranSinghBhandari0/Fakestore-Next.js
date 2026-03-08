import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import Loader from "@/components/Loader";
import { getAllProducts } from "@/controllers/productsController";

// Tell Vercel to render on-demand instead of at build time
export const dynamic = 'force-dynamic';

// Server Component - Fetches Data
async function ProductsList() {
  const products = await getAllProducts();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products?.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
}

// Page Component with Suspense
export default function ProductsPage() {
  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-8 text-center">
        FakeStore <span className="text-orange-500">Products</span>
      </h1>
      <Suspense fallback={<Loader />}>
        <ProductsList />
      </Suspense>
    </div>
  );
}
