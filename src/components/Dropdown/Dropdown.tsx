import React from 'react';
import { DropdownProvider, Options } from './context/DropdownContext';
import { DropdownToggle } from './DropdownToggle';
import { DropdownMenu } from './DropdownMenu/DropdownMenu';
import styles from './Dropdown.module.scss';

type DropdownProps = {
  children: React.ReactNode;
  options?: Options;
};

type SubComponents = {
  Toggle: typeof DropdownToggle;
  Menu: typeof DropdownMenu;
  Item: typeof DropdownMenu.Item;
};

export const Dropdown: React.FC<DropdownProps> & SubComponents = ({
  children,
  options,
}) => {
  return (
    <DropdownProvider options={options}>
      <div className={styles.dropdown}>{children}</div>
    </DropdownProvider>
  );
};

Dropdown.Toggle = DropdownToggle;
Dropdown.Menu = DropdownMenu;
Dropdown.Item = DropdownMenu.Item;
