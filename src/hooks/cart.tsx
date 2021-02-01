/* eslint-disable object-curly-newline */
/* eslint-disable no-shadow */
/* eslint-disable function-paren-newline */
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import Cookie from 'js-cookie';

interface ProductType {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice: number | undefined;
  price: number;
  installments: [
    {
      quantity: number;
      value: number;
    },
  ];
}

interface CartProductType {
  productId: number;
  productName: string;
  stars: number;
  imageUrl: string;
  listPrice: number | undefined;
  price: number;
  installments: [
    {
      quantity: number;
      value: number;
    },
  ];
  quantity: number;
}

interface CartContextData {
  addToCart(product: ProductType | CartProductType | undefined): void;
  removeFromCart(id: number): void;
  increment(id: number): void;
  decrement(id: number): void;
  clearCart(): void;
  cart: CartProductType[] | null;
}

const CartContext = createContext<CartContextData>({} as CartContextData);

export const CartProvider: React.FC = ({ children }) => {
  const [cart, setCart] = useState<CartProductType[] | undefined>([]);

  useEffect(() => {
    const cart = Cookie.get('@corebiz:cart');

    if (cart) {
      const cartFormatted = JSON.parse(cart);
      setCart(cartFormatted);
    }

    return undefined;
  }, []);

  const increment = useCallback(
    (id: number) => {
      const productFound = cart.find(
        cartProduct => cartProduct.productId === id,
      );

      if (!productFound) return;

      setCart(prevProducts =>
        prevProducts.map(product => {
          if (productFound.productId === product.productId) {
            return {
              ...product,
              quantity: productFound.quantity + 1,
            };
          }

          return product;
        }),
      );
      Cookie.set('@corebiz:cart', [...cart]);
    },
    [cart],
  );

  const decrement = useCallback(
    (id: number) => {
      const productFound = cart.find(
        cartProduct => cartProduct.productId === id,
      );

      if (!productFound) return;

      if (productFound.quantity === 1) {
        const anotherProducts = cart.filter(
          cartProduct => cartProduct.productId !== id,
        );

        setCart(anotherProducts);
      }

      setCart(prevProducts =>
        prevProducts.map(product => {
          if (productFound.productId === product.productId) {
            return {
              ...product,
              quantity: productFound.quantity - 1,
            };
          }

          return product;
        }),
      );

      Cookie.set('@corebiz:cart', [...cart]);
    },
    [cart],
  );

  const addToCart = useCallback(
    (product: ProductType) => {
      const productFound = cart.find(
        cartProduct => cartProduct.productId === product.productId,
      );

      if (!productFound) {
        setCart(prevProducts => [
          ...prevProducts,
          {
            ...product,
            quantity: 1,
          },
        ]);
      } else {
        setCart(prevProducts =>
          prevProducts.map(product => {
            if (productFound.productId === product.productId) {
              return {
                ...product,
                quantity: productFound.quantity + 1,
              };
            }

            return product;
          }),
        );
      }

      Cookie.set('@corebiz:cart', [...cart, product]);
    },
    [cart],
  );

  const removeFromCart = useCallback(
    (id: number) => {
      const findProduct = cart.find(product => product.productId === id);

      if (findProduct) {
        const productFinal = cart.filter(
          product => product.productId !== findProduct.productId,
        );

        setCart(productFinal);
        Cookie.set('@corebiz:cart', productFinal);
      }
    },
    [setCart, cart],
  );

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increment,
        decrement,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCart must be used with an CartProvider');
  }

  return context;
}
