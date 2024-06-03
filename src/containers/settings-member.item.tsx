import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import SettingsMember from '../components/dropdown/SettingsMemberDropdown';
import SettingsRole from '../components/dropdown/settingsRoleDropdown';

const MemberItem = styled.li`
  width: 900px;
  border-bottom: 1px solid black;
  color: var(--main-black, #000);
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 150%; /* 21px */
  letter-spacing: -0.266px;
  display: flex;
  p {
    width: 154px;
    padding: 8px;
    display: flex;
    align-items: center;
  }
`;

const UserName = styled.div`
  width: 430px;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  background: #d9d9d9;
  border-radius: 100px;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Role = styled.div`
  width: 154px;
  padding: 8px;
  display: flex;
  align-items: center;
  position: relative;
  button {
    padding: 15px 0;
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--main-black, #000);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 21px */
    letter-spacing: -0.266px;
    cursor: pointer;
  }
`;

const More = styled.div`
  width: 100px;
  padding: 8px;
  display: flex;
  align-items: center;
  position: relative;
  button {
    padding: 15px 0;
    background-color: transparent;
    border: none;
    outline: none;
    color: var(--main-black, #000);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 21px */
    letter-spacing: -0.266px;
    cursor: pointer;
  }
`;

interface Member {
  name: string;
  email: string;
  job: string;
  role: string;
}

export default function SettingsMemberItem({ name, email, job, role }: Member) {
  const settingsMemberDropdownRef = useRef<HTMLDivElement>(null);
  const settingsRoleDropdownRef = useRef<HTMLDivElement>(null);
  const [showsDropdown, setShowsDropdown] = useState(false);
  const [showsRoleDropdown, setShowsRoleDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleDetect = (e: React.BaseSyntheticEvent | MouseEvent) => {
      if (
        settingsMemberDropdownRef.current &&
        !settingsMemberDropdownRef.current.contains(e.target)
      )
        setShowsDropdown(false);
      if (
        settingsRoleDropdownRef.current &&
        !settingsRoleDropdownRef.current.contains(e.target)
      )
        setShowsRoleDropdown(false);
    };
    document.addEventListener('click', handleDetect);
    return () => {
      document.removeEventListener('click', handleDetect);
    };
  }, []);

  useEffect(() => {
    setShowsDropdown(false);
    setShowsRoleDropdown(false);
  }, [location.pathname]);

  return (
    <MemberItem>
      <UserName>
        <Avatar></Avatar>
        <UserInfo>
          <span>{name}</span>
          <span>{email}</span>
        </UserInfo>
      </UserName>
      <p>{job}</p>
      <Role ref={settingsRoleDropdownRef}>
        <button onClick={() => setShowsRoleDropdown((prevState) => !prevState)}>
          {role}
        </button>
      </Role>
      <More ref={settingsMemberDropdownRef}>
        <button onClick={() => setShowsDropdown((prevState) => !prevState)}>
          더보기
        </button>
        <SettingsRole isActive={showsRoleDropdown} />
        <SettingsMember isActive={showsDropdown} />
      </More>
    </MemberItem>
  );
}
