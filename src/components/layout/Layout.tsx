import React from 'react';
import { Outlet } from 'react-router-dom';

import { ModalWrapper } from '@components/common';
import { modalStore } from '@libs/store';
import styled from 'styled-components';

import Header from './Header';
import SideBar from './SideBar';

const MainFrame = styled.main`
  width: 1440px;
  height: 1024px;
  flex-shrink: 0;

  background: var(--Primary-Orange-Light-Yellow-Orange, #fffdf3);
`;

const Main = styled.main`
  width: 100%;
  height: 100vh;
  padding-left: 272px;
  padding-right: 30px;
  padding-top: 98px;
  padding-bottom: 30px;
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
