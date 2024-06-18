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
  left: -240px;
  bottom: -50px;
  z-index: 50;
`;

const SettingsItem = styled.li`
  width: 100%;
  padding: 16px;
  border-bottom: 1px solid #b8b8b8;
  color: var(--main-black, #000);
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  flex-direction: column;
`;

export default function SettingsMember({ isOpen }: { isOpen: boolean }) {
  return (
    <Wrapper $isOpen={isOpen}>
      <SettingsItem>멤버 내보내기</SettingsItem>
    </Wrapper>
  );
}
