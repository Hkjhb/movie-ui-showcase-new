import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.siteFooter}>
      <div className={`container ${styles.footerInner}`}>
        <p>© {new Date().getFullYear()} Movie UI Showcase</p>
        <div className={styles.socials}>
          <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://x.com" target="_blank" rel="noreferrer">X</a>
          <a href="https://youtube.com" target="_blank" rel="noreferrer">YouTube</a>
        </div>
      </div>
    </footer>
  );
}
