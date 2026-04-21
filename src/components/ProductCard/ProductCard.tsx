"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus } from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "./ProductCard.module.css";

type Modification = {
  modificator_id: number;
  name: string;
  price: number;
};

type ProductProps = {
  productId: number;
  name: string;
  description: string;
  photo: string;
  price: number;
  productModifications?: Modification[];
};

export default function ProductCard({
  productId,
  name,
  description,
  photo,
  price,
  productModifications,
}: ProductProps) {
  const { addToCart } = useCart();
  const hasMods = productModifications && productModifications.length > 0;
  
  const [selectedMod, setSelectedMod] = useState<Modification | null>(
    hasMods ? productModifications[0] : null
  );

  const displayPrice = hasMods && selectedMod ? selectedMod.price : price;

  const handleAdd = () => {
    addToCart({
      productId,
      name,
      price: displayPrice,
      photo,
      modificationId: selectedMod?.modificator_id,
      modificationName: selectedMod?.name,
    });
  };

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={photo} alt={name} fill className={styles.image} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" />
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.title}>{name}</h3>
        </div>
        {description && <p className={styles.description}>{description}</p>}
        
        {hasMods && (
          <div className={styles.modifications}>
            {productModifications.map((mod) => (
              <button
                key={mod.modificator_id}
                className={`${styles.modBtn} ${selectedMod?.modificator_id === mod.modificator_id ? styles.modBtnActive : ""}`}
                onClick={() => setSelectedMod(mod)}
              >
                {mod.name}
              </button>
            ))}
          </div>
        )}

        <div className={styles.footer}>
          <span className={styles.price}>{displayPrice} ₴</span>
          <button className={styles.addBtn} onClick={handleAdd}>
            <Plus size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}
