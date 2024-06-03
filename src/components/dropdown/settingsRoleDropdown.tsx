import styled from 'styled-components';

const Wrapper = styled.ul<{ $isActive: boolean }>`
  width: 320px;
  background: #fff;
  border: 1px solid #b8b8b8;
  border-radius: 8px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.$isActive ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  left: -240px;
  bottom: -230px;
  z-index: 50;
`;

const SettingsItem = styled.li`
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid #b8b8b8;
  display: flex;
  flex-direction: column;
  gap: 4px;
  p {
    width: 100%;
    padding: 0;
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

export default function SettingsRole({ isActive }: { isActive: boolean }) {
  return (
    <Wrapper $isActive={isActive}>
      <SettingsItem>
        <p>프로젝트 소유자</p>
        <p>프로젝트 소유자로 임명합니다.</p>
      </SettingsItem>
      <SettingsItem>
        <p>관리자</p>
        <p>
          관리자는 새로운 멤버를 초대할 수 있습니다. <br />
          프로젝트의 관리 권한이 부여됩니다.
        </p>
      </SettingsItem>
      <SettingsItem>
        <p>팀원</p>
        <p>멤버는 새로운 멤버를 추가 할 수 없습니다.</p>
      </SettingsItem>
    </Wrapper>
  );
}
