import { Outlet, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const TabMenu = styled.ul`
  margin-bottom: 20px;
  font-weight: 600;
  display: flex;
  li {
    padding: 0 30px;
    &:hover,
    &:focus {
      color: #cccc33;
      cursor: pointer;
    }
  }
`;

const Project = () => {
  const navigate = useNavigate();
  return (
    <section>
      <TabMenu>
        <li onClick={() => navigate('/projects/board')}>보드</li>
        <li onClick={() => navigate('/projects/list')}>리스트</li>
      </TabMenu>
      <Outlet />
    </section>
  );
};

export default Project;
