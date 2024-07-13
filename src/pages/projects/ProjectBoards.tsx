import { useEffect, useState } from 'react';

import CreateProjectModal from '@components/modal/CreateProjectModal';
import useModal from '@hooks/useModal2';
// import useModal from '@hooks/useModal';
import { requiredJwtTokeninstance } from '@libs/axios/axios';
import { AxiosResponse } from 'axios';
import styled from 'styled-components';

import ProjectBoardItem from './ProjectBoardItem';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  article {
    margin-bottom: 20px;
  }
`;

const ProjectList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

interface AxiosRes<ResponseType> {
  message: string;
  result: boolean;
  value: ResponseType;
}

export interface Project {
  projectId: number;
  title: string;
  subTitle: string;
  description: string;
  startDate: Date;
  endDate: Date;
  memberIds: number[];
}

const ProjectBoards = () => {
  const [projectList, setProjectList] = useState<Project[] | null>(null);
  // const [isOpen, openModal, modalRef, CreateProjectModalWrapper, closeModal] =
  //   useModal();

  const [openModal, closeModal, isModalOpen] = useModal();

  useEffect(() => {
    const getProjectList = async () => {
      const response: AxiosResponse<
        AxiosRes<Project[]>,
        any
      > = await requiredJwtTokeninstance.get('/api/user/project/get');
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
        <button
          onClick={() => {
            if (isModalOpen) closeModal();
            else openModal(CreateProjectModal);
          }}
        >
          프로젝트 추가
        </button>
      </article>
      <ProjectList>
        {projectList?.map((project) => (
          <ProjectBoardItem key={project.projectId} project={project} />
        ))}
      </ProjectList>
      {/* <CreateProjectModalWrapper isOpen={isOpen} modalRef={modalRef}>
        <CreateProjectModal closeModal={closeModal} />
      </CreateProjectModalWrapper> */}
    </Section>
  );
};

export default ProjectBoards;
