/* eslint-disable @typescript-eslint/no-unused-vars */
import more from '@assets/More.svg';
import ProfileImagePath from '@assets/Profile_Human.png';
import settings from '@assets/Settings.svg';
import alrams from '@assets/bell-02.svg';
import profileDefault from '@assets/man-438081_960_720.svg';
import search from '@assets/search.svg';
import { ConfigDropDown, MenuDropDown } from '@components/dropdown';
import useDropdown from '@hooks/useDropdown';
import { useLoggedInUserStore } from '@libs/store';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  display: flex;
  width: calc(100vw - 80px);
  height: 60px;
  padding: 14px 40px;
  align-items: center;
  flex-shrink: 0;
  justify-content: space-between;

  border-bottom: 1px solid var(--Black-White-Black-10, #f4f4f4);
  background: var(--Black-White-White, #fff);

  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  margin-left: 80px;
`;

const BreadcrumbComponent = () => {
  const BreadcrumbFrame = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
  `;

  const BreadcrumbText = styled.text`
    color: var(--Black-White-Black-70, #636363);

    /* Heading 5 */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px; /* 121.429% */

    white-space: nowrap;
  `;

  const Devide = styled.div`
    color: var(--Black-White-Black-70, #636363);

    /* Heading 5 */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px; /* 121.429% */
  `;

  return (
    <BreadcrumbFrame>
      <BreadcrumbText>프로젝트명</BreadcrumbText>
      <Devide>/</Devide>
      <BreadcrumbText>테스트</BreadcrumbText>
    </BreadcrumbFrame>
  );
};

const InfoComponent = () => {
  const InfoFrame = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 12px;
  `;

  const Alarm = styled.div`
    display: flex;
    padding: 4px;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
  `;

  const AlarmIcon = styled.svg`
    width: 24px;
    height: 24px;
  `;

  const AlarmIconSvg = () => (
    <AlarmIcon
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9.35493 21C10.0601 21.6224 10.9863 22 12.0008 22C13.0152 22 13.9414 21.6224 14.6466 21M18.0008 8C18.0008 6.4087 17.3686 4.88258 16.2434 3.75736C15.1182 2.63214 13.5921 2 12.0008 2C10.4095 2 8.88333 2.63214 7.75811 3.75736C6.63289 4.88258 6.00075 6.4087 6.00075 8C6.00075 11.0902 5.22122 13.206 4.35042 14.6054C3.61588 15.7859 3.24861 16.3761 3.26208 16.5408C3.27699 16.7231 3.31561 16.7926 3.46253 16.9016C3.59521 17 4.19334 17 5.38961 17H18.6119C19.8082 17 20.4063 17 20.539 16.9016C20.6859 16.7926 20.7245 16.7231 20.7394 16.5408C20.7529 16.3761 20.3856 15.7859 19.6511 14.6054C18.7803 13.206 18.0008 11.0902 18.0008 8Z"
        stroke="#BFBFBF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </AlarmIcon>
  );

  const Setting = styled.div`
    display: flex;
    padding: 4px;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
  `;

  const SettingIcon = styled.svg`
    width: 24px;
    height: 24px;
  `;

  const SettingIconSvg = () => (
    <SettingIcon
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
        stroke="#BFBFBF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M18.7273 14.7273C18.6063 15.0015 18.5702 15.3056 18.6236 15.6005C18.6771 15.8954 18.8177 16.1676 19.0273 16.3818L19.0818 16.4364C19.2509 16.6052 19.385 16.8057 19.4765 17.0265C19.568 17.2472 19.6151 17.4838 19.6151 17.7227C19.6151 17.9617 19.568 18.1983 19.4765 18.419C19.385 18.6397 19.2509 18.8402 19.0818 19.0091C18.913 19.1781 18.7124 19.3122 18.4917 19.4037C18.271 19.4952 18.0344 19.5423 17.7955 19.5423C17.5565 19.5423 17.3199 19.4952 17.0992 19.4037C16.8785 19.3122 16.678 19.1781 16.5091 19.0091L16.4545 18.9545C16.2403 18.745 15.9682 18.6044 15.6733 18.5509C15.3784 18.4974 15.0742 18.5335 14.8 18.6545C14.5311 18.7698 14.3018 18.9611 14.1403 19.205C13.9788 19.4489 13.8921 19.7347 13.8909 20.0273V20.1818C13.8909 20.664 13.6994 21.1265 13.3584 21.4675C13.0174 21.8084 12.5549 22 12.0727 22C11.5905 22 11.1281 21.8084 10.7871 21.4675C10.4461 21.1265 10.2545 20.664 10.2545 20.1818V20.1C10.2475 19.7991 10.1501 19.5073 9.97501 19.2625C9.79991 19.0176 9.55521 18.8312 9.27273 18.7273C8.99853 18.6063 8.69437 18.5702 8.39947 18.6236C8.10456 18.6771 7.83244 18.8177 7.61818 19.0273L7.56364 19.0818C7.39478 19.2509 7.19425 19.385 6.97353 19.4765C6.7528 19.568 6.51621 19.6151 6.27727 19.6151C6.03834 19.6151 5.80174 19.568 5.58102 19.4765C5.36029 19.385 5.15977 19.2509 4.99091 19.0818C4.82186 18.913 4.68775 18.7124 4.59626 18.4917C4.50476 18.271 4.45766 18.0344 4.45766 17.7955C4.45766 17.5565 4.50476 17.3199 4.59626 17.0992C4.68775 16.8785 4.82186 16.678 4.99091 16.5091L5.04545 16.4545C5.25503 16.2403 5.39562 15.9682 5.4491 15.6733C5.50257 15.3784 5.46647 15.0742 5.34545 14.8C5.23022 14.5311 5.03887 14.3018 4.79497 14.1403C4.55107 13.9788 4.26526 13.8921 3.97273 13.8909H3.81818C3.33597 13.8909 2.87351 13.6994 2.53253 13.3584C2.19156 13.0174 2 12.5549 2 12.0727C2 11.5905 2.19156 11.1281 2.53253 10.7871C2.87351 10.4461 3.33597 10.2545 3.81818 10.2545H3.9C4.2009 10.2475 4.49273 10.1501 4.73754 9.97501C4.98236 9.79991 5.16883 9.55521 5.27273 9.27273C5.39374 8.99853 5.42984 8.69437 5.37637 8.39947C5.3229 8.10456 5.18231 7.83244 4.97273 7.61818L4.91818 7.56364C4.74913 7.39478 4.61503 7.19425 4.52353 6.97353C4.43203 6.7528 4.38493 6.51621 4.38493 6.27727C4.38493 6.03834 4.43203 5.80174 4.52353 5.58102C4.61503 5.36029 4.74913 5.15977 4.91818 4.99091C5.08704 4.82186 5.28757 4.68775 5.50829 4.59626C5.72901 4.50476 5.96561 4.45766 6.20455 4.45766C6.44348 4.45766 6.68008 4.50476 6.9008 4.59626C7.12152 4.68775 7.32205 4.82186 7.49091 4.99091L7.54545 5.04545C7.75971 5.25503 8.03183 5.39562 8.32674 5.4491C8.62164 5.50257 8.9258 5.46647 9.2 5.34545H9.27273C9.54161 5.23022 9.77093 5.03887 9.93245 4.79497C10.094 4.55107 10.1807 4.26526 10.1818 3.97273V3.81818C10.1818 3.33597 10.3734 2.87351 10.7144 2.53253C11.0553 2.19156 11.5178 2 12 2C12.4822 2 12.9447 2.19156 13.2856 2.53253C13.6266 2.87351 13.8182 3.33597 13.8182 3.81818V3.9C13.8193 4.19253 13.906 4.47834 14.0676 4.72224C14.2291 4.96614 14.4584 5.15749 14.7273 5.27273C15.0015 5.39374 15.3056 5.42984 15.6005 5.37637C15.8954 5.3229 16.1676 5.18231 16.3818 4.97273L16.4364 4.91818C16.6052 4.74913 16.8057 4.61503 17.0265 4.52353C17.2472 4.43203 17.4838 4.38493 17.7227 4.38493C17.9617 4.38493 18.1983 4.43203 18.419 4.52353C18.6397 4.61503 18.8402 4.74913 19.0091 4.91818C19.1781 5.08704 19.3122 5.28757 19.4037 5.50829C19.4952 5.72901 19.5423 5.96561 19.5423 6.20455C19.5423 6.44348 19.4952 6.68008 19.4037 6.9008C19.3122 7.12152 19.1781 7.32205 19.0091 7.49091L18.9545 7.54545C18.745 7.75971 18.6044 8.03183 18.5509 8.32674C18.4974 8.62164 18.5335 8.9258 18.6545 9.2V9.27273C18.7698 9.54161 18.9611 9.77093 19.205 9.93245C19.4489 10.094 19.7347 10.1807 20.0273 10.1818H20.1818C20.664 10.1818 21.1265 10.3734 21.4675 10.7144C21.8084 11.0553 22 11.5178 22 12C22 12.4822 21.8084 12.9447 21.4675 13.2856C21.1265 13.6266 20.664 13.8182 20.1818 13.8182H20.1C19.8075 13.8193 19.5217 13.906 19.2778 14.0676C19.0339 14.2291 18.8425 14.4584 18.7273 14.7273Z"
        stroke="#BFBFBF"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SettingIcon>
  );

  const Profile = styled.div`
    display: flex;
    padding: 0px 12px;
    align-items: center;
    gap: 8px;
  `;

  const ProfileImage = styled.image`
    width: 32px;
    height: 32px;

    border-radius: 100px;
    border: 2px solid var(--Black-White-White, #fff);
    background: url(${ProfileImagePath}) lightgray 50% / cover no-repeat;
  `;

  const ProfileName = styled.div`
    display: flex;
    align-items: center;
    gap: 15px;

    white-space: nowrap;
  `;

  const ProfileNameText = styled.text`
    color: var(--Black-White-Black-100, #202020);

    /* Heading 5 */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px; /* 121.429% */
  `;

  return (
    <InfoFrame>
      <Alarm>
        <AlarmIconSvg />
      </Alarm>
      <Setting>
        <SettingIconSvg />
      </Setting>
      <Profile>
        <ProfileImage />
        <ProfileName>
          <ProfileNameText>홍길동</ProfileNameText>
        </ProfileName>
      </Profile>
    </InfoFrame>
  );
};

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
      <BreadcrumbComponent />
      <InfoComponent />
      {/* <Navigation>
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
      </Navigation> */}
    </HeaderWrap>
  );
}
