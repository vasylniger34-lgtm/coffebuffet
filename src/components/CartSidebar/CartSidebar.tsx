"use client";

import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import styles from "./CartSidebar.module.css";

export default function CartSidebar() {
  const {
    items,
    isSidebarOpen,
    closeSidebar,
    updateQuantity,
    totalPrice,
  } = useCart();

  if (!isSidebarOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={closeSidebar}></div>
      <div className={styles.sidebar}>
        <div className={styles.header}>
          <div className={styles.title}>
            <ShoppingBag size={20} />
            <h2>Ваше замовлення</h2>
          </div>
          <button className={styles.closeBtn} onClick={closeSidebar}>
            <X size={24} />
          </button>
        </div>

        <div className={styles.content}>
          {items.length === 0 ? (
            <div className={styles.empty}>
              <ShoppingBag size={48} className={styles.emptyIcon} />
              <p>Ваш кошик ще порожній!</p>
              <button className={styles.continueBtn} onClick={closeSidebar}>
                Перейти до меню
              </button>
            </div>
          ) : (
            <div className={styles.itemsList}>
              {items.map((item) => (
                <div key={`${item.productId}-${item.modificationId}`} className={styles.cartItem}>
                  <div className={styles.itemImage}>
                    <Image src={item.photo} alt={item.name} fill className={styles.image} />
                  </div>
                  <div className={styles.itemDetails}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    {item.modificationName && (
                      <span className={styles.modName}>{item.modificationName}</span>
                    )}
                    <div className={styles.itemActions}>
                      <span className={styles.itemPrice}>{item.price} ₴</span>
                      <div className={styles.quantityControls}>
                        <button
                          className={styles.qBtn}
                          onClick={() => updateQuantity(item.productId, item.quantity - 1, item.modificationId)}
                        >
                          <Minus size={14} />
                        </button>
                        <span className={styles.quantity}>{item.quantity}</span>
                        <button
                          className={styles.qBtn}
                          onClick={() => updateQuantity(item.productId, item.quantity + 1, item.modificationId)}
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.total}>
              <span>Сума:</span>
              <span>{totalPrice} ₴</span>
            </div>
            <Link href="/checkout" className={styles.checkoutBtn} onClick={closeSidebar}>
              Оформити замовлення
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
