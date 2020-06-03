export const formatTime = (time) => {
  const month = new Date(time).getMonth();
  const day = new Date(time).getDay();
  return `${month}月${day}日`;
};

export const formatWeek = (time) => {
  const week = new Date(time).getDate();
  let weekday;
  switch (week) {
    case 1:
      weekday = '周一';
      break;
    case 2:
      weekday = '周二';
      break;
    case 3:
      weekday = '周三';
      break;
    case 4:
      weekday = '周四';
      break;
    case 5:
      weekday = '周五';
      break;
    case 6:
      weekday = '周六';
      break;
    case 7:
      weekday = '周日';
      break;
    default:
      break;
  }
  return weekday;
};

export const isToday = (time) => {
  return new Date().toDateString() === new Date(time).toDateString();
};
