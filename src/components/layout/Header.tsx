import more from '@assets/More.svg';
import settings from '@assets/Settings.svg';
import alrams from '@assets/bell-02.svg';
import profileDefault from '@assets/man-438081_960_720.svg';
import search from '@assets/search.svg';
import { ConfigDropDown, MenuDropDown } from '@components/dropdown';
import useDropdown from '@hooks/useDropdown';
import useLoggedInUserStore from '@libs/store/store';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  width: calc(100% - 242px);
  height: 68px;
  padding: 12px 34px;
  border-bottom: 2px solid black;
  position: fixed;
  left: 240px;
  top: 0;
  z-index: 50;
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

const SearchContainer = styled.li`
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

const ToolContainer = styled.li`
  width: 250px;
  display: flex;
  align-items: center;
  gap: 30px;
`;

const AlarmAndSetting = styled.div`
  display: flex;
  gap: 16px;
`;

const ProfileWrap = styled.div`
  width: 182px;
  height: 44px;
  display: inline-flex;
  align-items: center;
  gap: 8px;
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

const Config = styled.div`
  cursor: pointer;
  position: relative;
`;

const More = styled.div`
  cursor: pointer;
  position: relative;
`;

export default function Header() {
  const [isOpenProfileDropdown, toggleProfileDropdown, profileDropdownRef] =
    useDropdown();
  const [isOpenConfigDropdown, toggleConfigDropdown, configDropdownRef] =
    useDropdown();
  const { loggedInUser } = useLoggedInUserStore();

  return (
    <HeaderWrap>
      <Navigation>
        <HeaderList>
          <SearchContainer>
            <SearchBar type="text" placeholder="Search" />
            <SearchSvg src={search} />
          </SearchContainer>
          <ToolContainer>
            <AlarmAndSetting>
              <img src={alrams} alt="알림" />
              <Config ref={configDropdownRef}>
                <img src={settings} alt="설정" onClick={toggleConfigDropdown} />
                <ConfigDropDown isOpen={isOpenConfigDropdown} />
              </Config>
            </AlarmAndSetting>
            <ProfileWrap>
              <img src={profileDefault} alt="프로필 이미지" />
              <Profile>
                <UserInfo>
                  <UserInfoHeader>{loggedInUser || 'Name'}</UserInfoHeader>
                  <UserInfoFooter>UI Designer</UserInfoFooter>
                </UserInfo>
              </Profile>
              <More ref={profileDropdownRef}>
                <img
                  src={more}
                  alt="프로필 더 보기"
                  onClick={toggleProfileDropdown}
                />
                <MenuDropDown isOpen={isOpenProfileDropdown} />
              </More>
            </ProfileWrap>
          </ToolContainer>
        </HeaderList>
      </Navigation>
    </HeaderWrap>
  );
}
