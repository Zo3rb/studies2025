import { createContext, useContext, useReducer, useEffect } from "react";
import type { ReactNode } from "react";
import { toast } from "react-toastify";

// Types
export interface CartItem {
  _id: string;
  name: string;
  image: string;
  price: number;
  originalPrice?: number;
  size: string;
  color: string;
  quantity: number;
  category?: string;
  subCategory?: string;
}

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalAmount: number;
  isOpen: boolean;
  isLoading: boolean;
}

type CartAction =
  | {
      type: "ADD_ITEM";
      payload: Omit<CartItem, "quantity"> & { quantity?: number };
    }
  | {
      type: "REMOVE_ITEM";
      payload: { _id: string; size: string; color: string };
    }
  | {
      type: "UPDATE_QUANTITY";
      payload: { _id: string; size: string; color: string; quantity: number };
    }
  | { type: "CLEAR_CART" }
  | { type: "TOGGLE_CART" }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "LOAD_CART"; payload: CartItem[] };

interface CartContextType extends CartState {
  addItem: (item: Omit<CartItem, "quantity"> & { quantity?: number }) => void;
  removeItem: (_id: string, size: string, color: string) => void;
  updateQuantity: (
    _id: string,
    size: string,
    color: string,
    quantity: number
  ) => void;
  clearCart: () => void;
  toggleCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  getItemCount: (_id: string, size: string, color: string) => number;
  isItemInCart: (_id: string, size: string, color: string) => boolean;
  getCartTotal: () => number;
  getCartSubtotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

// Cart Reducer
const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const { quantity = 1, ...item } = action.payload;
      const existingItemIndex = state.items.findIndex(
        (cartItem) =>
          cartItem._id === item._id &&
          cartItem.size === item.size &&
          cartItem.color === item.color
      );

      let newItems: CartItem[];

      if (existingItemIndex >= 0) {
        // Update existing item quantity
        newItems = state.items.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
        toast.success(`Updated ${item.name} quantity in cart`);
      } else {
        // Add new item
        newItems = [...state.items, { ...item, quantity }];
        toast.success(`${item.name} added to cart`);
      }

      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalAmount = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return {
        ...state,
        items: newItems,
        totalItems,
        totalAmount,
      };
    }

    case "REMOVE_ITEM": {
      const itemToRemove = state.items.find(
        (item) =>
          item._id === action.payload._id &&
          item.size === action.payload.size &&
          item.color === action.payload.color
      );

      const newItems = state.items.filter(
        (item) =>
          !(
            item._id === action.payload._id &&
            item.size === action.payload.size &&
            item.color === action.payload.color
          )
      );

      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalAmount = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      if (itemToRemove) {
        toast.info(`${itemToRemove.name} removed from cart`);
      }

      return {
        ...state,
        items: newItems,
        totalItems,
        totalAmount,
      };
    }

    case "UPDATE_QUANTITY": {
      const newQuantity = Math.max(1, action.payload.quantity);
      const newItems = state.items.map((item) =>
        item._id === action.payload._id &&
        item.size === action.payload.size &&
        item.color === action.payload.color
          ? { ...item, quantity: newQuantity }
          : item
      );

      const totalItems = newItems.reduce((sum, item) => sum + item.quantity, 0);
      const totalAmount = newItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return {
        ...state,
        items: newItems,
        totalItems,
        totalAmount,
      };
    }

    case "CLEAR_CART":
      toast.info("Cart cleared");
      return {
        ...state,
        items: [],
        totalItems: 0,
        totalAmount: 0,
      };

    case "TOGGLE_CART":
      return {
        ...state,
        isOpen: !state.isOpen,
      };

    case "OPEN_CART":
      return {
        ...state,
        isOpen: true,
      };

    case "CLOSE_CART":
      return {
        ...state,
        isOpen: false,
      };

    case "SET_LOADING":
      return {
        ...state,
        isLoading: action.payload,
      };

    case "LOAD_CART": {
      const items = action.payload;
      const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
      const totalAmount = items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      );

      return {
        ...state,
        items,
        totalItems,
        totalAmount,
      };
    }

    default:
      return state;
  }
};

// Initial state
const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
  isOpen: false,
  isLoading: false,
};

// Cart Provider
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const loadCart = async () => {
      dispatch({ type: "SET_LOADING", payload: true });

      try {
        const savedCart = localStorage.getItem("tawheed-cart");
        if (savedCart) {
          const cartItems = JSON.parse(savedCart);
          dispatch({ type: "LOAD_CART", payload: cartItems });
        }
      } catch (error) {
        console.error("Error loading cart from localStorage:", error);
        toast.error("Failed to load cart data");
      } finally {
        dispatch({ type: "SET_LOADING", payload: false });
      }
    };

    loadCart();
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    if (!state.isLoading) {
      try {
        localStorage.setItem("tawheed-cart", JSON.stringify(state.items));
      } catch (error) {
        console.error("Error saving cart to localStorage:", error);
        toast.error("Failed to save cart data");
      }
    }
  }, [state.items, state.isLoading]);

  // Action creators
  const addItem = (
    item: Omit<CartItem, "quantity"> & { quantity?: number }
  ) => {
    dispatch({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (_id: string, size: string, color: string) => {
    dispatch({ type: "REMOVE_ITEM", payload: { _id, size, color } });
  };

  const updateQuantity = (
    _id: string,
    size: string,
    color: string,
    quantity: number
  ) => {
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { _id, size, color, quantity },
    });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const toggleCart = () => {
    dispatch({ type: "TOGGLE_CART" });
  };

  const openCart = () => {
    dispatch({ type: "OPEN_CART" });
  };

  const closeCart = () => {
    dispatch({ type: "CLOSE_CART" });
  };

  // Helper functions
  const getItemCount = (_id: string, size: string, color: string): number => {
    const item = state.items.find(
      (item) => item._id === _id && item.size === size && item.color === color
    );
    return item ? item.quantity : 0;
  };

  const isItemInCart = (_id: string, size: string, color: string): boolean => {
    return state.items.some(
      (item) => item._id === _id && item.size === size && item.color === color
    );
  };

  const getCartTotal = (): number => {
    return state.totalAmount;
  };

  const getCartSubtotal = (): number => {
    return state.totalAmount; // For now, same as total. Can add tax/shipping later
  };

  const value: CartContextType = {
    ...state,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart,
    getItemCount,
    isItemInCart,
    getCartTotal,
    getCartSubtotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
