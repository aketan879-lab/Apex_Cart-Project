import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingCart } from 'lucide-react';
import { API_URL } from '../App';
import { useCart } from "../context/CartContext";


export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    fetch(`${API_URL}/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, [id]);

  if (loading) return <div className="text-center py-20">Loading product...</div>;
  if (!product) return <div className="text-center py-20">Product not found.</div>;

  return (
    <div>
      <Link to="/" className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-black mb-8 transition">
        <ArrowLeft size={16} /> Back to catalog
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
        <div className="aspect-square rounded-xl overflow-hidden bg-gray-50">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>
        <div className="flex flex-col justify-center">
          <span className="text-xs font-bold uppercase tracking-widest text-blue-600 mb-2">{product.category}</span>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
          <p className="text-2xl font-bold text-gray-900 mb-6">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>
          <button
  onClick={() => addToCart(product)}
  className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
>
  <ShoppingCart size={20} />
  Add to Cart
</button>
        </div>
      </div>
    </div>
  );
}