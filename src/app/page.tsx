import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import ProductCard from "@/components/ProductCard/ProductCard";
import menuData from "../../data.json";
import styles from "./page.module.css";

// Extract popular items
const popularItems = menuData.filter((item) => item.categoryPosId === "popular").slice(0, 4);

export default function Home() {
  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.badge}>Східниця, вул. Зарічна 89</div>
          <h1 className={styles.title}>
            Почніть свій день з <span>найкращої кави</span> та сніданку
          </h1>
          <p className={styles.subtitle}>
            СНІДАНКИ all day, свіжі десерти та приємна атмосфера. Замовляйте з доставкою або на винос прямо зараз.
          </p>
          <div className={styles.actions}>
            <Link href="/menu" className={styles.primaryBtn}>
              Перейти до меню
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image 
            src="https://img.postershop.me/21651/8707cc83-8685-49a5-afff-7dc830feb680_image.jpeg" 
            alt="Coffee Buffet Атмосфера" 
            fill 
            className={styles.img}
            priority
          />
        </div>
      </section>

      <section className={styles.popular}>
        <div className={styles.sectionHeader}>
          <h2>Популярне зараз</h2>
          <Link href="/menu" className={styles.linkBtn}>Всі страви</Link>
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
      </section>
    </div>
  );
}
