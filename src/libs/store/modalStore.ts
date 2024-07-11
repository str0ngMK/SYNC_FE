import { ReactNode } from 'react';

import { create } from 'zustand';

interface ModalState {
  isModalOpen: boolean;
  modalComponent: ReactNode;
  openModal: (component: ReactNode) => void;
  closeModal: () => void;
}

const modalStore = create<ModalState>((set) => ({
  isModalOpen: false,
  modalComponent: null,
  openModal: (component) =>
    set(() => ({
      isModalOpen: true,
      modalComponent: component,
    })),
  closeModal: () =>
    set(() => ({
      isModalOpen: false,
      modalComponent: null,
    })),
}));

export default modalStore;
