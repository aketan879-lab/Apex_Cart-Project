import { Link } from 'react-router-dom';
import { ShoppingBag } from 'lucide-react';
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useCart();

  return (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-blue-600">
          SHOP.🚀
        </Link>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-sm font-medium hover:text-blue-600 transition">Catalog</Link>
          <button className="p-2 hover:bg-gray-100 rounded-full relative">
            <ShoppingBag size={20} />
            <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs w-4 h-4 rounded-full flex items-center justify-center">
  {cart.length}
</span>
          </button>
        </div>
      </div>
    </nav>
  );
}