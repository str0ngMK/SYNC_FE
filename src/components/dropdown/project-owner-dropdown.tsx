import styled from 'styled-components';

const Wrapper = styled.section<{ $isActive: boolean }>`
  width: 490px;
  background: #fff;
  border: 1px solid var(--input-stroke, #d2dbe2);
  border-radius: 8px;
  display: ${(props) => (props.$isActive ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  left: 0;
  bottom: -304px;
  z-index: 70;
`;

const MemberList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 70;
`;

const MemberItem = styled.li`
  padding: 16px;
  border-bottom: 1px solid var(--input-stroke, #d2dbe2);
  display: flex;
  align-items: center;
  gap: 8px;
  &:last-child {
    border-bottom: none;
  }
  div {
    width: 44px;
    height: 44px;
    border-radius: 4px;
  }
  span {
    color: #a6b3be;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 12px;
  }
`;

interface ProjectOwnerDropdownProps {
  isActive: boolean;
  closeDropdown: () => void;
}

export default function ProjectOwnerDropdown({
  isActive,
  closeDropdown,
}: ProjectOwnerDropdownProps) {
  return (
    <Wrapper $isActive={isActive}>
      <MemberList>
        <MemberItem>
          <div></div>
          <span>강민경</span>
        </MemberItem>
        <MemberItem>
          <div style={{ background: '#9A888A' }}></div>
          <span>박승주</span>
        </MemberItem>
        <MemberItem>
          <div style={{ background: '#9C17210' }}></div>
          <span>이현웅</span>
        </MemberItem>
        <MemberItem>
          <div style={{ background: '#4F4F4F' }}></div>
          <span>최홍혁</span>
        </MemberItem>
      </MemberList>
    </Wrapper>
  );
}
