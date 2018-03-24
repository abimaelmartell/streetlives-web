import React, { Component } from "react";
import cx from "classnames";
import "./Header.css";

class Header extends Component {
  render() {
    const { children, size } = this.props;
    const classNames = cx("Header", {
      "Header-large": size === "large",
      "Header-medium": size === "medium",
      "Header-small": size === "small",
    });

    return <h1 className={classNames}>{children}</h1>;
  }
}

export default Header;
