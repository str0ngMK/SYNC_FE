import { useEffect, useState } from 'react';

import { ProjectListItem } from '@components/project';
import { Project } from '@customTypes/project';
import { getProjectList } from '@services/project';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

const Card = styled.header`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;
  border: 0.1rem solid black;
  box-sizing: border-box;
  margin-bottom: -0.1rem;
  height: 3rem;
`;

const Title = styled.div`
  flex-grow: 2;
  font-size: 0.8rem;
  color: grey;
  font-weight: bold;
  min-width: 10rem;
`;

const Content = styled.div`
  flex-grow: 10;
  font-size: 0.8rem;
  color: grey;
`;

const Checkbox = styled.input`
  margin-right: 1.5rem;
`;

const ProjectList = () => {
  const [projectList, setProjectList] = useState<Project[] | null>(null);

  useEffect(() => {
    getProjectList().then((data) => {
      if (data) setProjectList(data);
    });
  }, []);

  return (
    <>
      <Header>
        <LeftSection>
          <input type="checkbox" />
          <input placeholder="Search projects..." />
          <button type="submit">검색</button>
        </LeftSection>
        <RightSection>
          <button>프로젝트추가</button>
          <button>필터</button>
        </RightSection>
      </Header>
      <Card>
        <Checkbox type="checkbox" />
        <Title>프로젝트명</Title>
        <Content>설명</Content>
      </Card>
      <main>
        {projectList?.map((project) => (
          <ProjectListItem key={project.projectId} project={project} />
        ))}
      </main>
    </>
  );
};

export default ProjectList;
