/* eslint-disable @typescript-eslint/no-unused-vars */
import { Project } from '@customTypes/project';
import dayjs from 'dayjs';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
`;

const Title = styled.div`
  display: flex;
  height: 64px;
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-bottom: 1px solid var(--Black-White-Black-10, #f4f4f4);
  background: #fff;
  width: 300px;
`;

const ProjectImage = styled.div<{
  $imageUrl: string;
}>`
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: url(${(props) => props.$imageUrl}) lightgray 50% / cover no-repeat;
`;

const TitleFrame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 2px;
  flex: 1 0 0;
  width: 224px;
  height: 37px;
`;

const ProjectTitleText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: var(--Black-White-Black-100, #202020);
  text-overflow: ellipsis;

  /* Heading 4 */
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 21px; /* 131.25% */
`;

const ProjectSubTitleText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;

  overflow: hidden;
  color: var(--Black-White-Black-35, #8f8f8f);
  text-overflow: ellipsis;

  /* Small Text_B */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px; /* 116.667% */
`;

const DescriptionFrame = styled.div`
  display: flex;
  height: 64px;
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  border-bottom: 1px solid var(--Black-White-Black-10, #f4f4f4);
  background: #fff;
  width: 380px;
`;

const DescriptionText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
  color: var(--Black-White-Black-100, #202020);
  text-overflow: ellipsis;

  /* Paragraph */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px; /* 142.857% */
`;

const ProgressFrame = styled.div`
  display: flex;
  height: 64px;
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  border-bottom: 1px solid var(--Black-White-Black-10, #f4f4f4);
  background: #fff;
  width: 311px;
`;

const BarGraph = styled.div`
  display: flex;
  width: 279px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

const BarGraphFrame1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`;

const IndexFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const CheckIcon = styled.svg`
  width: 12px;
  height: 12px;
`;

const Icon = () => (
  <CheckIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 12" fill="none">
    <g clipPath="url(#clip0_2441_8799)">
      <path
        d="M4.5 5.5L6 7L11 2M8 1.5H3.9C3.05992 1.5 2.63988 1.5 2.31901 1.66349C2.03677 1.8073 1.8073 2.03677 1.66349 2.31901C1.5 2.63988 1.5 3.05992 1.5 3.9V8.1C1.5 8.94008 1.5 9.36012 1.66349 9.68099C1.8073 9.96323 2.03677 10.1927 2.31901 10.3365C2.63988 10.5 3.05992 10.5 3.9 10.5H8.1C8.94008 10.5 9.36012 10.5 9.68099 10.3365C9.96323 10.1927 10.1927 9.96323 10.3365 9.68099C10.5 9.36012 10.5 8.94008 10.5 8.1V6"
        stroke="#BFBFBF"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2441_8799">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </CheckIcon>
);

const CheckText = styled.div`
  color: var(--Black-White-Black-20, #bfbfbf);
  text-align: center;

  /* Small Text_B */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px; /* 116.667% */
`;

const PercentText = styled.div`
  color: var(--Black-White-Black-100, #202020);
  text-align: center;

  /* Small Text_B */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px; /* 116.667% */
`;

const BarGraphFrame2 = styled.div`
  display: flex;
  height: 12px;
  padding-right: 161px;
  align-items: center;
  align-self: stretch;

  border-radius: 2px;
  background: var(--Black-White-Black-10, #f4f4f4);
`;

const ProgressGraph = styled.div`
  width: 118px;
  align-self: stretch;
  border-radius: 2px;
  background: var(--Primary-Orange-Yellow-Orange, #ffd880);
`;

const ManagerFrame = styled.div`
  display: flex;
  height: 64px;
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  border-bottom: 1px solid var(--Black-White-Black-10, #f4f4f4);
  background: #fff;

  width: 170px;
`;

const ManagerIconFrame = styled.div`
  display: flex;
  align-items: flex-start;
  // gap: -2px;
  width: 106px;
  height: 28px;
`;

const ManagerIcon = styled.div<{ $iconColor: string }>`
  display: flex;
  width: 28px;
  height: 28px;
  padding: 5px 1px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 100px;
  border: 2px solid var(--Black-White-White, #fff);
  background: var(${(props) => props.$iconColor});

  margin-right: -4px;
`;

const ManagerName = styled.div<{ $nameColor: string }>`
  color: var(${(props) => props.$nameColor});
  text-align: center;

  /* Small Text_B */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px; /* 116.667% */
`;

const TimeFrame = styled.div`
  display: flex;
  width: 212px;
  height: 64px;
  padding: 12px 16px;
  align-items: center;
  gap: 8px;

  border-bottom: 1px solid var(--Black-White-Black-10, #f4f4f4);
  background: #fff;

  width: 212px;
`;

const CalendarFrame = styled.div`
  display: flex;
  padding: 4px 8px;
  align-items: center;
  gap: 4px;

  border-radius: 4px;
  background: var(--Black-White-Black-10, #f4f4f4);
`;

const CalendarIcon = styled.svg`
  width: 12px;
  height: 12px;
`;

const CalendarIconSvg = () => (
  <CalendarIcon
    xmlns="http://www.w3.org/2000/svg"
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
  >
    <g clip-path="url(#clip0_2452_6821)">
      <path
        d="M10.5 5H1.5M8 1V3M4 1V3M3.9 11H8.1C8.94008 11 9.36012 11 9.68099 10.8365C9.96323 10.6927 10.1927 10.4632 10.3365 10.181C10.5 9.86012 10.5 9.44008 10.5 8.6V4.4C10.5 3.55992 10.5 3.13988 10.3365 2.81901C10.1927 2.53677 9.96323 2.3073 9.68099 2.16349C9.36012 2 8.94008 2 8.1 2H3.9C3.05992 2 2.63988 2 2.31901 2.16349C2.03677 2.3073 1.8073 2.53677 1.66349 2.81901C1.5 3.13988 1.5 3.55992 1.5 4.4V8.6C1.5 9.44008 1.5 9.86012 1.66349 10.181C1.8073 10.4632 2.03677 10.6927 2.31901 10.8365C2.63988 11 3.05992 11 3.9 11Z"
        stroke="#8F8F8F"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_2452_6821">
        <rect width="12" height="12" fill="white" />
      </clipPath>
    </defs>
  </CalendarIcon>
);

const CalendarText = styled.div`
  color: var(--Black-White-Black-35, #8f8f8f);
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const EtcFrame = styled.div`
  display: flex;
  width: 56px;
  height: 64px;
  padding: 12px 16px;
  align-items: center;
  gap: 8px;

  border-bottom: 1px solid var(--Black-White-Black-10, #f4f4f4);
  background: var(--Black-White-White, #fff);
`;

const EtcIcon = styled.svg`
  width: 24px;
  height: 24px;
  flex-shrink: 0;
`;

const EtcIconSvg = () => (
  <EtcIcon
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M12 13C12.5523 13 13 12.5523 13 12C13 11.4477 12.5523 11 12 11C11.4477 11 11 11.4477 11 12C11 12.5523 11.4477 13 12 13Z"
      stroke="#BFBFBF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11C18.4477 11 18 11.4477 18 12C18 12.5523 18.4477 13 19 13Z"
      stroke="#BFBFBF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M5 13C5.55228 13 6 12.5523 6 12C6 11.4477 5.55228 11 5 11C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13Z"
      stroke="#BFBFBF"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </EtcIcon>
);

const ProjectListItem = ({ project }: { project: Project }) => {
  const startDate = dayjs(project.startDate).format('YYYY.MM.DD');
  const endDate = dayjs(project.endDate).format('YYYY.MM.DD');
  return (
    <Card>
      <Title>
        <ProjectImage $imageUrl="" />
        <TitleFrame>
          <ProjectTitleText>{project.title || 'title'}</ProjectTitleText>
          <ProjectSubTitleText>
            {project.subTitle || 'subTitle'}
          </ProjectSubTitleText>
        </TitleFrame>
      </Title>
      <DescriptionFrame>
        <DescriptionText>{project.description}</DescriptionText>
      </DescriptionFrame>
      <ProgressFrame>
        <BarGraph>
          <BarGraphFrame1>
            <IndexFrame>
              <CheckIcon>
                <Icon />
              </CheckIcon>
              <CheckText>12/24</CheckText>
            </IndexFrame>
            <PercentText>50%</PercentText>
          </BarGraphFrame1>
          <BarGraphFrame2>
            <ProgressGraph></ProgressGraph>
          </BarGraphFrame2>
        </BarGraph>
      </ProgressFrame>
      <ManagerFrame>
        <ManagerIconFrame>
          <ManagerIcon $iconColor="--Alert-Color-Light-Blue, #e7f1ff">
            <ManagerName $nameColor="--Alert-Color-Positive-Blue, #407bd2">
              이름
            </ManagerName>
          </ManagerIcon>
          <ManagerIcon $iconColor="--Alert-Color-Light-Orange, #FFEFE4">
            <ManagerName $nameColor="--Alert-Color-Orange, #FF8845">
              이름
            </ManagerName>
          </ManagerIcon>
          <ManagerIcon $iconColor="--Alert-Color-Light-Green, #E7FFEB">
            <ManagerName $nameColor="--Alert-Color-Green, #23B531">
              이름
            </ManagerName>
          </ManagerIcon>
          <ManagerIcon $iconColor="--Black-White-Black-10, #F4F4F4">
            <ManagerName $nameColor="--Black-White-Black-100, #202020">
              +99
            </ManagerName>
          </ManagerIcon>
        </ManagerIconFrame>
      </ManagerFrame>
      <TimeFrame>
        <CalendarFrame>
          <CalendarIconSvg></CalendarIconSvg>
          <CalendarText>99:99 ~ 99:99</CalendarText>
        </CalendarFrame>
      </TimeFrame>
      <EtcFrame>
        <EtcIconSvg></EtcIconSvg>
      </EtcFrame>
    </Card>
  );
};

export default ProjectListItem;
