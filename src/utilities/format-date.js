const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function handleFormatDate(value) {
  const date = new Date(value);
  const day = date.getDate();
  const year = date.getFullYear();
  const monthName = months[date.getMonth()];
  const formatted = `${day} ${monthName} ${year}`;

  return formatted;
}
