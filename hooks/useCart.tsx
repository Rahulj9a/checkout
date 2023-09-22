import { Product } from "@/types";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface cartStore {
  items: Product[];
  addItem: (data: Product) => void;
  removeItem: (productId: string) => void;
  removeAll: () => void;
}

const useCart = create(
  persist<cartStore>(
    (set, get) => ({
      items: [],
      addItem: (data: Product) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === data.id);
        if (existingItem) {
          return toast("Item already exist in cart");
        }
        set({ items: [...get().items, data] });
        toast.success("Item added to cart");
      },
      removeItem: (productId) => {
        const currentItems = get().items;
        const existingItem = currentItems.find((item) => item.id === productId);
        if (existingItem) {
          set({
            items: [...get().items.filter((item) => item.id !== productId)],
          });
          toast.success("Item removed from cart");
        }
      },
      removeAll: () => set({ items: [] }),
    }),
    {
      name: "cart-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useCart;
