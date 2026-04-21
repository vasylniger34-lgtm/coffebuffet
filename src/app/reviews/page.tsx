import { Star } from "lucide-react";
import styles from "./reviews.module.css";

export const metadata = {
  title: "Відгуки | Coffee Buffet Східниця",
  description: "Що кажуть наші гості. Читайте реальні відгуки з Google Maps.",
};

const reviews = [
  {
    id: 1,
    name: "Олена Віталіївна",
    rating: 5,
    text: "Дуже затишно та неймовірно смачно! Капучино просто ідеальне, а сніданки можна замовляти цілий день. Дизайн закладу 10/10.",
    date: "2 тижні тому"
  },
  {
    id: 2,
    name: "Максим Д.",
    rating: 5,
    text: "Найкраща кав'ярня у Східниці. Круті десерти, швидке обслуговування. Морозиво теж топ. Обов'язково зайдемо ще!",
    date: "Місяць тому"
  },
  {
    id: 3,
    name: "Ірина",
    rating: 5,
    text: "Шукали де смачно поснідати з дітьми. Сирники та крем-суп — любов. Приємний персонал, чисто і дуже гарний інтер'єр.",
    date: "3 тижні тому"
  },
  {
    id: 4,
    name: "Анастасія С.",
    rating: 4,
    text: "Все супер, кава смачна, атмосфера дуже спокійна. Трішки довелось зачекати на замовлення через велику кількість людей, але воно того варте.",
    date: "2 місяці тому"
  },
  {
    id: 5,
    name: "Віктор",
    rating: 5,
    text: "Чудове місце для відпочинку під час відпустки. Завжди брали каву на винос перед прогулянкою. Рекомендую!",
    date: "1 тиждень тому"
  },
  {
    id: 6,
    name: "Дарина М.",
    rating: 5,
    text: "Оформлення та естетика закладу просто вражає. Авокадо тост перевершив усі очікування. Дуже радію, що знайшли це місце.",
    date: "3 дні тому"
  }
];

export default function ReviewsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Відгуки наших гостей</h1>
        <div className={styles.ratingSummary}>
          <div className={styles.score}>4.8</div>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map((s) => (
              <Star key={s} size={24} fill="currentColor" color="currentColor" />
            ))}
          </div>
          <p>На основі відгуків з Google Maps</p>
        </div>
      </div>

      <div className={styles.grid}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.avatar}>{review.name.charAt(0)}</div>
              <div className={styles.meta}>
                <h3 className={styles.name}>{review.name}</h3>
                <span className={styles.date}>{review.date}</span>
              </div>
            </div>
            <div className={styles.cardStars}>
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={16} 
                  fill={i < review.rating ? "var(--brand-pink)" : "transparent"} 
                  color={i < review.rating ? "var(--brand-pink)" : "var(--text-secondary)"} 
                />
              ))}
            </div>
            <p className={styles.text}>{review.text}</p>
          </div>
        ))}
      </div>
      
      <div className={styles.action}>
        <a 
          href="https://share.google/8QMkbVDKTvaQnlcno" 
          target="_blank" 
          rel="noreferrer"
          className={styles.leaveReviewBtn}
        >
          Залишити відгук у Google
        </a>
      </div>
    </div>
  );
}
