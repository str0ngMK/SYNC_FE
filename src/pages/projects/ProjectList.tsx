import { useEffect, useState } from 'react';

import { ProjectListItem } from '@components/project';
import { Project } from '@customTypes/project';
import { getProjectList } from '@services/project';
import {
  ProjectListFrame,
  ProjectListHeader,
  ProjectListHeaderText,
} from '@styles/project';
import styled from 'styled-components';

const TitleHeader = styled(ProjectListHeader)`
  width: 300px;
  align-self: stretch;
`;

const DescriptionHeader = styled(ProjectListHeader)`
  width: 380px;
  align-self: stretch;
`;

const ProgressHeader = styled(ProjectListHeader)`
  width: 311px;
  align-self: stretch;
`;

const ManagerHeader = styled(ProjectListHeader)`
  width: 170px;
  align-self: stretch;
`;

const RemainTimeHeader = styled(ProjectListHeader)`
  width: 212px;
`;

const EtcHeader = styled(ProjectListHeader)`
  width: 56px;
`;

const ProjectListHeaderFrame = styled.div`
  display: flex;
`;

const ProjectList = () => {
  const [projectList, setProjectList] = useState<Project[] | null>(null);

  useEffect(() => {
    getProjectList().then((data) => {
      console.log('getProjectList : ', data);
      if (data) setProjectList(data);
    });
  }, []);

  return (
    <>
      <div>검색, 프로젝트추가, 필터 들어가야함</div>
      <ProjectListFrame>
        <ProjectListHeaderFrame>
          <TitleHeader>
            <ProjectListHeaderText>프로젝트명</ProjectListHeaderText>
          </TitleHeader>
          <DescriptionHeader>
            <ProjectListHeaderText>설명</ProjectListHeaderText>
          </DescriptionHeader>
          <ProgressHeader>
            <ProjectListHeaderText>진행률</ProjectListHeaderText>
          </ProgressHeader>
          <ManagerHeader>
            <ProjectListHeaderText>담당자</ProjectListHeaderText>
          </ManagerHeader>
          <RemainTimeHeader>
            <ProjectListHeaderText>남은 기간</ProjectListHeaderText>
          </RemainTimeHeader>
          <EtcHeader />
        </ProjectListHeaderFrame>
        <main>
          {projectList?.map((project) => (
            <ProjectListItem key={project.projectId} project={project} />
          ))}
        </main>
      </ProjectListFrame>
    </>
  );
};

export default ProjectList;
