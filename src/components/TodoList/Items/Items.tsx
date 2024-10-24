import React from 'react';
import { Item } from './Item';
import styles from './Items.module.scss';

type ItemsProps = {
  children: React.ReactNode;
};

type SubComponents = {
  Item: typeof Item;
};

export const Items: React.FC<ItemsProps> & SubComponents = ({ children }) => {
  return <ul className={styles.items}>{children}</ul>;
};

Items.Item = Item;

// interface MyFunctionalComponent<P> {
//   (props: P): React.ReactNode;
//   Item: typeof Item;
// }
