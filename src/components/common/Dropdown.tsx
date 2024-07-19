import React from 'react';

import styled from 'styled-components';

const ClickEventContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const DropdownWrapper = styled.section<{
  $isActive: boolean;
  $left: string;
  $bottom: string;
}>`
  width: 320px;
  background: #fff;
  border: 1px solid #b8b8b8;
  border-radius: 8px;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.3);
  display: ${(props) => (props.$isActive ? 'flex' : 'none')};
  flex-direction: column;
  position: absolute;
  left: ${(props) => props.$left};
  bottom: ${(props) => props.$bottom};
  z-index: 50;
  cursor: pointer;
`;

export interface DropdownProps {
  children: React.ReactNode;
  isOpen: boolean;
  toggleDropdown: () => void;
  dropdownRef: React.RefObject<HTMLTableSectionElement>;
  left: string;
  bottom: string;
  dropdownActivator: string;
}

export default function Dropdown({
  children,
  isOpen,
  toggleDropdown,
  dropdownRef,
  left,
  bottom,
}: DropdownProps) {
  return (
    <ClickEventContainer ref={dropdownRef}>
      <button onClick={toggleDropdown}>더보기</button>
      <DropdownWrapper $isActive={isOpen} $left={left} $bottom={bottom}>
        {children}
      </DropdownWrapper>
    </ClickEventContainer>
  );
}
