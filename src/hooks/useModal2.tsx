import React, { ElementType, useEffect } from 'react';

import { modalStore } from '@libs/store';

export type setIsModalOpen = () => void;

type useModalType = () => [(component: ElementType) => void, () => void];

/**
 *
 * const [openModal, closeModal] = useModal();
 * openModal(컴포넌트); => 모달팝업 열림
 * closeModal(); => 모달팝업 닫힘
 */

const useModal: useModalType = () => {
  const { openModal, closeModal } = modalStore();

  useEffect(() => {
    const handleDetectModalContent = (
      e: React.BaseSyntheticEvent | MouseEvent,
    ) => {
      if (!e.target.closest('.modal-content')) closeModal();
    };
    document.addEventListener('mousedown', handleDetectModalContent);
    return () => {
      document.removeEventListener('mousedown', handleDetectModalContent);
    };
  }, []);

  return [openModal, closeModal];
};

export default useModal;
