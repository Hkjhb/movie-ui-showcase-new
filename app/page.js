import HeroBanner from '@/components/HeroBanner';
import MovieRow from '@/components/MovieRow';
import { movies } from '@/data/movies';

export default function HomePage() {
  const featured = movies[19];
  const trending = [...movies].sort((a, b) => b.year - a.year).slice(0, 8);
  const topRated = [...movies].sort((a, b) => b.rating - a.rating).slice(0, 8);
  const sciFi = movies.filter((movie) => movie.genre === 'Sci-Fi').slice(0, 8);

  return (
    <>
      <HeroBanner movie={featured} />
      <MovieRow title="Trending Now" movies={trending} />
      <MovieRow title="Top Rated" movies={topRated} />
      <MovieRow title="Sci-Fi Spotlight" movies={sciFi} />
    </>
  );
}
