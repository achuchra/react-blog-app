const dayNames = ['Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat', 'Sun'];
const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const formatDate = dateString => {
  const date = new Date(dateString);

  const dayName = dayNames[date.getDay()];
  const dateNum = date.getDate();
  const monthName = monthNames[date.getMonth()];
  const yearNum = date.getFullYear();

  const dateToDisplay = `${dayName}, ${dateNum} ${monthName} ${yearNum}`;
  return dateToDisplay;
};
