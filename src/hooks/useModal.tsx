import { useEffect, useRef, useState } from 'react';
import Modal, { ModalRef } from '../components/common/Modal';

type useModalType = () => [
  boolean,
  () => void,
  React.RefObject<HTMLTableSectionElement>,
  ({ children, isOpen, modalRef }: ModalRef) => JSX.Element
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

  return [isOpen, () => setIsOpen(true), modalRef, Modal];
};

export default useModal;
