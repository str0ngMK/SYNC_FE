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

const ProejctFrame = styled.div`
  display: flex;
  // width: 1360px;
  height: 963px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  flex-shrink: 0;
`;

const ProjectUpperFrame = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const ProjectLowerFrame = styled.section`
  height: 632px;
  flex-shrink: 0;
  align-self: stretch;
`;

const Project = () => {
  const navigate = useNavigate();
  return (
    <ProejctFrame>
      <ProjectUpperFrame>
        <TabMenu>
          <li onClick={() => navigate('/projects/board')}>보드</li>
          <li onClick={() => navigate('/projects/list')}>리스트</li>
        </TabMenu>
      </ProjectUpperFrame>
      <ProjectLowerFrame>
        <Outlet />
      </ProjectLowerFrame>
    </ProejctFrame>
  );
};

export default Project;
