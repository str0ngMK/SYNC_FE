import { ElementType } from 'react';

import { create } from 'zustand';

interface ModalState {
  isModalOpen: boolean;
  ModalComponent: ElementType | null; // 수정된 부분
  openModal: (component: ElementType) => void; // 수정된 부분
  closeModal: () => void;
}

const modalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  ModalComponent: null,
  openModal: (component) =>
    set(() => ({
      isModalOpen: true,
      ModalComponent: component,
    })),
  closeModal: () =>
    set(() => ({
      isModalOpen: false,
      ModalComponent: null,
    })),
}));

export default modalStore;
