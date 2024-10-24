import React from 'react';
// import { Cart } from './components/Cart';
// import { Counter } from './components/Counter';
// import { TodoList } from './components/TodoList';
import { Dropdown } from './components/Dropdown/Dropdown';
import { Button } from './components/Button';
import styles from './App.module.scss';

const App: React.FC = () => {
  return (
    <div>
      {/* <Cart /> */}
      {/* <Counter style={{ marginTop: '2rem' }} /> */}
      {/* <TodoList>
        <TodoList.Title>My Todo List</TodoList.Title>
        <TodoList.Items>
          <TodoList.Item>Item 1</TodoList.Item>
          <TodoList.Item>Item 2</TodoList.Item>
          <TodoList.Item>Item 3</TodoList.Item>
        </TodoList.Items>
      </TodoList> */}

      <Dropdown options={{ closeOnItemClick: true }}>
        <Dropdown.Toggle>
          <Button>Toggle Dropdown</Button>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <Dropdown.Item
                key={index}
                onClick={() => console.log(`Dropdown Item ${index} is clicked`)}
              >
                <div className={styles.dropdownItem}>Item {index + 1}</div>
              </Dropdown.Item>
            ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
};

export default App;
