export function formatDateToSv(date: Date): string {
  return date.toLocaleDateString('sv-SE');
}

export const getDefaultDateRange = (): [Date, Date] => {
  const today = new Date();
  const weekAgo = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);
  return [weekAgo, today];
};
