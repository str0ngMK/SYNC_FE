import { useEffect, useState } from 'react';

import CreateProjectModal from '@components/modal/CreateProjectModal';
import useModal from '@hooks/useModal';
import instance from '@libs/axios/axios';
import generateNormalDate from '@utils/generateNormalDate';
import { AxiosResponse } from 'axios';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  article {
    margin-bottom: 20px;
  }
`;

interface AxiosRes<ResponseType> {
  message: string;
  result: boolean;
  value: ResponseType;
}

interface Project {
  projectId: number;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
}

const ProjectItem = ({ project }: { project: Project }) => (
  <li key={project.projectId}>
    <h2>{project.title}</h2>
    <p>설명</p>
    <p>{project.description}</p>
    <p>{generateNormalDate(project.startDate, project.endDate)}</p>
  </li>
);

const ProjectBoards = () => {
  const [projectList, setProjectList] = useState<Project[] | null>(null);
  const [isOpen, openModal, modalRef, CreateProjectModalWrapper, closeModal] =
    useModal();

  useEffect(() => {
    const getProjectList = async () => {
      const response: AxiosResponse<
        AxiosRes<Project[]>,
        any
      > = await instance.get('/api/user/project/get');
      return response.data.value;
    };
    getProjectList().then((data) => {
      if (data) setProjectList(data);
    });
  }, []);

  return (
    <Section>
      <article>
        <h1>프로젝트 보드</h1>
        <button onClick={openModal}>프로젝트 추가</button>
      </article>
      <ul>
        {projectList?.map((project) => (
          <ProjectItem key={project.projectId} project={project} />
        ))}
      </ul>
      <CreateProjectModalWrapper isOpen={isOpen} modalRef={modalRef}>
        <CreateProjectModal closeModal={closeModal} />
      </CreateProjectModalWrapper>
    </Section>
  );
};

export default ProjectBoards;
