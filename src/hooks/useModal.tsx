import React, { useEffect, useRef, useState } from 'react';
import Modal, { ModalRef } from '../components/common/Modal';

type useModalType = () => [
  boolean,
  () => void,
  React.RefObject<HTMLTableSectionElement>,
  ({
    // eslint-disable-next-line no-unused-vars
    children,
    // eslint-disable-next-line no-unused-vars
    isOpen,
    // eslint-disable-next-line no-unused-vars
    modalRef,
  }: ModalRef) => // eslint-disable-next-line no-undef
  JSX.Element,
];

const useModal: useModalType = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLTableSectionElement>(null);

  useEffect(() => {
    const handleDetectModalContent = (
      e: React.BaseSyntheticEvent | MouseEvent,
    ) => {
      if (modalRef.current && !modalRef.current.contains(e.target))
        setIsOpen(false);
    };
    document.addEventListener('mousedown', handleDetectModalContent);
    return () => {
      document.removeEventListener('mousedown', handleDetectModalContent);
    };
  }, []);

  return [isOpen, () => setIsOpen(true), modalRef, Modal];
};

export default useModal;
