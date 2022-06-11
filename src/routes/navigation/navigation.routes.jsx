import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import "./navigation.styles.scss";

import { ReactComponent as CrownLogo } from "../../assets/logo.svg";

export const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" height="60" width="80" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            LOGIN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};
