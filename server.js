import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock Database
const products = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 199.99,
    description: "High-fidelity audio with active noise cancellation and 40-hour battery life.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    category: "Electronics"
  },
  {
    id: 2,
    name: "Minimalist Leather Watch",
    price: 149.00,
    description: "Genuine leather band with a scratch-resistant sapphire crystal face.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80",
    category: "Accessories"
  },
  {
    id: 3,
    name: "Ergonomic Mechanical Keyboard",
    price: 89.99,
    description: "Hot-swappable switches with customizable RGB backlighting for peak productivity.",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80",
    category: "Electronics"
  }
];

// Routes
app.get('/api/products', (req, res) => {
  res.json(products);
});

app.get('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: "Product not found" });
  res.json(product);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});