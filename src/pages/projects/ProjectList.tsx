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
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  border: 0.1rem solid black;
  box-sizing: border-box;
  margin-bottom: -0.1rem;
  height: 3rem;
  font-size: 0.8rem;
  overflow: hidden;
`;

const Checkbox = styled.input`
  margin-right: 1.5rem;
`;

const Title = styled.div`
  font-weight: bold;
  flex: 3 1 30rem;
  overflow: hidden;
  // text-overflow: ellipsis;
  // white-space: nowrap;
`;

const Content = styled.div`
  flex: 3 1 30rem;
  overflow: hidden;
  margin-right: 1rem;
  // text-overflow: ellipsis;
  // white-space: nowrap;
`;

const Progress = styled.div`
  color: grey;
  flex: 3 1 30rem;
  margin-right: 1rem;
`;

const Manager = styled.div`
  color: grey;
  flex: 1 1 10rem;
  margin-right: 1rem;
`;

const ProjectTimeline = styled.div`
  color: grey;
  flex: 2 1 20rem;
  margin-right: 1rem;
`;

const SettingsButton = styled.div`
  color: grey;
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
        <Progress>진행률</Progress>
        <Manager>담당자</Manager>
        <ProjectTimeline>기간</ProjectTimeline>
        <SettingsButton>...</SettingsButton>
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
