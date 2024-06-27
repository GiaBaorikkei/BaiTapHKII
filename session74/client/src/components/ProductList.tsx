import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { addToCart, fetchProducts} from '../store/reducers/reducer';

const ProductList: React.FC = () => {
  const dispatch = useDispatch();
  const { products, status, error } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;

  return (
    <div className="product-list">
      <h2>Product List</h2>
      {products.map(product => (
        <div key={product.id} className="product-item">
          <img src={product.image} alt={product.name} />
          <div>{product.name}</div>
          <div>Price: ${product.price}</div>
          <div>Quantity: {product.quantity}</div>
          <button disabled={product.quantity === 0} onClick={() => dispatch(addToCart(product))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
