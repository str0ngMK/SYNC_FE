/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
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
  display: inline-flex;
  padding-bottom: 32px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
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

const TabComponent = () => {
  const TabFrame = styled.div`
    display: flex;
    padding: 12px 40px 0px 40px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;

    border-bottom: 1px solid var(--Black-White-Black-10, #f4f4f4);
  `;

  const ProjectDropDown = styled.div`
    display: flex;
    height: 48px;
    padding: 8px 12px;
    align-items: center;
    gap: 12px;

    border-radius: 8px;
  `;

  const Tab = styled.ul`
    display: flex;
    align-items: center;
    gap: 12px;
  `;

  const TabLi = styled.li<{
    isSelected: boolean;
  }>`
    display: flex;
    align-items: center;
    gap: 12px;

    border-bottom: ${(props) =>
      props.isSelected
        ? '2px solid var(--Primary-Orange-Yellow-Orange, #ffd880)'
        : 'none'};
  `;

  const TabText = styled.text<{
    isSelected: boolean;
  }>`
    ${(props) =>
      props.isSelected
        ? 'color: var(--Black-White-Black-100, #202020);'
        : 'color: var(--Black-White-Black-35, #8f8f8f);'};

    /* Heading 5 */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px; /* 121.429% */
  `;

  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<string>('/projects/board');

  const handleTabClick = (path: string) => {
    setSelectedTab(path);
    navigate(path);
  };

  return (
    <TabFrame>
      <ProjectDropDown></ProjectDropDown>
      <Tab>
        <TabLi
          isSelected={selectedTab === '/projects/board'}
          onClick={() => handleTabClick('/projects/board')}
        >
          <TabText isSelected={selectedTab === '/projects/board'}>보드</TabText>
        </TabLi>
        <TabLi
          isSelected={selectedTab === '/projects/list'}
          onClick={() => handleTabClick('/projects/list')}
        >
          <TabText isSelected={selectedTab === '/projects/list'}>
            리스트
          </TabText>
        </TabLi>
      </Tab>
    </TabFrame>
  );
};

const Project = () => {
  const navigate = useNavigate();
  return (
    <ProejctFrame>
      <ProjectUpperFrame>
        <TabComponent />
      </ProjectUpperFrame>
      <ProjectLowerFrame>
        <Outlet />
      </ProjectLowerFrame>
    </ProejctFrame>
  );
};

export default Project;
