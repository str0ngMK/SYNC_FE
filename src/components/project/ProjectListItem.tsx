import { Project } from '@customTypes/project';
import dayjs from 'dayjs';
import styled from 'styled-components';

const Card = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  border: 0.1rem solid black;
  box-sizing: border-box;
  margin-bottom: -0.1rem;
  height: 3rem;
  font-size: 0.8rem;
  overflow: hidden;
`;

const Checkbox = styled.input`
  margin-right: 1.5rem;
`;

const Title = styled.div`
  font-weight: bold;
  flex: 3 1 30rem;
  overflow: hidden;
  // text-overflow: ellipsis;
  // white-space: nowrap;
`;

const Content = styled.div`
  flex: 3 1 30rem;
  overflow: hidden;
  margin-right: 1rem;
  // text-overflow: ellipsis;
  // white-space: nowrap;
`;

const Progress = styled.div`
  color: grey;
  flex: 3 1 30rem;
  margin-right: 1rem;
`;

const Manager = styled.div`
  color: grey;
  flex: 1 1 10rem;
  margin-right: 1rem;
`;

const ProjectTimeline = styled.div`
  color: grey;
  flex: 2 1 20rem;
  margin-right: 1rem;
`;

const SettingsButton = styled.div`
  color: grey;
`;

const ProjectListItem = ({ project }: { project: Project }) => {
  console.log('입력받은 project : ', project);
  const startDate = dayjs(project.startDate).format('YYYY.MM.DD');
  const endDate = dayjs(project.endDate).format('YYYY.MM.DD');
  console.log('startDate : ', startDate);
  console.log('endDate : ', endDate);
  return (
    <Card>
      <Checkbox type="checkbox" />
      <Title>{project.title}</Title>
      <Content>{project.description}</Content>
      <Progress>진행률 프로그레스바 컴포넌트 위치</Progress>
      <Manager>담당자 표시 컴포넌트 위치</Manager>
      <ProjectTimeline>
        {startDate} ~ {endDate}
      </ProjectTimeline>
      <SettingsButton>...</SettingsButton>
    </Card>
  );
};

export default ProjectListItem;
