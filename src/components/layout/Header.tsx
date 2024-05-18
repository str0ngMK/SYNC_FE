import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  width: calc(100% - 240px);
  height: 68px;
  padding: 12px 34px;
  border-bottom: 2px solid black;
  position: fixed;
  left: 240px;
  top: 0;
`;

const Navigation = styled.nav`
  width: 100%;
`;

const HeaderList = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const SearchItem = styled.li`
  width: 388px;
  height: 38px;
  flex-shrink: 0;
  position: relative;
`;

const SearchBar = styled.input`
  width: 388px;
  height: 38px;
  padding-left: 45px;
  flex-shrink: 0;
  border-radius: 19px;
  border: 1px solid var(--main-black, #000);
  background: #f5f6fa;
  &::placeholder {
    color: #202224;
    font-family: 'Nunito Sans';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const SearchSvg = styled.img`
  position: absolute;
  left: 16px;
  top: 10px;
`;

const ProfileItem = styled.li`
  width: 250px;
  display: flex;
  align-items: center;
  gap: 32px;
`;

const ProfileWrap = styled.div`
  width: 182px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  gap: 20px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  position: relative;
`;

const UserInfo = styled.p`
  width: 85px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1px;
  img {
    width: 18px;
    height: 18px;
  }
`;

const UserInfoHeader = styled.span`
  color: #404040;
  font-family: 'Nunito Sans';
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const UserInfoFooter = styled.span`
  color: #565656;
  font-family: 'Nunito Sans';
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const More = styled.div`
  cursor: pointer;
`;

const MenuDropDown = styled.ul<{ $isActive: boolean }>`
  width: 290px;
  border: 1px solid #222222;
  display: ${(props) => (props.$isActive ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  left: -180px;
  bottom: -291px;
`;

const DropdownItem = styled.li`
  padding: 16px;
  border-bottom: 2px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:last-child {
    border-bottom: 0;
  }
  p {
    color: var(--main-black, #000);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  &:hover,
  &:focus {
    background-color: #888888;
  }
`;

const Temp = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 20px;
`;

export default function Header() {
  const profileMoreRef = useRef<HTMLDivElement>(null);
  const [showsMenuDropdown, setShowsMenuDropdown] = useState(false);

  useEffect(() => {
    const handleDetectMenuDropdown = (
      e: React.BaseSyntheticEvent | MouseEvent
    ) => {
      e.preventDefault();
      if (profileMoreRef.current && !profileMoreRef.current.contains(e.target))
        setShowsMenuDropdown(false);
    };
    document.addEventListener('click', handleDetectMenuDropdown);
    return () => {
      document.removeEventListener('click', handleDetectMenuDropdown);
    };
  }, []);

  return (
    <HeaderWrap>
      <Navigation>
        <HeaderList>
          <SearchItem>
            <SearchBar type="text" placeholder="Search" />
            <SearchSvg src="./assets/search.svg" />
          </SearchItem>
          <ProfileItem>
            <ProfileWrap>
              <img src="./assets/man-438081_960_720.svg" alt="프로필 이미지" />
              <Profile>
                <UserInfo>
                  <UserInfoHeader>Name</UserInfoHeader>
                  <UserInfoFooter>UI Designer</UserInfoFooter>
                </UserInfo>
                <More ref={profileMoreRef}>
                  <img
                    src="./assets/More.svg"
                    alt="프로필 더 보기"
                    onClick={() => setShowsMenuDropdown(true)}
                  />
                  <MenuDropDown $isActive={showsMenuDropdown}>
                    <DropdownItem>
                      <Temp>
                        <img
                          src="./assets/man-438081_960_720.svg"
                          alt="프로필 이미지"
                        />
                        <UserInfo>
                          <UserInfoHeader>Name</UserInfoHeader>
                          <UserInfoFooter>UI Designer</UserInfoFooter>
                        </UserInfo>
                      </Temp>
                    </DropdownItem>
                    <DropdownItem>
                      <p>프로필 설정</p>
                    </DropdownItem>
                    <DropdownItem>
                      <p>설정</p>
                    </DropdownItem>
                    <DropdownItem>
                      <p>멤버 관리</p>
                    </DropdownItem>
                    <DropdownItem>
                      <p>로그아웃</p>
                    </DropdownItem>
                  </MenuDropDown>
                </More>
              </Profile>
            </ProfileWrap>
            <img src="./assets/bell-02.svg" alt="알림" />
          </ProfileItem>
        </HeaderList>
      </Navigation>
    </HeaderWrap>
  );
}
