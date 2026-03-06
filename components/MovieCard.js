import Link from 'next/link';
import StarRating from './StarRating';
import styles from './MovieCard.module.css';

export default function MovieCard({ movie }) {
  return (
    <Link href={`/movies/${movie.id}`} className={styles.card}>
      <img src={movie.poster} alt={movie.title} className={styles.poster} />
      <div className={styles.content}>
        <strong>{movie.title}</strong>
        <p className={styles.meta}>{movie.year} • {movie.genre}</p>
        <StarRating rating={movie.rating} />
      </div>
    </Link>
  );
}
