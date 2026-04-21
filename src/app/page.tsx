import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star, Clock, ShieldCheck, MapPin } from "lucide-react";
import ProductCard from "@/components/ProductCard/ProductCard";
import menuData from "../../data.json";
import styles from "./page.module.css";

// Extract popular items
const popularItems = menuData.filter((item) => item.categoryPosId === "popular").slice(0, 4);

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>Доставка по Східниці та самовивіз</div>
          <h1 className={styles.title}>
            Ваш ідеальний ранок <span>починається тут</span>
          </h1>
          <p className={styles.subtitle}>
            Авторська кава, свіжі круасани та СНІДАНКИ all day прямісінько до ваших дверей або у нашому затишному закладі.
          </p>
          <div className={styles.actions}>
            <Link href="/menu" className={styles.primaryBtn}>
              Замовити доставку
              <ArrowRight size={20} />
            </Link>
            <Link href="/about" className={styles.secondaryBtn}>
              Про заклад
            </Link>
          </div>
          
          <div className={styles.trustSignals}>
            <div className={styles.stars}>
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="var(--brand-pink)" color="var(--brand-pink)" />)}
              <Link href="/reviews" className={styles.ratingText}>
                <strong>4.8</strong> на Google Maps (Читати відгуки)
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image 
            src="https://img.postershop.me/21651/8707cc83-8685-49a5-afff-7dc830feb680_image.jpeg" 
            alt="Капучино та круасан Coffee Buffet" 
            fill 
            className={styles.img}
            priority
          />
        </div>
      </section>

      {/* Features / Benefits */}
      <section className={styles.features}>
        <div className={styles.featureItem}>
          <div className={styles.featureIcon}><Clock size={28} /></div>
          <h3>Сніданки All Day</h3>
          <p>Прокинулись о 15:00? Не проблема! Наші легендарні сирники та авокадо-тост доступні завжди.</p>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.featureIcon}><MapPin size={28} /></div>
          <h3>Швидка Доставка</h3>
          <p>Доставляємо до вашого готелю, санаторію чи дому у Східниці максимально швидко.</p>
        </div>
        <div className={styles.featureItem}>
          <div className={styles.featureIcon}><ShieldCheck size={28} /></div>
          <h3>Лише Свіже</h3>
          <p>Готуємо з-під ножа, використовуємо тільки якісні інгредієнти та преміальну каву.</p>
        </div>
      </section>

      {/* Popular Items */}
      <section className={styles.popular}>
        <div className={styles.sectionHeader}>
          <div className={styles.headerText}>
            <h2>Хіти нашого меню</h2>
            <p>Те, що наші гості замовляють найчастіше</p>
          </div>
          <Link href="/menu" className={styles.linkBtn}>Всі страви меню <ArrowRight size={16} /></Link>
        </div>
        <div className={styles.grid}>
          {popularItems.map((item) => (
            <ProductCard 
              key={`${item.productId}`}
              productId={item.productId}
              name={item.name}
              description={item.description || ""}
              price={item.price}
              photo={item.photo}
              productModifications={item.productModifications}
            />
          ))}
        </div>
        <div className={styles.mobileMenuBtn}>
           <Link href="/menu" className={styles.fullMenuBtn}>Відкрити повне меню</Link>
        </div>
      </section>

      {/* About Teaser */}
      <section className={styles.aboutTeaser}>
        <div className={styles.aboutImage}>
          <Image 
            src="https://img.postershop.me/21651/11cc3567-aa83-4242-bb22-740621a719a1_image.jpeg" 
            alt="Інтер'єр Coffee Buffet Східниця" 
            fill 
            className={styles.img}
          />
        </div>
        <div className={styles.aboutContent}>
          <h2>Місце, де затишно як вдома</h2>
          <p>
            Coffee Buffet — це не просто кав'ярня, це місце для відпочинку на курорті Східниця.
            Ми прагнемо дарувати щастя в кожному горнятку кави та в кожній порції десерту.
          </p>
          <ul className={styles.aboutList}>
            <li>Власна випічка та великий вибір десертів</li>
            <li>Відкриті та раді вам щодня з 09:30 до 21:00</li>
            <li>Завжди свіжа кава від кращих обсмажувальників</li>
          </ul>
          <Link href="/about" className={styles.outlineBtn}>Дізнатися більше про нас</Link>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h2>Бажаєте смачно поїсти просто зараз?</h2>
          <p>Оббирайте улюблені страви онлайн. Ми приготуємо та бережно доставимо!</p>
          <Link href="/menu" className={styles.primaryBtnLarge}>
            Перейти до доставки
          </Link>
        </div>
      </section>
    </div>
  );
}
