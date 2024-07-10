import { Link } from 'react-router-dom';
import styled from 'styled-components';

const SideBarWrap = styled.aside`
  display: flex;
  width: 242px;
  height: 100vh;
  border-right: 2px solid black;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  position: fixed;
`;

const TitleWrap = styled.div`
  display: flex;
  height: 68px;
  padding: 8px;
  border-bottom: 2px solid black;
  font-size: 20px;
  font-weight: 800;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  align-self: stretch;
`;

const Title = styled.h1`
  display: flex;
  height: 68px;
  font-size: 20px;
  font-weight: 800;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  align-self: stretch;
`;

const SideBarCombine = styled.ul`
  display: flex;
  width: 242px;
  padding: 32px 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  flex-shrink: 0;
`;

const SideBarItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
`;

const SideBarItemHeader = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  align-self: stretch;
  span {
    color: var(--main-black, #000);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
`;

const SideBarItem = styled.li`
  display: flex;
  padding: 12px 16px;
  border: 1px solid black;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  span {
    color: var(--main-black, #000);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 800;
    line-height: normal;
  }
`;

export default function SideBar() {
  return (
    <SideBarWrap>
      <TitleWrap>
        <Link to="/">
          <Title>LOGO</Title>
        </Link>
      </TitleWrap>
      <SideBarCombine>
        <SideBarItemWrap>
          <SideBarItemHeader>
            <span>-</span>
          </SideBarItemHeader>
          <SideBarItem>
            <span>홈</span>
          </SideBarItem>
        </SideBarItemWrap>

        <SideBarItemWrap>
          <Link to='/projects/board'>
          <SideBarItemHeader>
            <span>프로젝트</span>
          </SideBarItemHeader>
          </Link>
        </SideBarItemWrap>

        <SideBarItemWrap>
          <SideBarItemHeader>
            <span>캘린더</span>
          </SideBarItemHeader>
        </SideBarItemWrap>

        <SideBarItemWrap>
          <SideBarItemHeader>
            <span>한 눈에 보기</span>
          </SideBarItemHeader>
          <SideBarItem>
            <span>업무 리스트</span>
          </SideBarItem>
          <SideBarItem>
            <span>공유된 업무</span>
          </SideBarItem>
        </SideBarItemWrap>
      </SideBarCombine>
    </SideBarWrap>
  );
}
