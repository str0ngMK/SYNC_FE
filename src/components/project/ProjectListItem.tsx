import { Project } from '@customTypes/project';
import {
  Card,
  Checkbox,
  Content,
  Manager,
  Progress,
  ProjectTimeline,
  SettingsButton,
  Title,
} from '@styles/project';
import dayjs from 'dayjs';

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
      <SettingsButton>···</SettingsButton>
    </Card>
  );
};

export default ProjectListItem;
