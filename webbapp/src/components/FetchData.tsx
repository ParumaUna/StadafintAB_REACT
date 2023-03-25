import React, { useState, useEffect } from 'react';

const FetchData = () => {
  interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
  }
  const [products, setProducts] = useState<Product[]>([]);


  useEffect(() => {
    fetch('http://localhost:3000/products')
      .then(response => response.json())
      .then(data => setProducts(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map(product => (
          <li key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
