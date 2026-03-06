export default function StarRating({ rating }) {
  const fullStars = Math.floor(rating);
  const stars = '★'.repeat(fullStars) + '☆'.repeat(5 - fullStars);
  return <p style={{ color: 'var(--gold)', margin: '0.3rem 0' }}>{stars} <span style={{ color: '#ccc' }}>({rating.toFixed(1)})</span></p>;
}
