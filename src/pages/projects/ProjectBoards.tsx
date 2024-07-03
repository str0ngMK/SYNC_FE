import CreateProjectModal from '@components/modal/CreateProjectModal';
import useModal from '@hooks/useModal';
import { AxiosResponse } from 'axios';
import instance from '@libs/axios/axios';
import { useEffect, useState } from 'react';

interface AxiosRes<ResponseType> {
  message: string;
  result: boolean;
  value: ResponseType;
}

interface Project {
  title: string;
  description: string;
  startDate: string;
  endDate: string;
}

const ProjectBoards = () => {
  const [projectList, setProjectList] = useState<Project[] | null>(null);
  const [isOpen, openModal, modalRef, CreateProjectModalWrapper, closeModal] = useModal();

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

  console.log(projectList);

  return (
    <section>
      <h1>프로젝트 보드</h1>
      <button onClick={openModal}>프로젝트 추가</button>
      <CreateProjectModalWrapper isOpen={isOpen} modalRef={modalRef}>
        <CreateProjectModal closeModal={closeModal} />
      </CreateProjectModalWrapper>
    </section>
    
  );
};

export default ProjectBoards;
