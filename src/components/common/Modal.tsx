import React from 'react';
import styled from 'styled-components';
import ModalPortal from './ModalPortal';

const ModalWrapper = styled.div<{ $isActive: boolean }>`
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
  modalRef: React.RefObject<HTMLTableSectionElement>;
}

export default function Modal({ children, isOpen, modalRef }: ModalRef) {
  return (
    <ModalPortal>
      <ModalWrapper $isActive={isOpen}>
        <Container ref={modalRef}>{children}</Container>
      </ModalWrapper>
    </ModalPortal>
  );
}
