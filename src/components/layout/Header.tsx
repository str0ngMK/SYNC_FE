import styled from 'styled-components';

const HeaderWrap = styled.header`
  width: 1600px;
  height: 68px;
  padding: 12px 34px;
  position: fixed;
  left: 286px;
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
  width: 218px;
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

export default function Header() {
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
                <img src="./assets/More.svg" alt="프로필 더 보기" />
              </Profile>
            </ProfileWrap>
            <img src="./assets/bell-02.svg" alt="알림" />
          </ProfileItem>
        </HeaderList>
      </Navigation>
    </HeaderWrap>
  );
}
