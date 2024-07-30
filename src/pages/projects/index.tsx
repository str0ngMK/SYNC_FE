import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const TabMenu = styled.ul`
  margin-bottom: 20px;
  display: flex;
  li {
    padding: 12px 24px;
    font-weight: 600;
    cursor: pointer;
  }
`;

const TabMenuItem = styled.li<{ $iscurrenttabmenu: boolean }>`
  border-bottom: ${(props) =>
    props.$iscurrenttabmenu ? '2px solid #cccc33' : 'none'};
  color: ${(props) => (props.$iscurrenttabmenu ? '#202020' : '#8f8f8f')};
`;

const Project = () => {
  const [currentTabMenu, setCurrentTabMenu] = useState('board');
  const navigate = useNavigate();

  const handleClickTabMenu = (path: string) => {
    setCurrentTabMenu(path);
    navigate(`/projects/${path}`);
  };

  return (
    <section>
      <TabMenu>
        <TabMenuItem
          onClick={() => handleClickTabMenu('board')}
          $iscurrenttabmenu={currentTabMenu === 'board'}
        >
          <span>보드</span>
        </TabMenuItem>
        <TabMenuItem
          onClick={() => handleClickTabMenu('list')}
          $iscurrenttabmenu={currentTabMenu === 'list'}
        >
          리스트
        </TabMenuItem>
      </TabMenu>
      <Outlet />
    </section>
  );
};

export default Project;
