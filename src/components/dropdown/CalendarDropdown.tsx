import React from 'react';

import useCalendar from '@hooks/useCalendar';
import styled from 'styled-components';

const CalendarDropdownWrapper = styled.section<{ $isopen: boolean }>`
  width: 386px;
  padding: 12px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.05);
  display: ${(props) => (props.$isopen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const CalendarDropdownHeader = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2 {
    color: var(--Black-White-Black-100, #202020);
    /* Heading 4 */
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 21px; /* 131.25% */
  }
`;

const CalendarDropdownContent = styled.section`
  width: 100%;
  padding: 4px 12px;
`;

const CalendarDateList = styled.ul`
  display: grid;
  grid-template-columns: repeat(7, 38px);
  column-gap: 12px;
  row-gap: 4px;
  li {
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const CalendarDayItem = styled.li`
  color: var(--Black-White-Black-100, #202020);
  text-align: center;
  /* Small Text_B */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 14px; /* 116.667% */
`;

const CalendarDateItem = styled.li<{
  $iscurrentmonth: boolean;
  $iscurrentdate: boolean;
}>`
  background-color: ${(props) =>
    props.$iscurrentdate && props.$iscurrentmonth
      ? 'var(--Primary-Orange-Yellow-Orange, #FFD880)'
      : 'transparent'};
  border-radius: 100px;
  color: ${(props) =>
    props.$iscurrentmonth
      ? 'var(--Black-White-Black-100, #202020);'
      : ' var(--Black-White-Black-35, #8F8F8F);'};
  text-align: center;
  /* Small Text */
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: ${(props) =>
    props.$iscurrentdate && props.$iscurrentmonth ? '700' : '400'};
  line-height: 14px; /* 116.667% */
  cursor: pointer;
`;

interface CalendarDropdownProps {
  isOpen: boolean;
  setDate: React.Dispatch<React.SetStateAction<Date | null>>;
}

const DAY_LIST = ['일', '월', '화', '수', '목', '금', '토'];

const CalendarDropdown = ({ isOpen, setDate }: CalendarDropdownProps) => {
  const { currentDate, monthlyCalendar, moveMonth, setCalendarDate } =
    useCalendar();

  return (
    <CalendarDropdownWrapper $isopen={isOpen}>
      <CalendarDropdownHeader>
        <h2>{`${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`}</h2>
        <div>
          <button onClick={(e) => moveMonth(e, false)}>{`<`}</button>
          <button onClick={(e) => moveMonth(e, true)}>{`>`}</button>
        </div>
      </CalendarDropdownHeader>
      <CalendarDropdownContent>
        <CalendarDateList>
          {DAY_LIST.map((dayItem) => (
            <CalendarDayItem key={dayItem}>{dayItem}</CalendarDayItem>
          ))}
          {monthlyCalendar?.map((calendarDate) => (
            <CalendarDateItem
              key={calendarDate.id}
              onClick={() => {
                if (calendarDate.isCurrentMonth) {
                  setCalendarDate(calendarDate.value);
                  setDate(calendarDate.dateType);
                }
              }}
              $iscurrentmonth={calendarDate.isCurrentMonth}
              $iscurrentdate={currentDate.getDate() === calendarDate.value}
            >
              {String(calendarDate.value)}
            </CalendarDateItem>
          ))}
        </CalendarDateList>
      </CalendarDropdownContent>
    </CalendarDropdownWrapper>
  );
};

export default CalendarDropdown;
