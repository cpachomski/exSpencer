export const getHtmlFormDate = (date = new Date()) => {
  return `${date.getFullYear()}-${
    date.getMonth() < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }-${date.getDate()}`
}
