import { Project } from '@customTypes/project';
import styled from 'styled-components';

const Card = styled.header`
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  padding: 1rem;
  border: 0.1rem solid black;
  box-sizing: border-box;
  margin-bottom: -0.1rem;
  height: 3rem;
`;

const Title = styled.div`
  flex-grow: 2;
  font-size: 1.2rem;
  font-weight: bold;
  min-width: 10rem;
`;

const Content = styled.div`
  flex-grow: 10;
  font-size: 1rem;
`;

const Checkbox = styled.input`
  margin-right: 1.5rem;
`;

const ProjectListItem = ({ project }: { project: Project }) => {
  console.log('입력받은 project : ', project);
  return (
    <Card>
      <Checkbox type="checkbox" />
      <Title>{project.title}</Title>
      <Content>{project.description}</Content>
    </Card>
  );
};

export default ProjectListItem;
