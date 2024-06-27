import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import axios from 'axios';

export interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  description: string;
  image: string;
}

interface CartState {
  products: Product[];
  total: number;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: CartState = {
  products: [],
  total: 0,
  status: 'idle',
  error: null,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<Product>) {
      const existingProduct = state.products.find(product => product.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
      state.total = state.products.reduce((total, product) => total + product.price * product.quantity, 0);
    },
    removeFromCart(state, action: PayloadAction<number>) {
      const index = state.products.findIndex(product => product.id === action.payload);
      if (index !== -1) {
        const removedProduct = state.products[index];
        state.total -= removedProduct.price * removedProduct.quantity;
        state.products.splice(index, 1);
      }
    },
    updateQuantity(state, action: PayloadAction<{ id: number; quantity: number }>) {
      const { id, quantity } = action.payload;
      const product = state.products.find(product => product.id === id);
      if (product) {
        const diff = quantity - product.quantity;
        product.quantity = quantity;
        state.total += diff * product.price;
      }
    },
    setLoading(state) {
      state.status = 'loading';
    },
    setCartStatus(state, action: PayloadAction<'idle' | 'succeeded' | 'failed'>) {
      state.status = action.payload;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
      state.status = 'failed';
    },
    resetCart(state) {
      state.products = [];
      state.total = 0;
      state.status = 'idle';
      state.error = null;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  updateQuantity,
  setLoading,
  setCartStatus,
  setError,
  resetCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const fetchProducts = (): AppThunk => async dispatch => {
  dispatch(setLoading());
  try {
    const response = await axios.get('http://localhost:5000/products');
    dispatch(setCartStatus('succeeded'));
    dispatch(addToCart(response.data)); 
  } catch (error) {
    dispatch(setError(error.message));
  }
};
