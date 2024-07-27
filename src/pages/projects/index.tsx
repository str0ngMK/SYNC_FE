/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

const ProejctFrame = styled.div`
  display: inline-flex;
  padding-bottom: 32px;
  flex-direction: column;
  align-items: center;
  gap: 32px;
`;

const ProjectUpperFrame = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  align-self: stretch;
`;

const ProjectLowerFrame = styled.section`
  height: 632px;
  flex-shrink: 0;
  align-self: stretch;
`;

const TabComponent = () => {
  const TabFrame = styled.div`
    display: flex;
    padding: 12px 40px 0px 40px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 12px;
    align-self: stretch;

    border-bottom: 1px solid var(--Black-White-Black-10, #f4f4f4);
  `;

  const ProjectDropDownFrame = styled.div`
    display: flex;
    height: 48px;
    padding: 8px 12px;
    align-items: center;
    gap: 12px;

    border-radius: 8px;
  `;

  const ProjectDropDown = styled.div`
    display: flex;
    height: 32px;
    align-items: center;
    gap: 12px;
  `;

  const ProjectDropDownText = styled.text`
    color: var(--Black-White-Black-100, #202020);

    /* Heading 4 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px; /* 131.25% */
  `;

  const ProjectDropDownicon = styled.svg`
    width: 24px;
    height: 24px;
  `;

  const ProjectDropDowniconSvg = () => (
    <ProjectDropDownicon
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="#636363"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </ProjectDropDownicon>
  );

  const Tab = styled.ul`
    display: flex;
    align-items: center;
    gap: 12px;
  `;

  const TabLi = styled.li<{
    isSelected: boolean;
  }>`
    display: flex;
    padding: 8px 24px;
    align-items: flex-start;
    gap: 8px;

    border-bottom: ${(props) =>
      props.isSelected
        ? '2px solid var(--Primary-Orange-Yellow-Orange, #ffd880)'
        : 'none'};
  `;

  const TabText = styled.text<{
    isSelected: boolean;
  }>`
    ${(props) =>
      props.isSelected
        ? 'color: var(--Black-White-Black-100, #202020);'
        : 'color: var(--Black-White-Black-35, #8f8f8f);'};

    /* Heading 5 */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px; /* 121.429% */
  `;

  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState<string>('/projects/board');

  const handleTabClick = (path: string) => {
    setSelectedTab(path);
    navigate(path);
  };

  return (
    <TabFrame>
      <ProjectDropDownFrame>
        <ProjectDropDown>
          <ProjectDropDownText>전체보기</ProjectDropDownText>
          <ProjectDropDowniconSvg />
        </ProjectDropDown>
      </ProjectDropDownFrame>
      <Tab>
        <TabLi
          isSelected={selectedTab === '/projects/board'}
          onClick={() => handleTabClick('/projects/board')}
        >
          <TabText isSelected={selectedTab === '/projects/board'}>보드</TabText>
        </TabLi>
        <TabLi
          isSelected={selectedTab === '/projects/list'}
          onClick={() => handleTabClick('/projects/list')}
        >
          <TabText isSelected={selectedTab === '/projects/list'}>
            리스트
          </TabText>
        </TabLi>
      </Tab>
    </TabFrame>
  );
};

const SubHeaderComponent = () => {
  // TODO 해당 컴포넌트 각 화면에서 그리는게 나을 것 같아 수정 필요
  const SubHeaderFrame = styled.div`
    display: flex;
    padding: 0px 40px;
    justify-content: space-between;
    align-items: flex-end;
    align-self: stretch;
  `;

  const SearchFrame = styled.div`
    display: flex;
    width: 222px;
    padding: 8px 12px;
    justify-content: space-between;
    align-items: center;

    border-radius: 8px;
    border: 1px solid var(--Black-White-Black-10, #f4f4f4);
    background: var(--Black-White-White, #fff);

    // &::placeholder {
    //   color: gray;
    //   opacity: 1;
    // }
  `;

  const SearchText = styled.text`
    color: #202224;
    text-align: center;

    /* Paragraph */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px; /* 142.857% */

    opacity: 0.5;
  `;

  const SearchButtonIcon = styled.svg`
    width: 18px;
    height: 18px;
    flex-shrink: 0;
  `;

  const SearchButtonIconSvg = () => (
    <SearchButtonIcon
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M15.75 15.75L11.2501 11.25M12.75 7.5C12.75 10.3995 10.3995 12.75 7.5 12.75C4.6005 12.75 2.25 10.3995 2.25 7.5C2.25 4.6005 4.6005 2.25 7.5 2.25C10.3995 2.25 12.75 4.6005 12.75 7.5Z"
        stroke="#636363"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </SearchButtonIcon>
  );

  const EtcFrame = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 12px;
  `;

  const AddProjectButton = styled.div`
    display: flex;
    height: 36px;
    padding: 8px 24px;
    justify-content: center;
    align-items: center;
    gap: 12px;

    border-radius: 8px;
    background: var(--Primary-Orange-Yellow-Orange, #ffd880);
  `;

  const Icon = styled.svg`
    width: 18px;
    height: 18px;
  `;

  const AddIconSvg = () => (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M9 3.75V14.25M3.75 9H14.25"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Icon>
  );

  const AddText = styled.text`
    color: var(--Black-White-Black-100, #202020);

    /* Heading 5 */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px; /* 121.429% */
  `;

  const FilterButton = styled.div`
    display: flex;
    height: 36px;
    padding: 8px 24px;
    justify-content: center;
    align-items: center;
    gap: 12px;

    border-radius: 8px;
    border: 1px solid var(--Black-White-Black-10, #f4f4f4);
    background: var(--Black-White-White, #fff);
  `;

  const FilterIconSvg = () => (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
    >
      <path
        d="M4.5 9H13.5M2.25 4.5H15.75M6.75 13.5H11.25"
        stroke="#636363"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Icon>
  );

  const FilterText = styled.text`
    color: var(--Black-White-Black-70, #636363);

    /* Heading 5 */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px; /* 121.429% */
  `;

  // TODO 버튼으로 쓸지 실제 input으로 쓸지 확인 필요

  return (
    <SubHeaderFrame>
      <SearchFrame>
        <SearchText>검색</SearchText>
        <SearchButtonIconSvg />
      </SearchFrame>
      <EtcFrame>
        <AddProjectButton>
          <AddIconSvg />
          <AddText>프로젝트 추가</AddText>
        </AddProjectButton>
        <FilterButton>
          <FilterIconSvg />
          <FilterText>필터</FilterText>
        </FilterButton>
      </EtcFrame>
    </SubHeaderFrame>
  );
};

const Project = () => {
  const navigate = useNavigate();
  return (
    <ProejctFrame>
      <ProjectUpperFrame>
        <TabComponent />
        <SubHeaderComponent />
      </ProjectUpperFrame>
      <ProjectLowerFrame>
        <Outlet />
      </ProjectLowerFrame>
    </ProejctFrame>
  );
};

export default Project;
