import styled from 'styled-components';

const CalendarDropdownWrapper = styled.section<{ $isopen: boolean }>`
  width: 386px;
  height: 300px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.05);
  display: ${(props) => (props.$isopen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface CalendarDropdownProps {
  isOpen: boolean;
}

const CalendarDropdown = ({ isOpen }: CalendarDropdownProps) => (
  <CalendarDropdownWrapper $isopen={isOpen}>
    <h1>달력</h1>
  </CalendarDropdownWrapper>
);

export default CalendarDropdown;
