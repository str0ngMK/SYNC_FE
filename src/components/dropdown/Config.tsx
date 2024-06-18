import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.ul<{ $isOpen: boolean }>`
  width: 320px;
  background: #fff;
  border: 1px solid #b8b8b8;
  border-radius: 8px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.$isOpen ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  left: -280px;
  bottom: -320px;
  z-index: 50;
`;

const ConfigItem = styled.li`
  padding: 16px;
  border-bottom: 1px solid #b8b8b8;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 4px;
  h2 {
    color: var(--main-black, #000);
    font-family: Pretendard;
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  p {
    &:first-child {
      color: var(--main-black, #000);
      font-family: Pretendard;
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
    &:last-child {
      color: #ababab;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;

export default function ConfigDropDown({ isOpen }: { isOpen: boolean }) {
  return (
    <>
      <Wrapper $isOpen={isOpen}>
        <ConfigItem>
          <h2>설정</h2>
        </ConfigItem>
        <Link to="/settings/project">
          <ConfigItem>
            <p>프로젝트 설정</p>
            <p>전체 프로젝트를 한번에 관리 할 수 있습니다.</p>
          </ConfigItem>
        </Link>

        <Link to="/settings/members">
          <ConfigItem>
            <p>주소록</p>
            <p>멤버를 초대 및 관리할 수 있습니다.</p>
          </ConfigItem>
        </Link>

        <Link to="/settings/alarm">
          <ConfigItem>
            <p>알람 설정</p>
            <p>알람이 오는 것을 제한하거나 설정할 수 있습니다.</p>
          </ConfigItem>
        </Link>
      </Wrapper>
    </>
  );
}
