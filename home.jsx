import { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { API_URL } from '../App';

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => console.error("Error fetching products:", err));
  }, []);

  if (loading) return <div className="text-center py-20 font-medium">Loading catalog...</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Featured Collection</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}