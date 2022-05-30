export function getFullDate(timestamp) {
  const date = new Date(+timestamp * 1000);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

export function getTimestamp(date) {
  const newDate = date.split('.').reverse();
  return +new Date(newDate[0], newDate[1] - 1, newDate[2]) / 1000;
}

export function getQueryParams(date, uuid) {
  return {
    from: date[0] ? getTimestamp(date[0]) : undefined,
    to: date[1] ? getTimestamp(date[1]) : undefined,
    uuid: uuid
  };
}