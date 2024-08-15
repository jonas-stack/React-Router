// src/ProductList.tsx
import React, { useEffect, useState } from 'react';
import {Product, Root} from "./models.ts";



const ProductList: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then((result: Root) => {
                setProducts(result.products); // Update the state with the fetched products
            })
            .catch(error => {
                console.error('Error fetching products:', error);
            });
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            <ol>
                {products.map(product => (
                    <li key={product.id}>{product.description}</li>
                ))}
            </ol>
        </div>
    );
};

export default ProductList;