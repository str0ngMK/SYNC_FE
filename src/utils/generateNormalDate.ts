const modifyServerToClientDate = (date: Date) => new Date(date);

const createNormalFormatDate = (date: Date) => {
  const formattedYear = date.getFullYear();
  const formattedMonth =
    date.getMonth() > 9
      ? String(date.getMonth() + 1)
      : String(`0${date.getMonth() + 1}`);
  const formattedDate =
    date.getDate() > 9 ? String(date.getDate()) : String(`0${date.getDate()}`);
  return `${formattedYear}.${formattedMonth}.${formattedDate}`;
};

const generateNormalDate = (startDate: Date, endDate: Date): string => {
  const clientStartDate = modifyServerToClientDate(startDate);
  const clientEndDate = modifyServerToClientDate(endDate);
  return `${createNormalFormatDate(clientStartDate)} ~ ${createNormalFormatDate(clientEndDate)}`;
};

export default generateNormalDate;
