import { useEffect, useState } from 'react';

import Add from '@assets/add.svg';
import CreateProjectModal from '@components/modal/CreateProjectModal';
import { useModal } from '@hooks';
// import useModal from '@hooks/useModal';
import { requiredJwtTokeninstance } from '@libs/axios/axios';
import { AxiosResponse } from 'axios';
import styled from 'styled-components';

import ProjectBoardItem from './ProjectBoardItem';

const Section = styled.section`
  display: flex;
  flex-direction: column;
`;

const Title = styled.article`
  margin-bottom: 20px;
`;

const ProjectBoardHeader = styled.section`
  margin-bottom: 20px;
`;

const ProjectAddButton = styled.button`
  height: 36px;
  padding: 8px 24px;
  background-color: var(--Primary-Orange-Yellow-Orange, #ffd880);
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  span {
    color: var(--Black-White-Black-100, #202020);
    /* Heading 5 */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px;
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
      try {
        const response: AxiosResponse<
          AxiosRes<Project[]>,
          any
        > = await requiredJwtTokeninstance.get(
          `/project/api/v2?userId=abc123@gmail.com`,
        );
        const test = await requiredJwtTokeninstance.get(
          `http://129.213.161.199:31585/project/api/v1?projectIds=${response.data.value.join(',')}`,
        );
        console.log(test);
        return response.data.value;
      } catch (error) {
        console.log(error);
        return undefined;
      }
    };
    getProjectList().then((data) => {
      if (data) setProjectList(data);
    });
  }, []);

  return (
    <Section>
      <Title>
        <h1 hidden>프로젝트 보드</h1>
      </Title>
      <ProjectBoardHeader>
        <ProjectAddButton onClick={() => openModal}>
          <img src={Add} alt="프로젝트 추가" />
          <span>프로젝트 추가</span>
        </ProjectAddButton>
      </ProjectBoardHeader>

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
