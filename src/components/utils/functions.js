export function getFullDate(timestamp) {
  const date = new Date(+timestamp);
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
}

export function getTimestamp(date) {
  const newDate = date.split('.').reverse();
  return +new Date(newDate[0], newDate[1] - 1, newDate[2]);
}