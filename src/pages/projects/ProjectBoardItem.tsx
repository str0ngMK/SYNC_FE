import { useEffect, useState } from 'react';

import { requiredJwtTokeninstance } from '@libs/axios/axios';
import generateNormalDate from '@utils/generateNormalDate';
import { AxiosResponse } from 'axios';

import { Project } from './ProjectBoards';

interface Member {
  profileImg: string;
  userId: string;
  username: string;
}

interface APIResponse {
  value: Member;
}

const MemberProfile = ({ memberId }: { memberId: number }) => {
  const [member, setMember] = useState<Member | null>(null);
  const fetchMemberDetail = async (userId: number) => {
    const response: AxiosResponse<APIResponse, any> =
      await requiredJwtTokeninstance.get(`/api/user/info`, {
        params: {
          userId,
        },
      });
    return response;
  };

  useEffect(() => {
    fetchMemberDetail(memberId).then((res) => setMember(res.data.value));
  }, []);

  return <li>{member?.username}</li>;
};

const ProjectBoardItem = ({ project }: { project: Project }) => (
  <li key={project.projectId}>
    <h2>{project.title}</h2>
    <p>설명</p>
    <p>{project.description}</p>
    <p>{generateNormalDate(project.startDate, project.endDate)}</p>
    <ul>
      {project.memberIds.map((memberId) => (
        <MemberProfile key={project.projectId} memberId={memberId} />
      ))}
    </ul>
  </li>
);

export default ProjectBoardItem;
