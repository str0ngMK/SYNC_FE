import { Route, Routes } from 'react-router-dom';

import Project from '@pages/projects';
import ProjectBoards from '@pages/projects/ProjectBoards';
import ProjectList from '@pages/projects/ProjectList';

const ProjectRoute = () => (
  <Routes>
    <Route path="/" element={<Project />}>
      <Route index element={<ProjectBoards />} />
      <Route path="board" element={<ProjectBoards />} />
      <Route path="list" element={<ProjectList />} />
    </Route>
  </Routes>
);
export default ProjectRoute;
