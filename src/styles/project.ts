import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Card = styled.header`
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

export const Checkbox = styled.input`
  margin-right: 1.5rem;
`;

export const Title = styled.div`
  font-weight: bold;
  flex: 3 1 30rem;
  overflow: hidden;
  // text-overflow: ellipsis;
  // white-space: nowrap;
`;

export const Content = styled.div`
  flex: 3 1 30rem;
  overflow: hidden;
  margin-right: 1rem;
  // text-overflow: ellipsis;
  // white-space: nowrap;
`;

export const Progress = styled.div`
  color: grey;
  flex: 3 1 30rem;
  margin-right: 1rem;
`;

export const Manager = styled.div`
  color: grey;
  flex: 1 1 10rem;
  margin-right: 1rem;
`;

export const ProjectTimeline = styled.div`
  color: grey;
  flex: 2 1 20rem;
  margin-right: 1rem;
`;

export const SettingsButton = styled.div`
  color: grey;
`;
