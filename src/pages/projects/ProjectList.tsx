import { useEffect, useState } from 'react';

import type { Project } from '@customTypes/project';
import { requiredJwtTokeninstance } from '@libs/axios/axios';
import { AxiosResponse } from 'axios';

interface AxiosRes<ResponseType> {
  message: string;
  result: boolean;
  value: ResponseType;
}

const ProjectList = () => {
  const [projectList, setProjectList] = useState<Project[] | null>(null);

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

  useEffect(() => {
    console.log('projectList : ', projectList);
  }, [projectList]);
  return <section>프로젝트 리스트 페이지</section>;
};

export default ProjectList;
