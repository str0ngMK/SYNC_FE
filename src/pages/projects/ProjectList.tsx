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
    <ProjectListFrame>
      <ProjectListHeaderFrame>
        <ProjectListHeader style={{ width: '300px' }}>
          <ProjectListHeaderText>프로젝트명</ProjectListHeaderText>
        </ProjectListHeader>
        <ProjectListHeader style={{ width: '380px' }}>
          <ProjectListHeaderText>설명</ProjectListHeaderText>
        </ProjectListHeader>
        <ProjectListHeader style={{ width: '311px' }}>
          <ProjectListHeaderText>진행률</ProjectListHeaderText>
        </ProjectListHeader>
        <ProjectListHeader style={{ width: '170px' }}>
          <ProjectListHeaderText>담당자</ProjectListHeaderText>
        </ProjectListHeader>
        <ProjectListHeader style={{ width: '212px' }}>
          <ProjectListHeaderText>남은 기간</ProjectListHeaderText>
        </ProjectListHeader>
        <ProjectListHeader style={{ width: '56px' }} />
      </ProjectListHeaderFrame>
      <main>
        {projectList?.map((project) => (
          <ProjectListItem key={project.projectId} project={project} />
        ))}
      </main>
    </ProjectListFrame>
  );
};

export default ProjectList;
