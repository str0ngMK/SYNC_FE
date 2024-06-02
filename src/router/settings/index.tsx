import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
  height: 100%;
  border: 1px solid #d2dbe2;
  display: flex;
`;

const SettingsMenu = styled.ul`
  width: 237px;
  height: 100%;
  padding: 15px;
  border-right: 1px solid var(--New-group-Gray, #d2dbe2);
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SettingsMenuItem = styled.li`
  display: flex;
  flex-direction: column;
`;

const Typography = styled.p`
  padding: 8px 0px;
  color: var(--New-group-sub-color2, #a5aab1);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SubMenu = styled.ul``;

const SubItem = styled.li`
  padding: 16px;
  background: white;
  border: 1px solid var(--New-group-Gray, #d2dbe2);
  color: var(--main-black, #000);
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
`;

const SettingsContentWrapper = styled.section`
  width: calc(100% - 237px);
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export default function Settings() {
  return (
    <Wrapper>
      <SettingsMenu>
        <SettingsMenuItem>
          <Typography>프로젝트 설정</Typography>
          <SubMenu>
            <SubItem>프로젝트 리스트</SubItem>
            <SubItem>주소록</SubItem>
            <SubItem>업무명 설정</SubItem>
          </SubMenu>
        </SettingsMenuItem>

        <SettingsMenuItem>
          <Typography>시스템 설정</Typography>
          <SubMenu>
            <SubItem>알림 설정</SubItem>
          </SubMenu>
        </SettingsMenuItem>
      </SettingsMenu>
      <SettingsContentWrapper>
        <Outlet />
      </SettingsContentWrapper>
    </Wrapper>
  );
}
