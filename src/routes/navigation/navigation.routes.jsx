import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import { CartIcon } from "../../components/cart-icon/cart-icon.components";

import { CartDropdown } from "../../components/cart-dropdown/cart-dropdown.components";

import { UserContext } from "../../context/user.context";

import { CartContext } from "../../context/cart.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import { ReactComponent as CrownLogo } from "../../assets/logo.svg";

import "./navigation.styles.scss";

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" height="60" width="80" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/pizza">
            Pizzas
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={signOutUser}>
              {" "}
              LOGOUT{" "}
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              LOGIN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
