// Shared date formatter used anywhere an ISO date string (e.g. an
// article's publishedAt) needs to display as "Sep 28, 2024".
export function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}