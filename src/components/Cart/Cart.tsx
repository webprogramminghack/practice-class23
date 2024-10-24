import React, { ChangeEvent } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid'; // Import uuid v4
import {
  selectTotalUniqueItems,
  selectCartItems,
  selectTotalItemQuantity,
  selectCartItemNamesMemoized,
  selectCartItemNames,
  selectFilteredCartItems, // Selector to get all items in the cart
} from '@/services/redux/cart/cart.selectors';
import {
  addItem,
  updateItemQuantity,
  removeItem,
  setFilterThreshold,
} from '@/services/redux/cart/cart.slice';
import { Button } from '../Button';
import MinusIcon from '@/assets/svg/icon-minus.svg';
import PlusIcon from '@/assets/svg/icon-plus.svg';
import TrashIcon from '@/assets/svg/icon-trash.svg';
import styles from './Cart.module.scss';

export const Cart: React.FC = () => {
  const dispatch = useDispatch();

  // Get the total quantities and unique items from the selectors
  const totalItemQuantity = useSelector(selectTotalItemQuantity);
  const cartItemNames = useSelector(selectCartItemNamesMemoized);
  const totalUniqueItems = useSelector(selectTotalUniqueItems);
  const cartItems = useSelector(selectFilteredCartItems); // Get the list of items in the cart

  console.log('cart is rendering');

  // Function to handle adding an item
  const handleAddItem = () => {
    const newItem = {
      id: uuid(),
      name: 'Item ' + Math.floor(Math.random() * 100),
      qty: 1,
    };
    dispatch(addItem(newItem));
  };

  const handleUpdateItemQuantity = (id: string, qty: number) => {
    dispatch(updateItemQuantity({ id, qty }));
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeItem(id));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilterThreshold(parseInt(e.target.value, 10)));
  };

  return (
    <div>
      <h2>Cart Summary</h2>
      <p>Total Item Quantity: {totalItemQuantity}</p>
      <p>Total Unique Items: {totalUniqueItems}</p>
      {cartItemNames.join(', ')}{' '}
      <div>
        <h3>Actions</h3>
        <Button onClick={handleAddItem}>Add Random Item</Button>
      </div>
      <div>
        <h3>Filter</h3>
        <div>
          <label htmlFor='threshold'></label>
          <input
            type='number'
            id='threshold'
            placeholder='Enter quantity'
            onChange={handleInputChange}
          />
        </div>
      </div>
      <div>
        <h3>Cart Items</h3>
        {cartItems.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <ul className={styles.items}>
            {cartItems.map((item) => (
              <li key={item.id} className={styles.item}>
                <p>
                  {item.name} - Quantity: {item.qty}
                </p>
                <div className={styles.actions}>
                  <Button
                    onClick={() =>
                      handleUpdateItemQuantity(item.id, item.qty + 1)
                    }
                  >
                    <PlusIcon>Increase Quantity</PlusIcon>
                  </Button>
                  <Button
                    onClick={() =>
                      handleUpdateItemQuantity(item.id, item.qty - 1)
                    }
                  >
                    <MinusIcon>Decrease Quantity</MinusIcon>
                  </Button>
                  <Button onClick={() => handleRemoveItem(item.id)}>
                    <TrashIcon>Remove Item</TrashIcon>
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

// mockup store
let store = {
  cart: {
    items: [
      { id: '1', name: 'Item 1', qty: 2 },
      { id: '2', name: 'Item 2', qty: 1 },
    ],
  },
  counter: {
    value: 0,
  },
};

// so if want to add the items, what redux does is using spread operator to copy the items and add the new item
// so it's not mutating the state directly

const newItem = { id: '3', name: 'Item 3', qty: 2 };

store = {
  ...store,
  cart: {
    ...store.cart,
    items: [...store.cart.items, newItem],
  },
  ...store.counter,
};

store = {
  ...store,
  cart: {
    ...store.cart,
    items: [...store.cart.items, newItem],
  },
  counter: {
    ...store.counter,
    value: store.counter.value + 1,
  },
};
