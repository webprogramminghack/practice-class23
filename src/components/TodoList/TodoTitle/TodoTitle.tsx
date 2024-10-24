import React from 'react';
import styles from './TodoTitle.module.scss';

type TodoTitleProps = {
  children: React.ReactNode;
};

export const TodoTitle: React.FC<TodoTitleProps> = ({ children }) => {
  return <h3 className={styles.title}>{children}</h3>;
};
