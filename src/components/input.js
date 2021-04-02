import React from 'react';
import PropTypes from 'prop-types';
import styles from '../styles/Input.module.css';

const Input = ({ className, disabled = false, ...props }) => {
  return (
    <input
      className={`${styles.input}${className ? ` ${className}` : ''}`}
      disabled={disabled}
      {...props}
    />
  )
}

export { Input };

Input.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

