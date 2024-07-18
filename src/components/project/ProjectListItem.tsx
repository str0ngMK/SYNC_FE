import { Project } from '@customTypes/project';

const ProjectListItem = ({ project }: { project: Project }) => {
  console.log('입력받은 project : ', project);
  return (
    <>
      <li key={project.projectId}>
        <h2>{project.title}</h2>
        <p>설명</p>
        <p>{project.description}</p>
        {/* <p>{project.startDate}</p>
        <p>{project.endDate}</p> */}
        <ul>
          {/* {project.memberIds.map((memberId) => (
            <MemberProfile key={project.projectId} memberId={memberId} />
          ))} */}
        </ul>
      </li>
    </>
  );
};

export default ProjectListItem;
