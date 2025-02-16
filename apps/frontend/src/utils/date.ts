import { format } from "date-fns";

export function formatDate(date: Date): string {
  return format(date, "MM/dd/yyyy hh:mm a");
}

export function getDate(dateEpochTime: number): Date {
  return new Date(dateEpochTime * 1000);
}
