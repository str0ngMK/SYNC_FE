import React from 'react';
import { Outlet } from 'react-router-dom';

import { ModalWrapper } from '@components/common';
import { modalStore } from '@libs/store';
import styled from 'styled-components';

import Header from './Header';
import SideBar from './SideBar';

const MainFrame = styled.main`
  flex-shrink: 0;

  background: var(--Primary-Orange-Light-Yellow-Orange, #fffdf3);
`;

const Main = styled.div`
  margin-left: 80px; /* SideBar의 너비만큼 공간을 띄워야 함 */
  margin-top: 60px; /* Header의 높이만큼 공간을 띄워야 함 */
`;

export default function Layout() {
  const { isModalOpen, ModalComponent } = modalStore();

  return (
    <MainFrame>
      <Header />

      <SideBar />
      <Main>
        <Outlet />
        {isModalOpen && ModalComponent && (
          <ModalWrapper isOpen={isModalOpen}>
            <ModalComponent />
          </ModalWrapper>
        )}
      </Main>
    </MainFrame>
  );
}
