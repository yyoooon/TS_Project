interface HourObj {
  hour: string;
  time: string;
}

export interface DateValues {
  hh: HourObj;
  mm: string;
  ss: string;
  YY: number;
  MM: number;
  DD: number;
  dd: string;
}

const addZero = (num: number): string => {
  return num < 10 ? '0' + num : '' + num;
};

const getHourInfo = (hh: number): HourObj => {
  if (hh > 12) {
    return {
      hour: addZero(hh - 12),
      time: 'PM',
    };
  }
  return {
    hour: addZero(hh),
    time: 'AM',
  };
};

export const getCurrentDate = (): DateValues => {
  const today = new Date();
  const dayList = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  return {
    hh: getHourInfo(today.getHours()),
    mm: addZero(today.getMinutes()),
    ss: addZero(today.getSeconds()),
    YY: today.getFullYear(),
    MM: today.getMonth() + 1,
    DD: today.getDate(),
    dd: dayList[today.getDay()].toUpperCase(),
  };
};
