import React, { useEffect, useState } from 'react';

import { addMonths, getDaysInMonth, subMonths } from 'date-fns';

interface CalendarDate {
  id: number;
  value: number;
  dateType: Date;
  isCurrentMonth: boolean;
}

interface useCalendarReturnType {
  currentDate: Date;
  monthlyCalendar: CalendarDate[] | null;
  moveMonth: (e: React.MouseEvent<HTMLButtonElement>, isAdd: boolean) => void;
  setCalendarDate: (date: number) => void;
}

type useCalendarType = () => useCalendarReturnType;

const useCalendar: useCalendarType = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [monthlyCalendar, setMonthlyCalendar] = useState<CalendarDate[] | null>(
    null,
  );

  const createMonthCalendar = () => {
    // 현재 달의 첫째 날 (ex. 현재 7월일 때 => 7월 1일)
    const nowMonthFirstDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      1,
    );

    // 현재 달의 첫째 날은 무슨 요일이지?
    const newMonthFirstDay = nowMonthFirstDate.getDay();

    // 현재 달의 요일은 얼마나 있는가? (ex. 현재 7월일 때 => 31)
    const totalDateCurrentMonth = getDaysInMonth(
      new Date(nowMonthFirstDate.getFullYear(), nowMonthFirstDate.getMonth()),
    );

    // 달력의 세로 길이를 구하는 기능
    const calendarLen = Math.ceil(
      (totalDateCurrentMonth + newMonthFirstDay) / 7,
    );
    const calendar = Array.from(
      { length: calendarLen * 7 },
      (v, i) => i - newMonthFirstDay + 1,
    ).map((calnedarDate) => {
      if (calnedarDate < 1) {
        const lastMonthFirstDate = new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() - 1,
        );
        const totalDateLastMonth = getDaysInMonth(new Date(lastMonthFirstDate));
        return {
          id: calnedarDate,
          value: calnedarDate + totalDateLastMonth,
          dateType: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() - 1,
            calnedarDate + totalDateLastMonth,
          ),
          isCurrentMonth: false,
        };
      }
      if (calnedarDate > totalDateCurrentMonth) {
        return {
          id: calnedarDate,
          value: calnedarDate - totalDateCurrentMonth,
          dateType: new Date(
            currentDate.getFullYear(),
            currentDate.getMonth() + 1,
            calnedarDate - totalDateCurrentMonth,
          ),
          isCurrentMonth: false,
        };
      }
      return {
        id: calnedarDate,
        value: calnedarDate,
        dateType: new Date(
          currentDate.getFullYear(),
          currentDate.getMonth(),
          calnedarDate,
        ),
        isCurrentMonth: true,
      };
    });
    setMonthlyCalendar(calendar);
  };

  useEffect(() => {
    if (Date.now() === 23) setCurrentDate(new Date());
    createMonthCalendar();
  }, [currentDate]);

  const moveMonth = (
    e: React.MouseEvent<HTMLButtonElement>,
    isAdd: boolean,
  ) => {
    e.preventDefault();
    setCurrentDate((prevDate) =>
      isAdd ? addMonths(prevDate, 1) : subMonths(prevDate, 1),
    );
  };

  const setCalendarDate = (date: number) =>
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth(), date),
    );

  return { currentDate, monthlyCalendar, moveMonth, setCalendarDate };
};

export default useCalendar;
