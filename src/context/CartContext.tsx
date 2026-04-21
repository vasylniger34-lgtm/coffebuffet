"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type CartItem = {
  productId: number;
  name: string;
  price: number;
  quantity: number;
  photo: string;
  modificationId?: number;
  modificationName?: string;
};

type CartContextType = {
  items: CartItem[];
  addToCart: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeFromCart: (productId: number, modificationId?: number) => void;
  updateQuantity: (productId: number, quantity: number, modificationId?: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const saved = localStorage.getItem("coffee_buffet_cart");
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {}
    }
  }, []);

  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("coffee_buffet_cart", JSON.stringify(items));
    }
  }, [items, isMounted]);

  const addToCart = (newItemInput: Omit<CartItem, "quantity"> & { quantity?: number }) => {
    const newItem: CartItem = { ...newItemInput, quantity: newItemInput.quantity || 1 };
    
    setItems((prev) => {
      const existing = prev.find(
        (item) => item.productId === newItem.productId && item.modificationId === newItem.modificationId
      );
      if (existing) {
        return prev.map((item) =>
          item.productId === newItem.productId && item.modificationId === newItem.modificationId
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      return [...prev, newItem];
    });
    setIsSidebarOpen(true);
  };

  const removeFromCart = (productId: number, modificationId?: number) => {
    setItems((prev) =>
      prev.filter((item) => !(item.productId === productId && item.modificationId === modificationId))
    );
  };

  const updateQuantity = (productId: number, quantity: number, modificationId?: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, modificationId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.productId === productId && item.modificationId === modificationId
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => setItems([]);

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const closeSidebar = () => setIsSidebarOpen(false);

  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        totalPrice,
        isSidebarOpen,
        toggleSidebar,
        closeSidebar,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
