import Link from 'next/link';
import { MapPin, Phone } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h2 className={styles.logo}>COFFEE <span>BUFFET</span></h2>
            <p className={styles.slogan}>СНІДАНКИ all day · КАВА та ДЕСЕРТИ · Цукерня №1</p>
          </div>
          
          <div className={styles.links}>
            <Link href="/" className={styles.link}>Головна</Link>
            <Link href="/menu" className={styles.link}>Меню</Link>
            <Link href="/about" className={styles.link}>Про нас</Link>
          </div>
        </div>

        <div className={styles.contacts}>
          <a href="https://maps.app.goo.gl/some-link" target="_blank" rel="noreferrer" className={styles.contactItem}>
            <MapPin size={20} />
            вулиця Зарічна, 89, Східниця
          </a>
          <a href="tel:+380675827707" className={styles.contactItem}>
            <Phone size={20} />
            +38 (067) 582 77 07
          </a>
          <a href="https://www.instagram.com/coffee.buffet.shidnitca" target="_blank" rel="noreferrer" className={styles.contactItem}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            @coffee.buffet.shidnitca
          </a>
        </div>

        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Coffee Buffet. Всі права захищені.</p>
        </div>
      </div>
    </footer>
  );
}
