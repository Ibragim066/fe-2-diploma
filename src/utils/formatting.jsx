import moment from 'moment';

export function secToHourMin(sec) {
    return moment(sec * 1000).format('HH:mm');
};

export function durationToHourMin(duration) {
    const sec = duration;
    const hour = Math.floor(sec / 3600);
    let min = Math.floor((sec - hour * 3600) / 60);
    min = ((min < 10) ? '0' : '') + min;
    return `${hour} : ${min}`;
}

export function priceFormatting(value) {
    let price = value + '';
  if (price.length > 3) {
    price = price.slice(0, -3) + ' ' + price.slice(-3);
  } 
  return price;
}

export function dayInFirstPosition(date) {
    if (date) {
      return moment(date, 'YYYY-MM-DD').format('DD.MM.YYYY');
    } else {
      return '';
    }
  }
  
  export function dayInLastPosition(date) {
    if (date) {
      return moment(date, 'DD.MM.YYYY').format('YYYY-MM-DD');
    } else {
      return '';
    }
  }