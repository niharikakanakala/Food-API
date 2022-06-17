import { Outlet, Link } from "react-router-dom";
import { Fragment, useContext } from "react";

import { UserContext } from "../../context/user.context";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";

import { ReactComponent as CrownLogo } from "../../assets/logo.svg";

export const Navigation = () => {
  const { currentUser } = useContext(UserContext);

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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
