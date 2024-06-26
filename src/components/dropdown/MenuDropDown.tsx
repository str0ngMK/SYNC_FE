import { Link } from 'react-router-dom';
import styled from 'styled-components';

import profileDefault from '../../assets/man-438081_960_720.svg';

const Wrapper = styled.section<{ $isOpen: boolean }>`
  width: 216px;
  background: #fff;
  border: 1px solid #b8b8b8;
  border-radius: 8px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  position: absolute;
  left: -200px;
  bottom: -260px;
`;

const DropdownList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 50;
`;

const DropdownItem = styled.li`
  padding: 16px;
  border-bottom: 1px solid #b8b8b8;
  display: flex;
  flex-direction: row;
  align-items: center;
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

const DropDownHeader = styled(DropdownItem)`
  &:hover,
  &:focus {
    background-color: white;
  }
`;

const Temp = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 20px;
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

interface MenuDropDownProps {
  isOpen: boolean;
}

export default function MenuDropDown({ isOpen }: MenuDropDownProps) {
  return (
    <Wrapper $isOpen={isOpen}>
      <DropdownList>
        <DropDownHeader>
          <Temp>
            <img src={profileDefault} alt="프로필 이미지" />
            <UserInfo>
              <UserInfoHeader>Name</UserInfoHeader>
              <UserInfoFooter>UI Designer</UserInfoFooter>
            </UserInfo>
          </Temp>
        </DropDownHeader>
        <Link to="/profile/my">
          <DropdownItem>
            <p>프로필 설정</p>
          </DropdownItem>
        </Link>
        <Link to="/profile/auth">
          <DropdownItem>
            <p>설정</p>
          </DropdownItem>
        </Link>
        <DropdownItem>
          <p>로그아웃</p>
        </DropdownItem>
      </DropdownList>
    </Wrapper>
  );
}
