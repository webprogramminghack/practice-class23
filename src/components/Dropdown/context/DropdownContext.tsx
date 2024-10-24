import React, { createContext, useState } from 'react';

export type Options = {
  closeOnItemClick: boolean;
};

type DropdownContextType = {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  options: Options;
};

export const DropdownContext = createContext<DropdownContextType | null>(null);

type DropdownProviderProps = {
  children: React.ReactNode;
  options?: Options;
};

export const DropdownProvider: React.FC<DropdownProviderProps> = ({
  children,
  options = false,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const close = () => setIsOpen(false);

  return (
    <DropdownContext.Provider value={{ isOpen, toggle, close, options }}>
      {children}
    </DropdownContext.Provider>
  );
};
