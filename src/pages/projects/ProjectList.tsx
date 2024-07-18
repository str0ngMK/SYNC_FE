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
      {projectList?.map((project) => (
        <ProjectListItem key={project.projectId} project={project} />
      ))}
    </>
  );
};

export default ProjectList;
