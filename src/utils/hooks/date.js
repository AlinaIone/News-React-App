export function getDateFormatted(dateString) {
  console.log({ dateString });
  const currentDate = new Date(dateString);
  console.log({ currentDate });

  let month = currentDate.getMonth() + 1;
  let day = currentDate.getDate();
  let year = currentDate.getFullYear();

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  return `${day}/${month}/${year}`;
}
