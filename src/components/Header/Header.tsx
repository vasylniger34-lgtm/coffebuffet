"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import styles from './Header.module.css';

export default function Header() {
  const { totalItems } = useCart();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.left}>
          <Link href="/" className={styles.logo}>
            COFFEE <span>BUFFET</span>
          </Link>
        </div>

        <nav className={styles.navDesktop}>
          <Link href="/" className={styles.navLink}>Головна</Link>
          <Link href="/menu" className={styles.navLink}>Меню</Link>
          <Link href="/about" className={styles.navLink}>Про нас</Link>
          <Link href="/reviews" className={styles.navLink}>Відгуки</Link>
        </nav>

        <div className={styles.right}>
          <Link href="/checkout" className={styles.cartBtn}>
            <ShoppingBag size={20} />
            {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
          </Link>
          <button className={styles.menuBtn}>
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
