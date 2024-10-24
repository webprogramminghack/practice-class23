import React from 'react';
import styles from './DropdownToggle.module.scss';
import { useDropdownContext } from '../hooks/useDropdownContext';

interface DropdownToggleProps {
  children: React.ReactNode;
}

export const DropdownToggle: React.FC<DropdownToggleProps> = ({ children }) => {
  const { toggle } = useDropdownContext();

  return (
    <div onClick={toggle} className={styles.toggle}>
      {children}
    </div>
  );
};
