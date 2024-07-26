import { AxiosRes } from '@customTypes/common';
import { Project } from '@customTypes/project';
import { requiredJwtTokeninstance } from '@libs/axios/axios';
import { AxiosResponse } from 'axios';

const getProjectList = async () => {
  const response: AxiosResponse<
    AxiosRes<Project[]>,
    any
  > = await requiredJwtTokeninstance.get('/api/user/project/get');
  return response.data.value;
};

export default getProjectList;
