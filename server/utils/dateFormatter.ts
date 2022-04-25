import moment from "moment";

function dateFormatter(date: Date) {
  return moment(date).format("DD MMMM YYYY");
}

export default dateFormatter;
