import React, { useEffect, useRef, useState } from 'react';

import Modal, { ModalRef } from '@components/common/Modal';

export type setIsModalOpen = () => void;

type useModalType = () => [
  boolean,
  setIsModalOpen,
  React.RefObject<HTMLTableSectionElement>,
  ({

    children,
    isOpen,
    modalRef,
  }: ModalRef) => // eslint-disable-next-line no-undef
  JSX.Element,
  setIsModalOpen?,
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

  return [isOpen, () => setIsOpen(true), modalRef, Modal, () => setIsOpen(false)];
};

export default useModal;
