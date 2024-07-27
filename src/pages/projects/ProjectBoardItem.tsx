import projectCalendar from '@assets/calendar.svg';
import meatballs from '@assets/meatballs.svg';
import projectIcon from '@assets/project-icon.png';
import generateNormalDate from '@utils/generateNormalDate';
import styled from 'styled-components';

import { Project } from './ProjectBoards';

const ProjectBoard = styled.li`
  padding: 20px;
  border-radius: 12px;
  border: 1px solid var(--Black-White-Black-10, #f4f4f4);
  background: var(--Black-White-White, #fff);
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ProjectBoardHeader = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  img {
    width: 28px;
    height: 28px;
  }
`;

const ProjectBoardTitle = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  gap: 2px;
  h5 {
    color: var(--Black-White-Black-35, #8f8f8f);
    /* Small Text_B */
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 700;
    line-height: 14px; /* 116.667% */
  }
  h2 {
    color: var(--Black-White-Black-100, #202020);
    /* Heading 4 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px; /* 131.25% */
  }
`;

const ProjectBoardDescription = styled.p`
  height: 40px;
  overflow: hidden;
  color: var(--Black-White-Black-100, #202020);
  text-overflow: ellipsis;
  white-space: nowrap;
  /* Paragraph */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`;

const ProjectBoardFooter = styled.section`
  padding: 0 1px;
  display: flex;
  justify-content: space-between;
  align-items: conter;
`;

const ProjectBoardMemberList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: -2px;
  li {
    width: 36px;
    height: 36px;
    padding: 5px 1px;
    background: var(--Alert-Color-Light-Blue, #e7f1ff);
    border: 2px solid var(--Black-White-White, #fff);
    border-radius: 999px;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ProjectBoardPeriod = styled.div`
  padding: 4px 8px;
  background-color: var(--Black-White-Black-10, #f4f4f4);
  border-radius: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  p {
    color: var(--Black-White-Black-35, #8f8f8f);
    font-family: Inter;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const ProjectBoardItem = ({ project }: { project: Project }) => (
  <ProjectBoard key={project.projectId}>
    <ProjectBoardHeader>
      <img src={projectIcon} alt="프로젝트 대표 아이콘" />
      <ProjectBoardTitle>
        <h5>{project.subTitle}</h5>
        <h2>{project.title}</h2>
      </ProjectBoardTitle>
      <img src={meatballs} alt="보드 더보기" />
    </ProjectBoardHeader>
    <ProjectBoardDescription>{project.description}</ProjectBoardDescription>

    <ProjectBoardFooter>
      <ProjectBoardMemberList></ProjectBoardMemberList>
      <ProjectBoardPeriod>
        <img src={projectCalendar} alt="프로젝트 기간" />
        <p>{generateNormalDate(project.startDate, project.endDate)}</p>
      </ProjectBoardPeriod>
    </ProjectBoardFooter>
  </ProjectBoard>
);

export default ProjectBoardItem;

/*
  
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

  return <li>{member?.username.slice(-2)}</li>;
};


  project.memberIds.map((memberId) => (
    <MemberProfile key={project.projectId} memberId={memberId} />
  ))
*/
