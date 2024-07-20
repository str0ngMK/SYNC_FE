import { useEffect, useState } from 'react';

import { ProjectListItem } from '@components/project';
import { Project } from '@customTypes/project';
import { getProjectList } from '@services/project';
import {
  Card,
  Checkbox,
  Content,
  Header,
  LeftSection,
  Manager,
  Progress,
  ProjectTimeline,
  RightSection,
  SettingsButton,
  Title,
} from '@styles/project';
import styled from 'styled-components';

const HeaderCard = styled(Card)`
  background-color: #fafafa;
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
      <HeaderCard>
        <Checkbox type="checkbox" />
        <Title>프로젝트명</Title>
        <Content>설명</Content>
        <Progress>진행률</Progress>
        <Manager>담당자</Manager>
        <ProjectTimeline>기간</ProjectTimeline>
        <SettingsButton>···</SettingsButton>
      </HeaderCard>
      <main>
        {projectList?.map((project) => (
          <ProjectListItem key={project.projectId} project={project} />
        ))}
      </main>
    </>
  );
};

export default ProjectList;
