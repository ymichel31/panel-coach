import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";

dayjs.extend(utc);


export function formatDate(dateString: string) {
  return dayjs.utc(dateString).local().format("DD/MM/YYYY hh:mm A");
}


export function parseDateToParts(isoDate: string | undefined) {
  if (!isoDate) return { datePart: "", timePart: "" };

  const d = dayjs(isoDate);

  return {
    datePart: d.format("YYYY-MM-DD"),
    timePart: d.format("HH:mm"),
  };
}