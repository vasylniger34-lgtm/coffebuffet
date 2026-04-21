import Image from "next/image";
import { Clock, MapPin, Phone } from "lucide-react";
import styles from "./about.module.css";

export const metadata = {
  title: "Про нас | Coffee Buffet Східниця",
  description: "Затишна кав'ярня-кондитерська у Східниці. Готуємо з любов'ю до людей та їжі.",
};

export default function AboutPage() {
  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.imageWrapper}>
          <Image 
            src="https://img.postershop.me/21651/11cc3567-aa83-4242-bb22-740621a719a1_image.jpeg" 
            alt="Інтер'єр Coffee Buffet" 
            fill 
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Готуємо з любов'ю до людей та їжі</h1>
          <p className={styles.description}>
            <strong>Coffee Buffet</strong> — це сучасна кав'ярня-кондитерська у мальовничій Східниці. 
            Ми створили місце, де можна бути щасливим в моменті. Наші баристи приготують для вас ідеальну каву, 
            а кухня порадує смачними сніданками протягом усього дня.
          </p>
          <div className={styles.features}>
            <div className={styles.feature}>
              <span className={styles.check}>♥</span> Затишно
            </div>
            <div className={styles.feature}>
              <span className={styles.check}>♥</span> Смачно
            </div>
            <div className={styles.feature}>
              <span className={styles.check}>♥</span> З турботою
            </div>
          </div>
        </div>
      </div>

      <div className={styles.infoGrid}>
        <div className={styles.infoCard}>
          <Clock size={32} className={styles.icon} />
          <h3>Графік роботи</h3>
          <p>Щодня без вихідних</p>
          <strong>09:30 – 21:00</strong>
        </div>
        <div className={styles.infoCard}>
          <MapPin size={32} className={styles.icon} />
          <h3>Адреса</h3>
          <p>Львівська область, Східниця</p>
          <strong>вул. Зарічна, 89</strong>
        </div>
        <div className={styles.infoCard}>
          <Phone size={32} className={styles.icon} />
          <h3>Зв'язок</h3>
          <p>Замовлення та питання</p>
          <strong>+38 (067) 582 77 07</strong>
        </div>
        <div className={styles.infoCard}>
          <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
          <h3>Instagram</h3>
          <p>Слідкуйте за нами</p>
          <a href="https://www.instagram.com/coffee.buffet.shidnitca" target="_blank" rel="noreferrer">
            <strong>@coffee.buffet.shidnitca</strong>
          </a>
        </div>
      </div>
    </div>
  );
}
