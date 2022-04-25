import moment from "moment";

const dateFormatter = function (date) {
  return moment(date).format("DD MMMM YYYY");
};

export default dateFormatter;
