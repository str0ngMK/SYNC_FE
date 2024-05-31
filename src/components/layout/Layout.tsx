import styled from 'styled-components';
import Header from './Header';
import SideBar from './SideBar';

const Main = styled.main`
  width: 100%;
  height: 100vh;
  padding-left: 272px;
  padding-right: 30px;
  padding-top: 98px;
  padding-bottom: 30px;
  z-index: 10;
`;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <>
        <SideBar />
        <Main>{children}</Main>
      </>
    </>
  );
}
