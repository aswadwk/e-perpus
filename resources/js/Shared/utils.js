import moment from 'moment';

// toYearMonthDayHourMinute // YYYY-MM-DD HH:mm
export function toYearMonthDayHourMinute(date) {
  if ((!date) || date === null) return '-';

  date = new Date(date);

  return moment(date).format('YYYY-MM-DD HH:mm');
}

// toYearMonthDay // YYYY-MM
export function toYearMonth(date) {
  if ((!date) || date === null) return '-';

  date = new Date(date);

  return moment(date).format('YYYY-MM');
}

// toYearMonthDay // YYYY-MM-DD
export function toYearMonthDay(date, defaultValue = '-') {
  if ((!date) || date === null) return defaultValue;

  date = new Date(date);

  //check if date is valid
  if (isNaN(date.getTime())) {
    return '';
  }

  return moment(date).format('YYYY-MM-DD');
}

export function toIDR(number) {
  if (isNaN(number)) return "IDR 0,00";

  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'IDR' }).format(number).replace("Rp", "IDR");
}

export function getLastNDays(n = 7) {
  const currentDate = new Date();
  const startDate = new Date(currentDate);
  startDate.setDate(currentDate.getDate() - n + 1);
  return startDate.toISOString().split('T')[0];
}

export function getLastNMonths(n = 3) {
  const currentDate = new Date();
  const startDate = new Date(currentDate);
  startDate.setMonth(currentDate.getMonth() - n);
  return startDate.toISOString().split('T')[0];
}

export function yearOptions() {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 2022 + 1 }, (_, index) => currentYear - index);

  return years.map(year => ({ label: year.toString(), value: year.toString() }));
}

export function isPdf(file) {
  return file.type === 'application/pdf';
}

export function diffDayNow(date) {
  // moment
  const dateMoment = new moment(date);

  return dateMoment.diff(moment(), 'days');
}


export function dateHumanize(date) {
  //
  if ((!date) || date === null) return '-';

  return moment(date).fromNow();
}

export function getParamByKeyName(key, defaultValue = null) {
  if (typeof window === 'undefined' || !window.location || !window.location.search) {
    return null;
  }
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(key) || defaultValue;
}


// return object with key and value
export function deleteKeyFromObject(obj) {
  // delete key from object when value is null or undefined or ""

  return Object.keys(obj).forEach(key => {
    if (obj[key] === null || obj[key] === undefined || obj[key] === "") {
      delete obj[key];
    }

    return obj;
  });
}


export function removeEmptyValues(obj) {
  for (const key in obj) {
    if (obj[key] === "") {
      delete obj[key];
    }
  }
  return obj;
}

