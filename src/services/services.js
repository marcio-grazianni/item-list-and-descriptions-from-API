export const calculateDaysDifference = (dateInMilisec) => {
  const currentDate = new Date();
  const postDate = new Date(dateInMilisec);

  // To calculate the time difference of two dates
  const differenceInDates = currentDate.getTime() - postDate.getTime();

  // To calculate the no. of days between two dates
  const differenceInDays = differenceInDates / (1000 * 3600 * 24);

  return differenceInDays.toFixed();
};
