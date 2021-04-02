import React from "react";
import PropTypes from "prop-types";
import styles from "../styles/Button.module.css";

const Button = ({
  onClick,
  secondary = false,
  disabled = false,
  className,
  children,
  id,
}) => {
  return (
    <button
      className={`${styles.button}${secondary ? ` ${styles.secondary}` : ""}${
        className ? ` ${className}` : ""
      }`}
      disabled={disabled}
      onClick={onClick}
      id={id}
    >
      {children}
    </button>
  );
};

export { Button };

Button.propTypes = {
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  id: PropTypes.string,
};
