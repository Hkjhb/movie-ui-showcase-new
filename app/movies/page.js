'use client';

import { useMemo, useState } from 'react';
import GenreFilter from '@/components/GenreFilter';
import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';
import { genres, movies } from '@/data/movies';

export default function MoviesPage() {
  const [query, setQuery] = useState('');
  const [genre, setGenre] = useState('All');
  const [sort, setSort] = useState('rating');

  const filtered = useMemo(() => {
    return [...movies]
      .filter((movie) => movie.title.toLowerCase().includes(query.toLowerCase()))
      .filter((movie) => genre === 'All' || movie.genre === genre)
      .sort((a, b) => {
        if (sort === 'year') return b.year - a.year;
        if (sort === 'title') return a.title.localeCompare(b.title);
        return b.rating - a.rating;
      });
  }, [query, genre, sort]);

  return (
    <section className="container fade-in" style={{ paddingTop: '1.5rem' }}>
      <h1>Movies Catalog</h1>
      <p style={{ color: 'var(--muted)' }}>Search, filter by genre, and sort through the complete list.</p>
      <div style={{ display: 'flex', gap: '.8rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <SearchBar value={query} onChange={setQuery} />
        <select value={sort} onChange={(e) => setSort(e.target.value)} style={{ padding: '.65rem .8rem', borderRadius: 8, background: '#111', color: 'white', border: '1px solid #2a2a2a' }}>
          <option value="rating">Sort: Rating</option>
          <option value="year">Sort: Year</option>
          <option value="title">Sort: Title</option>
        </select>
      </div>
      <GenreFilter genres={genres} selected={genre} onChange={setGenre} />
      <div className="grid">
        {filtered.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </section>
  );
}
