import { Link, Outlet } from 'react-router-dom';

import styled from 'styled-components';

const Wrapper = styled.section`
  height: 100%;
  border: 1px solid black;
  display: flex;
`;

const ProfileMenu = styled.ul`
  width: 237px;
  height: 100%;
  border-right: 2px solid black;
  display: flex;
  flex-direction: column;
`;

const ProfileMenuItem = styled.li`
  display: flex;
  width: 237px;
  padding: 16px;
  border-bottom: 2px solid black;
  align-items: flex-start;
  &:last-child {
    border-bottom: 1px solid black;
  }
  a {
    width: 100%;
    height: 100%;
    color: var(--main-black, #000);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const ProfileContentWrapper = styled.section`
  width: calc(100% - 237px);
  padding: 30px;
  display: flex;
  flex-direction: column;
`;

export default function Profile() {
  return (
    <Wrapper>
      <ProfileMenu>
        <ProfileMenuItem>
          <Link to="/profile/my">프로필 설정</Link>
        </ProfileMenuItem>

        <ProfileMenuItem>
          <Link to="/profile/auth">보안 설정 </Link>
        </ProfileMenuItem>
      </ProfileMenu>
      <ProfileContentWrapper>
        <Outlet />
      </ProfileContentWrapper>
    </Wrapper>
  );
}
