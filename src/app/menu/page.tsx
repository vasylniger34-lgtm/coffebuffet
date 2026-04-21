import ProductCard from "@/components/ProductCard/ProductCard";
import menuData from "../../../data.json";
import styles from "./menu.module.css";

export const metadata = {
  title: "Меню | Coffee Buffet Східниця",
  description: "Повне меню кав'ярні Coffee Buffet у Східниці. Замовляйте з доставкою або на винос.",
};

type MenuItem = typeof menuData[0];

export default function MenuPage() {
  // Group items by category
  const groupedItems = menuData.reduce<Record<string, MenuItem[]>>((acc, item) => {
    const category = item.categoryName || "Інше";
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {});

  // Remove "Нове та популярне" duplicate since they are already in their respective categories
  if (groupedItems["Нове та популярне"]) {
    delete groupedItems["Нове та популярне"];
  }

  // Sort categories by putting "Сніданки та не тільки" first, then "Кава" etc.
  const categories = Object.keys(groupedItems).sort((a, b) => {
    if (a === "Сніданки та не тільки") return -1;
    if (b === "Сніданки та не тільки") return 1;
    if (a === "Кава") return -1;
    if (b === "Кава") return 1;
    return 0;
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Наше Меню</h1>
        <p className={styles.subtitle}>Оберіть ваші улюблені страви та напої для доставки або самовивозу</p>
      </div>

      <div className={styles.menuWrapper}>
        {/* Sticky side nav for desktop */}
        <aside className={styles.sidebar}>
          <ul className={styles.catList}>
            {categories.map((cat) => (
              <li key={cat}>
                <a href={`#cat-${btoa(encodeURIComponent(cat)).replace(/=/g, "")}`} className={styles.catLink}>
                  {cat}
                </a>
              </li>
            ))}
          </ul>
        </aside>

        {/* Content */}
        <div className={styles.content}>
          {categories.map((category) => {
            const id = `cat-${btoa(encodeURIComponent(category)).replace(/=/g, "")}`;
            return (
              <section key={category} id={id} className={styles.categorySection}>
                <h2 className={styles.categoryTitle}>{category}</h2>
                <div className={styles.grid}>
                  {groupedItems[category].map((item) => (
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
