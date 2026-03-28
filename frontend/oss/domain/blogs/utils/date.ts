export function formatDate(date: string | null, longFormat = false): string {
  if (!date) return 'Undated';
  const options: Intl.DateTimeFormatOptions = longFormat
    ? { year: 'numeric', month: 'long', day: 'numeric' }
    : { year: 'numeric', month: 'short', day: 'numeric' };
  return new Intl.DateTimeFormat('en', options).format(new Date(date));
}