import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition duration-200 flex flex-col">
      <div className="aspect-square bg-gray-100 relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          loading="lazy" // Native browser image optimization / lazyloading
          className="w-full h-full object-cover object-center transform hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-1">{product.category}</span>
        <h3 className="font-semibold text-lg text-gray-900 mb-2 line-clamp-1">{product.name}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 mb-4">{product.description}</p>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-gray-950">${product.price.toFixed(2)}</span>
          <Link 
            to={`/product/${product.id}`} 
            className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}