import React from 'react';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';

const App: React.FC = () => {
  return (
    <div className="App">
      <ProductList />
      <Cart />
    </div>
  );
};

export default App;
