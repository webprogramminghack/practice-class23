import React from 'react';
import { useDropdownContext } from '../../hooks/useDropdownContext';
import styles from './DropdownItem.module.scss';

interface DropdownItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export const DropdownItem: React.FC<DropdownItemProps> = ({
  children,
  onClick,
}) => {
  const {
    close,
    options: { closeOnItemClick },
  } = useDropdownContext();

  const handleClick = () => {
    onClick?.();

    if (closeOnItemClick) {
      close();
    }
  };

  return (
    <li className={styles.item} onClick={handleClick}>
      {children}
    </li>
  );
};
