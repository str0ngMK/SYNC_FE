import { useEffect, useRef, useState } from 'react';

type useModalType = () => [
  boolean,
  () => void,
  () => void,
  React.RefObject<HTMLTableSectionElement>
];

const useModal: useModalType = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLTableSectionElement>(null);

  useEffect(() => {
    document.addEventListener('mousedown', handleDetectModalContent);
    return () => {
      document.removeEventListener('mousedown', handleDetectModalContent);
    };
  }, []);

  const handleDetectModalContent = (
    e: React.BaseSyntheticEvent | MouseEvent
  ) => {
    if (modalRef.current && !modalRef.current.contains(e.target))
      setIsOpen(false);
  };

  return [isOpen, () => setIsOpen(true), () => setIsOpen(false), modalRef];
};

export default useModal;
