import React from 'react';
import { TodoTitle } from './TodoTitle';
import { Items } from './Items';
import styles from './TodoList.module.scss';

type TodoListProps = {
  children: React.ReactNode;
};

type SubComponents = {
  Title: typeof TodoTitle;
  Items: typeof Items;
  Item: typeof Items.Item;
};

export const TodoList: React.FC<TodoListProps> & SubComponents = ({
  children,
}) => {
  return <div className={styles.todoList}>{children}</div>;
};

TodoList.Title = TodoTitle;
TodoList.Items = Items;
TodoList.Item = Items.Item;
