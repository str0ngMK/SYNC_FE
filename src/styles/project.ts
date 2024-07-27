import styled from 'styled-components';

export const ProjectListFrame = styled.div`
  display: flex;
  height: 734px;
  padding: 20px;
  align-items: flex-start;
  align-self: stretch;
  border-radius: 12px;
  border: 1px solid var(--Black-White-Black-10, #f4f4f4);
  background: var(--Black-White-White, #fff);
  flex-direction: column;
  overflow-x: auto;
`;

export const ProjectListHeader = styled.header`
  display: flex;
  height: 40px;
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  border-bottom: 1px solid var(--Black-White-Black-10, #f4f4f4);
  background: #fff;
`;

export const ProjectListHeaderText = styled.div`
  color: var(--Black-White-Black-20, #bfbfbf);

  /* Heading 5 */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 17px; /* 121.429% */
`;

export const ProjectListItemFrame = styled.div`
  display: flex;
  height: 64px;
  padding: 12px 16px;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  border-bottom: 1px solid var(--Black-White-Black-10, #f4f4f4);
  background: #fff;
`;
