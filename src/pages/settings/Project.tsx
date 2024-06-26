import styled from 'styled-components';
import SettingsProjectItem from '../../components/settings/SettingsProjectItem';

import search from '../../assets/search.svg';

const Header = styled.article`
  width: 302px;
  margin-bottom: 60px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  h1 {
    color: var(--main-black, #000);
    font-family: Pretendard;
    font-size: 40px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  p {
    color: var(--main-black, #000);
    font-family: Pretendard;
    font-size: 12px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

const Content = styled.section`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SearchContainer = styled.section`
  margin-bottom: 15px;
  display: flex;
  justify-content: flex-end;
`;

const SearchForm = styled.form`
  width: 50%;
  min-width: 388px;
  max-width: 680px;
  height: 40px;
  display: flex;
  align-items: center;
  position: relative;
`;

const SearchBar = styled.input`
  width: 100%;
  height: 40px;
  padding-left: 45px;
  background-color: #f5f6fa;
  border: none;
  border-radius: 4px;
`;

const SearchIcon = styled.img`
  position: absolute;
  left: 15px;
`;

const ProjectContainer = styled.section`
  width: 100%;
`;

const ProjectList = styled.ul`
  width: 900px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const ProjectItem = styled.li`
  height: 62px;
  border-bottom: 1px solid var(--main-black, #000);
  display: flex;
  h6,
  span {
    padding: 8px;
    color: var(--main-black, #000);
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%; /* 21px */
    letter-spacing: -0.266px;
    display: flex;
    align-items: center;
  }
  h6 {
    width: 208px;
  }
  span {
    width: 168px;
    &:last-child {
      width: 87px;
    }
  }
`;

const ProjectItemHeader = styled(ProjectItem)`
  height: 37px;
`;

const FakeProjectList = [
  {
    name: '프로젝트 1',
    owner: '김지용',
    role: '프로젝트 생성자',
    createdAt: '24.05.24',
  },
  {
    name: '프로젝트 2',
    owner: '김지용',
    role: '관리자',
    createdAt: '24.05.21',
  },
  {
    name: '프로젝트 3',
    owner: '김지용',
    role: '팀원',
    createdAt: '24.05.22',
  },
];

export default function ProjectSettings() {
  return (
    <>
      <Header>
        <h1>프로젝트</h1>
        <p>
          현재 내가 속해 있는 모든 프로젝트가 나오게 됩니다. 프로젝트 삭제 및
          탈퇴를 할 수 있습니다.
        </p>
      </Header>
      <Content>
        <SearchContainer>
          <SearchForm>
            <SearchIcon src={search} />
            <SearchBar type="text" placeholder="Search" />
            <input type="submit" hidden />
          </SearchForm>
        </SearchContainer>

        <ProjectContainer>
          <ProjectList>
            <ProjectItemHeader>
              <h6>프로젝트 명</h6>
              <h6>소유자</h6>
              <span>나의 역할</span>
              <span>생성일</span>
              <span>-</span>
            </ProjectItemHeader>

            {FakeProjectList.map((projectItem) => (
              <SettingsProjectItem key={projectItem.name} {...projectItem} />
            ))}
          </ProjectList>
        </ProjectContainer>
      </Content>
    </>
  );
}
