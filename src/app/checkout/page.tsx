"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Send } from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "./checkout.module.css";

export default function CheckoutPage() {
  const { items, totalPrice } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    comment: "",
    messenger: "telegram"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (items.length === 0) {
      alert("Ваш кошик порожній!");
      return;
    }

    let orderText = `🌟 *НОВЕ ЗАМОВЛЕННЯ (Східниця)* 🌟\n\n`;
    orderText += `👤 Ім'я: ${formData.name}\n`;
    orderText += `📞 Телефон: ${formData.phone}\n`;
    orderText += `📍 Адреса: ${formData.address}\n`;
    if (formData.comment) {
      orderText += `💬 Коментар: ${formData.comment}\n`;
    }
    
    orderText += `\n🛒 *Кошик:*\n`;
    items.forEach((item, index) => {
      const modText = item.modificationName ? ` (${item.modificationName})` : "";
      orderText += `${index + 1}. ${item.name}${modText} x ${item.quantity} шт. = ${item.price * item.quantity} ₴\n`;
    });
    
    orderText += `\n====================\n`;
    orderText += `💰 *СУМА ДО ОПЛАТИ:* ${totalPrice} ₴\n`;

    const encodedText = encodeURIComponent(orderText);
    const phoneNumber = "+380675827707";

    if (formData.messenger === "telegram") {
      // For Telegram, you'd usually use a username (e.g., https://t.me/username?text=)
      // Since we only have a phone, we can try to open it by number if supported, or provide an admin username.
      // Assuming phone number link:
      window.open(`https://t.me/${phoneNumber}?text=${encodedText}`, "_blank");
    } else {
      // Viber link
      window.open(`viber://chat?number=${phoneNumber.replace("+", "")}&draft=${encodedText}`, "_blank");
    }
  };

  if (items.length === 0) {
    return (
      <div className={styles.emptyContainer}>
        <h1>Ваш кошик порожній</h1>
        <p>Поверніться до меню, щоб додати страви.</p>
        <Link href="/menu" className={styles.backBtn}>
          <ArrowLeft size={20} /> До меню
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Link href="/menu" className={styles.backLink}>
        <ArrowLeft size={20} /> Назад до меню
      </Link>
      
      <div className={styles.content}>
        <div className={styles.formSection}>
          <h1 className={styles.title}>Оформлення замовлення</h1>
          <form className={styles.form} onSubmit={handleOrder}>
            
            <div className={styles.inputGroup}>
              <label htmlFor="name">Ім'я</label>
              <input type="text" id="name" name="name" required placeholder="Як до вас звертатись?" value={formData.name} onChange={handleChange} />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="phone">Телефон</label>
              <input type="tel" id="phone" name="phone" required placeholder="+38 (000) 000-00-00" value={formData.phone} onChange={handleChange} />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="address">Адреса доставки у Східниці (готель, санаторій)</label>
              <input type="text" id="address" name="address" required placeholder="Наприклад: Готель Київська Русь, номер 12" value={formData.address} onChange={handleChange} />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="comment">Коментар (необов'язково)</label>
              <textarea id="comment" name="comment" placeholder="Побажання щодо замовлення..." rows={3} value={formData.comment} onChange={handleChange} />
            </div>

            <div className={styles.inputGroup}>
              <label htmlFor="messenger">Куди відправити замовлення?</label>
              <select id="messenger" name="messenger" value={formData.messenger} onChange={handleChange}>
                <option value="telegram">Telegram</option>
                <option value="viber">Viber</option>
              </select>
            </div>

            <button type="submit" className={styles.submitBtn}>
              <Send size={20} />
              Надіслати замовлення
            </button>
            <p className={styles.disclaimer}>
              Натискаючи на кнопку, ви будете перенаправлені у вибраний месенджер з готовим повідомленням.
              Просто відправте його нам!
            </p>
          </form>
        </div>

        <div className={styles.summarySection}>
          <div className={styles.summaryCard}>
            <h2>Ваше замовлення</h2>
            <div className={styles.itemsList}>
              {items.map(item => (
                <div key={`${item.productId}-${item.modificationId}`} className={styles.summaryItem}>
                  <div className={styles.itemImage}>
                    <Image src={item.photo} alt={item.name} fill className={styles.img} />
                  </div>
                  <div className={styles.itemInfo}>
                    <h4>{item.name}</h4>
                    {item.modificationName && <span>{item.modificationName}</span>}
                    <div className={styles.itemMeta}>
                      <span>{item.quantity} шт.</span>
                      <strong>{item.price * item.quantity} ₴</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.totalRow}>
              <span>Всього до сплати:</span>
              <span>{totalPrice} ₴</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
