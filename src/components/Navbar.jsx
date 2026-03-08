import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link 
            href="/" 
            className="text-xl font-semibold tracking-wide hover:text-yellow-400 transition"
          >
            MyStore
          </Link>

          {/* Menu */}
          <div className="flex space-x-8">
            <Link
              href="/products"
              className="hover:text-yellow-400 transition duration-200"
            >
              Products
            </Link>

            <Link
              href="/users"
              className="hover:text-yellow-400 transition duration-200"
            >
              Users
            </Link>

            <Link
              href="/cart"
              className="hover:text-yellow-400 transition duration-200"
            >
              Cart
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;