import { useAppDispatch, useAppSelector } from '@/services/redux';
import { counterSelector } from '@/services/redux/counter/counter.selector';
import React from 'react';
import { Button } from '../Button';
import { decrement, increment } from '@/services/redux/counter/counter.slice';

type CounterProps = {
  style?: React.CSSProperties;
};

export const Counter: React.FC<CounterProps> = ({ style }) => {
  const count = useAppSelector(counterSelector);
  const dispatch = useAppDispatch();

  return (
    <div style={style}>
      <h1>Counter: {count}</h1>
      <Button onClick={() => dispatch(increment())}>Increment</Button>{' '}
      <Button onClick={() => dispatch(decrement())}>Decrement</Button>{' '}
    </div>
  );
};
