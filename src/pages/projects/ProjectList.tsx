import { useEffect, useState } from 'react';

import { ProjectListItem } from '@components/project';
import { Project } from '@customTypes/project';
import { getProjectList } from '@services/project';
import {
  ProjectListFrame,
  ProjectListHeader,
  ProjectListHeaderText,
} from '@styles/project';
import styled from 'styled-components';

const ProjectListHeaderFrame = styled.div`
  display: flex;
`;

const ProjectEmpty = () => {
  const ProjectListEmptyFrame = styled.div`
    height: 632px;
    flex-shrink: 0;
    align-self: stretch;
    display: flex;
    justify-content: center;
  `;

  const ProjectListEmptyInnerFrame = styled.div`
    display: flex;
    width: 458px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: -19px;
  `;

  const ProjectListEmptyImageFrame = styled.div`
    width: 400px;
    height: 266px;
  `;

  const ProjectListEmptyInfoFrame = styled.div`
    display: flex;
    width: 340px;
    flex-direction: column;
    align-items: center;
    gap: 24px;
  `;

  const ProjectListEmptyTextFrame = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    align-self: stretch;
  `;

  const ProjectListEmptyText1 = styled.text`
    align-self: stretch;

    color: var(--Black-White-Black-100, #202020);
    text-align: center;

    /* Heading 3 */
    font-family: Pretendard;
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 31px; /* 140.909% */
  `;

  const ProjectListEmptyText2 = styled.text`
    align-self: stretch;

    color: var(--Black-White-Black-70, #636363);

    /* Heading 5 */
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 17px; /* 121.429% */
  `;

  const EmptyIcon = styled.svg`
    width: 400px;
    height: 266px;
  `;

  const EmptyIconSvg = () => (
    <EmptyIcon
      width="400"
      height="267"
      viewBox="0 0 400 267"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_2439_148414)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M120.734 191.731C112.808 191.731 116.516 179.195 126.557 182.189C127.113 164.783 155.556 152.047 167.318 175.524C170.643 172.899 178.11 177.857 176.456 182.189C180.15 182.503 183.056 182.929 185.317 183.493C190.537 184.797 189.504 191.672 184.123 191.624L120.734 191.731ZM76.359 157.874C68.8648 157.874 72.3715 146.019 81.8661 148.851C82.3915 132.391 109.288 120.348 120.41 142.548C123.554 140.066 130.615 144.755 129.051 148.851C132.544 149.148 135.292 149.551 137.43 150.085C142.367 151.317 141.389 157.818 136.301 157.773L76.359 157.874ZM103.688 191.339H70.1132C67.1115 191.339 65.8186 187.453 68.2746 185.731C68.3088 185.706 68.3439 185.681 68.3786 185.657C71.8764 183.254 76.4666 183.473 76.4666 183.473C76.4666 183.473 77.1217 170.471 89.4715 170.471C100.637 170.471 105.089 181.426 106.695 187.461C107.217 189.422 105.718 191.339 103.688 191.339ZM300.479 192.013H276.868C274.757 192.013 273.848 189.281 275.575 188.07C275.6 188.052 275.624 188.035 275.648 188.018C278.108 186.328 281.336 186.482 281.336 186.482C281.336 186.482 281.797 177.339 290.482 177.339C298.334 177.339 301.465 185.042 302.595 189.287C302.961 190.666 301.907 192.013 300.479 192.013ZM207.364 191.572H247.825C251.1 191.572 252.513 187.436 249.831 185.602C249.794 185.576 249.756 185.55 249.718 185.524C245.901 182.966 240.891 183.198 240.891 183.198C240.891 183.198 240.175 169.359 226.696 169.359C220.032 169.359 214.647 180.466 214.647 180.466C214.647 180.466 205.582 180.466 204.082 187.444C203.628 189.558 205.148 191.572 207.364 191.572Z"
          fill="white"
          stroke="#FFD880"
          strokeWidth="1.77778"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M324.288 171.872H234.588C226.168 171.872 226.554 164.92 229.305 162.498C232.124 160.015 237.694 161.022 237.694 161.022C237.694 161.022 239.352 156.346 244.81 154.07C249.638 152.056 254.696 153.014 254.696 153.014C254.696 153.014 254.696 149.805 257.787 147.148C260.879 144.489 265.001 144.748 265.001 144.748C265.001 144.748 267.834 127.053 286.769 127.053C305.704 127.053 307.894 143.715 307.894 143.715C307.894 143.715 312.144 143.715 315.236 146.556C318.327 149.398 318.714 152.626 318.714 152.626C318.714 152.626 329.052 151.23 332.11 160.172C333.932 165.503 330.188 171.872 324.288 171.872Z"
          fill="white"
          stroke="#FFD880"
          strokeWidth="1.77778"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M161.258 103.884C144.252 106.2 131.109 120.59 131.109 138.186C131.109 157.389 146.72 172.961 165.971 172.961H242.668C258.069 172.961 270.557 160.505 270.557 145.141C270.557 129.778 258.069 117.321 242.668 117.321C242.668 94.273 223.94 75.5918 200.833 75.5918C182.447 75.5918 166.871 87.4359 161.258 103.884Z"
          fill="#FFD880"
        />
        <path
          d="M217.569 131.23H184.102M200.835 147.923V114.539"
          stroke="white"
          strokeWidth="9.61111"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M276.778 212.921C282.917 214.372 289.409 209.179 289.409 209.179C289.409 209.179 285.945 201.638 279.804 200.192C273.666 198.741 267.176 203.929 267.176 203.929C267.176 203.929 270.64 211.471 276.778 212.921Z"
          fill="url(#paint0_linear_2439_148414)"
        />
        <path
          d="M300.993 77.7634C291.657 84.178 277.395 79.6941 277.395 79.6941C277.395 79.6941 278.278 64.8123 287.62 58.4039C296.955 51.9898 311.212 56.4675 311.212 56.4675C311.212 56.4675 310.329 71.3493 300.993 77.7634Z"
          fill="url(#paint1_linear_2439_148414)"
        />
        <path
          d="M91.0001 76.1564C96.5765 81.8177 107.004 80.6238 107.004 80.6238C107.004 80.6238 108.384 70.2512 102.803 64.5929C97.2263 58.9315 86.8036 60.1219 86.8036 60.1219C86.8036 60.1219 85.4236 70.4946 91.0001 76.1564Z"
          fill="url(#paint2_linear_2439_148414)"
        />
        <path
          d="M62.1231 170.69C64.7692 170.69 66.9143 172.829 66.9143 175.469C66.9143 178.108 64.7692 180.248 62.1231 180.248C59.4771 180.248 57.332 178.108 57.332 175.469C57.332 172.829 59.4771 170.69 62.1231 170.69Z"
          fill="#FFD880"
        />
        <path
          d="M238.25 205.608C241.18 205.608 243.555 207.859 243.555 210.635C243.555 213.411 241.18 215.662 238.25 215.662C235.32 215.662 232.945 213.411 232.945 210.635C232.945 207.859 235.32 205.608 238.25 205.608Z"
          fill="#FFD880"
        />
        <path
          d="M67.5629 124.834C71.3557 124.834 74.4304 121.767 74.4304 117.983C74.4304 114.2 71.3557 111.133 67.5629 111.133C63.77 111.133 60.6953 114.2 60.6953 117.983C60.6953 121.767 63.77 124.834 67.5629 124.834Z"
          fill="#FFD880"
        />
        <path
          d="M183.556 215.086C186.193 215.086 188.331 213.072 188.331 210.588C188.331 208.104 186.193 206.09 183.556 206.09C180.919 206.09 178.781 208.104 178.781 210.588C178.781 213.072 180.919 215.086 183.556 215.086Z"
          fill="#FFD880"
        />
        <path
          d="M349.946 202.494C352.063 202.494 353.779 200.783 353.779 198.671C353.779 196.559 352.063 194.848 349.946 194.848C347.829 194.848 346.113 196.559 346.113 198.671C346.113 200.783 347.829 202.494 349.946 202.494Z"
          fill="#FFD880"
        />
        <path
          d="M151.711 222.106C152.976 222.106 154.001 221.084 154.001 219.823C154.001 218.561 152.976 217.539 151.711 217.539C150.447 217.539 149.422 218.561 149.422 219.823C149.422 221.084 150.447 222.106 151.711 222.106Z"
          fill="#FFD880"
        />
        <path
          d="M170.942 60.5378C172.748 60.5378 174.212 59.0773 174.212 57.2757C174.212 55.4741 172.748 54.0137 170.942 54.0137C169.136 54.0137 167.672 55.4741 167.672 57.2757C167.672 59.0773 169.136 60.5378 170.942 60.5378Z"
          fill="#FFD880"
        />
        <path
          d="M302.597 214.906C302.14 216.606 303.152 218.354 304.857 218.809C306.562 219.265 308.314 218.256 308.771 216.556C309.227 214.855 308.216 213.107 306.511 212.652C304.806 212.196 303.054 213.205 302.597 214.906Z"
          fill="#FFD880"
        />
        <path
          d="M314.103 114.389C316.45 114.389 318.354 112.491 318.354 110.149C318.354 107.807 316.45 105.908 314.103 105.908C311.755 105.908 309.852 107.807 309.852 110.149C309.852 112.491 311.755 114.389 314.103 114.389Z"
          fill="#FFD880"
        />
        <path
          d="M49.8913 154.758C51.6974 154.758 53.1615 153.59 53.1615 152.149C53.1615 150.707 51.6974 149.539 49.8913 149.539C48.0852 149.539 46.6211 150.707 46.6211 152.149C46.6211 153.59 48.0852 154.758 49.8913 154.758Z"
          fill="#FFD880"
        />
        <path
          d="M78.6667 205.435C78.6667 208.271 80.9712 210.569 83.8138 210.569C86.6565 210.569 88.9609 208.271 88.9609 205.435C88.9609 202.599 86.6565 200.301 83.8138 200.301C80.9712 200.301 78.6667 202.599 78.6667 205.435Z"
          fill="#FFD880"
        />
        <path
          d="M100.961 108.722H100.876C100.369 115.882 95.0312 115.992 95.0312 115.992C95.0312 115.992 100.918 116.107 100.918 124.38C100.918 116.107 106.804 115.992 106.804 115.992C106.804 115.992 101.468 115.882 100.961 108.722ZM247.733 51.1582H247.649C247.155 58.4426 241.941 58.5543 241.941 58.5543C241.941 58.5543 247.69 58.6714 247.69 67.0881C247.69 58.6714 253.439 58.5543 253.439 58.5543C253.439 58.5543 248.228 58.4426 247.733 51.1582ZM346.055 149.234H345.971C345.477 156.519 340.263 156.631 340.263 156.631C340.263 156.631 346.012 156.747 346.012 165.164C346.012 156.747 351.761 156.631 351.761 156.631C351.761 156.631 346.549 156.519 346.055 149.234ZM152.572 76.8822H152.489C151.994 84.1666 146.78 84.2788 146.78 84.2788C146.78 84.2788 152.529 84.3953 152.529 92.812C152.529 84.3953 158.278 84.2788 158.278 84.2788C158.278 84.2788 153.067 84.1666 152.572 76.8822ZM270.565 105.827H270.503C270.133 111.27 266.237 111.354 266.237 111.354C266.237 111.354 270.533 111.441 270.533 117.73C270.533 111.441 274.829 111.354 274.829 111.354C274.829 111.354 270.935 111.27 270.565 105.827Z"
          fill="#FFD880"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2439_148414"
          x1="299.894"
          y1="216.528"
          x2="246.209"
          y2="191.102"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#FFD880" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_2439_148414"
          x1="264.627"
          y1="98.8098"
          x2="337.921"
          y2="21.3283"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#FFD880" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_2439_148414"
          x1="113.249"
          y1="95.4946"
          x2="73.078"
          y2="32.3645"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="1" stopColor="#FFD880" />
        </linearGradient>
        <clipPath id="clip0_2439_148414">
          <rect
            width="400"
            height="266"
            fill="white"
            transform="translate(0 0.667969)"
          />
        </clipPath>
      </defs>
    </EmptyIcon>
  );

  const ProjectAddButtonComponent = () => {
    const ProjectAddButton = styled.div`
      display: flex;
      width: 160px;
      height: 36px;
      padding: 8px 24px;
      justify-content: center;
      align-items: center;
      gap: 12px;

      border-radius: 8px;
      background: var(--Primary-Orange-Yellow-Orange, #ffd880);
    `;

    const AddIcon = styled.svg`
      width: 18px;
      height: 18px;
      flex-shrink: 0;
    `;

    const AddIconSvg = () => (
      <AddIcon
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="19"
        viewBox="0 0 18 19"
        fill="none"
      >
        <path
          d="M9 4.41797V14.918M3.75 9.66797H14.25"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </AddIcon>
    );

    const AddButtonText = styled.text`
      color: var(--Black-White-Black-100, #202020);

      /* Heading 5 */
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 17px; /* 121.429% */
    `;

    return (
      <ProjectAddButton>
        <AddIconSvg />
        <AddButtonText>프로젝트 추가</AddButtonText>
      </ProjectAddButton>
    );
  };
  return (
    <ProjectListEmptyFrame>
      <ProjectListEmptyInnerFrame>
        <ProjectListEmptyImageFrame>
          <EmptyIconSvg />
        </ProjectListEmptyImageFrame>
        <ProjectListEmptyInfoFrame>
          <ProjectListEmptyTextFrame>
            <ProjectListEmptyText1>프로젝트가 없습니다</ProjectListEmptyText1>
            <ProjectListEmptyText2>
              새로운 프로젝트를 만들어 팀과 함께 프로젝트를 관리해보세요
            </ProjectListEmptyText2>
          </ProjectListEmptyTextFrame>
          <ProjectAddButtonComponent />
        </ProjectListEmptyInfoFrame>
      </ProjectListEmptyInnerFrame>
    </ProjectListEmptyFrame>
  );
};

const ProjectList = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [projectList, setProjectList] = useState<Project[] | null>(null);

  useEffect(() => {
    getProjectList().then((data) => {
      console.log('getProjectList : ', data);
      if (data) setProjectList(data);
    });
  }, []);

  return (
    <>
      {projectList === null ? (
        <ProjectEmpty />
      ) : (
        <ProjectListFrame>
          <ProjectListHeaderFrame>
            <ProjectListHeader style={{ width: '300px' }}>
              <ProjectListHeaderText>프로젝트명</ProjectListHeaderText>
            </ProjectListHeader>
            <ProjectListHeader style={{ width: '380px' }}>
              <ProjectListHeaderText>설명</ProjectListHeaderText>
            </ProjectListHeader>
            <ProjectListHeader style={{ width: '311px' }}>
              <ProjectListHeaderText>진행률</ProjectListHeaderText>
            </ProjectListHeader>
            <ProjectListHeader style={{ width: '170px' }}>
              <ProjectListHeaderText>담당자</ProjectListHeaderText>
            </ProjectListHeader>
            <ProjectListHeader style={{ width: '212px' }}>
              <ProjectListHeaderText>남은 기간</ProjectListHeaderText>
            </ProjectListHeader>
            <ProjectListHeader style={{ width: '56px' }} />
          </ProjectListHeaderFrame>
          <main>
            {projectList?.map((project) => (
              <ProjectListItem key={project.projectId} project={project} />
            ))}
          </main>
        </ProjectListFrame>
      )}
    </>
  );
};

export default ProjectList;
