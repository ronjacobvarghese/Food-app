import React, { useState, useEffect, useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [isAnimated, setIsAnimated] = useState(false);

  const btnClasses = `${classes.button} ${isAnimated ? classes.bump : ""}`;
  const { items } = cartCtx;

  const numberOfItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setIsAnimated(true);
    const timer = setTimeout(() => {
      setIsAnimated(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart </span>
      <span className={classes.badge}>{numberOfItems}</span>
    </button>
  );
};

export default HeaderCartButton;
