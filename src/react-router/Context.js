import { createContext, useState } from "react";
export const Context = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    //   // setCart([...cart, item]);
    //   setCart((currentCart) => {
    //     const itemExists = currentCart.find((i) => i.title === item.title);
    //     if (itemExists) {
    //       return currentCart.map((i) =>
    //         i.title === item.title ? { ...i, quantity: item.quantity + 1 } : i
    //       );
    //     } else {
    //       return [...currentCart, { ...item, quantity: 1 }];
    //     }
    //   });
    // };

    // setCart([...cart, item]);
    setCart((currentCart) => {
      const itemExists = currentCart.find((i) => i.title === item.title);
      if (itemExists) {
        const newCart = currentCart.map((i) =>
          i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
        );
        console.log(newCart);
        return newCart;
      } else {
        const newCart = [...currentCart, { ...item, quantity: 1 }];
        console.log(newCart);
        return newCart;
      }
    });
  };

  // const increaseQte = (item) => {
  //   setCart((currentCart) => {
  //     currentCart.map((i) =>
  //       i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
  //     );
  //   });
  // };

  const decreaseQte = (item) => {
    setCart((currentCart) => {
      const newCart = currentCart.map((i) =>
        i.title === item.title
          ? { ...i, quantity: Math.max(0, i.quantity - 1) }
          : i
      );
      // console.log(newCart);
      return newCart;
    });
  };

  // const decreaseQte = (item) => {
  //   setCart((currentCart) =>
  //     currentCart.map((i) =>
  //       i.title == item.title
  //         ? { ...i, quantity: Math.max(0, i.quantity - 1) }
  //         : i
  //     )
  //   );
  // };

  const increaseQte = (item) => {
    setCart((currentCart) => {
      // Increase the quantity of the item
      const newCart = currentCart.map((i) =>
        i.title === item.title ? { ...i, quantity: i.quantity + 1 } : i
      );
      // console.log(newCart);
      return newCart;
    });
  };

  const removeFromCart = (itemToRemove) => {
    setCart(cart.filter((item) => item !== itemToRemove));
  };

  const totalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <Context.Provider
      value={{
        cart,
        addToCart,
        increaseQte,
        decreaseQte,
        removeFromCart,
        totalPrice,
      }}
    >
      {children}
    </Context.Provider>
  );
};
