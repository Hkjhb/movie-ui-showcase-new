'use client';

import Link from 'next/link';
import { useState } from 'react';
import styles from './Header.module.css';

const links = [
  { href: '/', label: 'Home' },
  { href: '/movies', label: 'Movies' },
  { href: '/genres', label: 'Genres' },
  { href: '/about', label: 'About' }
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className={styles.siteHeader}>
      <div className={`container ${styles.headerInner}`}>
        <Link href="/" className={styles.logo}>🎬 MovieUI</Link>
        <button className={styles.menuBtn} onClick={() => setOpen(!open)} aria-label="Toggle menu">☰</button>
        <nav className={`${styles.nav} ${open ? styles.open : ''}`}>
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
