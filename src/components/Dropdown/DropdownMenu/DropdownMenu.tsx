import React from 'react';
import { useDropdownContext } from '../hooks/useDropdownContext';
import styles from './DropdownMenu.module.scss';
import { DropdownItem } from './DropdownItem';

interface DropdownMenuProps {
  children: React.ReactNode;
}

type SubComponents = {
  Item: typeof DropdownItem;
};

export const DropdownMenu: React.FC<DropdownMenuProps> & SubComponents = ({
  children,
}) => {
  const { isOpen } = useDropdownContext();

  return isOpen ? <ul className={styles.menu}>{children}</ul> : null;
};

DropdownMenu.Item = DropdownItem;
