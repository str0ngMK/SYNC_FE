import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

type useDropdownType = () => [
  boolean,
  () => void,
  React.RefObject<HTMLTableSectionElement>,
];

const useDropdown: useDropdownType = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLTableSectionElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleDetectDropdownContent = (
      e: React.BaseSyntheticEvent | MouseEvent,
    ) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target))
        setIsOpen(false);
    };
    document.addEventListener('click', handleDetectDropdownContent);
    return () => {
      document.removeEventListener('click', handleDetectDropdownContent);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return [isOpen, () => setIsOpen((prevState) => !prevState), dropdownRef];
};

export default useDropdown;
