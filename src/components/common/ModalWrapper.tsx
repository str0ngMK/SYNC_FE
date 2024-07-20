import React, { useEffect, useRef } from 'react';

import { modalStore } from '@libs/store';
import styled from 'styled-components';

import ModalPortal from './ModalPortal';

const ModalWrapperContainer = styled.div<{ $isActive: boolean }>`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: ${(props) => (props.$isActive ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
`;

const Container = styled.section`
  padding: 50px;
  background: #fff;
  border-radius: 12px;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export interface ModalRef {
  children: React.ReactNode;
  isOpen: boolean;
}

export default function ModalWrapper({ children, isOpen }: ModalRef) {
  const { closeModal } = modalStore();

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, closeModal]);

  return (
    <ModalPortal>
      <ModalWrapperContainer $isActive={isOpen}>
        <Container ref={modalRef}>{children}</Container>
      </ModalWrapperContainer>
    </ModalPortal>
  );
}
