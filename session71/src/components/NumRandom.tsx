import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generateNumbers } from '../store/reducers/array';

interface NumbersState {
  numbers: number[];
}

export default function NumRandom() {
  const dispatch = useDispatch();
  const numbers = useSelector((state: { numbers: NumbersState }) => state.numbers.numbers); 

  const handleButtonClick = () => {
    dispatch(generateNumbers());
  };

  return (
    <div>
      <div>Bài 2</div>
     
      <button onClick={handleButtonClick}>Random Number</button>
      <p>List Number: [{numbers.join(', ')}]</p>
    </div>
  );
}
