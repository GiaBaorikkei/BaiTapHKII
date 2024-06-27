import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { removeFromCart, updateQuantity } from '../store/reducers/reducer';

const Cart: React.FC = () => {
  const dispatch = useDispatch();
  const { products, total } = useSelector((state: RootState) => state.cart);

  const handleRemove = (id: number) => {
    if (window.confirm('Are you sure you want to remove this item from the cart?')) {
      dispatch(removeFromCart(id));
    }
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {products.map(product => (
        <div key={product.id} className="cart-item">
          <img src={product.image} alt={product.name} />
          <div>{product.name}</div>
          <div>Price: ${product.price}</div>
          <div>
            Quantity:{' '}
            <input
              type="number"
              min="1"
              max={product.quantity}
              value={product.quantity}
              onChange={e => handleUpdateQuantity(product.id, parseInt(e.target.value))}
            />
          </div>
          <button onClick={() => handleRemove(product.id)}>Remove</button>
        </div>
      ))}
      <div>Total: ${total}</div>
    </div>
  );
};

export default Cart;
