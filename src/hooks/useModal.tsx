import { ElementType } from 'react';

import { modalStore } from '@libs/store';

export type setIsModalOpen = () => void;

type useModalType = () => [
  (component: ElementType) => void,
  () => void,
  boolean,
];

/**
 *
 * const [openModal, closeModal] = useModal();
 * openModal(컴포넌트); => 모달팝업 열림
 * closeModal(); => 모달팝업 닫힘
 */

const useModal: useModalType = () => {
  const { openModal, closeModal, isModalOpen } = modalStore();

  return [openModal, closeModal, isModalOpen];
};

export default useModal;
