import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import css from '../../../styles/components/_atom.text.scss';

const Text = (props) => {
  const {
    children,
    className,
    ellipsis,
    primary,
    success,
    danger,
    warning,
    ...otherProps
  } = props;

  const tmpClasses = classNames({
    [css['c-text']]: true,
    [css['c-text--ellipsis']]: ellipsis,
    [css['c-text--primary']]: primary,
    [css['c-text--success']]: success,
    [css['c-text--danger']]: danger,
    [css['c-text--warning']]: warning,
  });

  const classes = `${tmpClasses} ${className}`;
  return <p className={classes} {...otherProps}>{children}</p>;
};

Text.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  ellipsis: PropTypes.bool,
  primary: PropTypes.bool,
  success: PropTypes.bool,
  warning: PropTypes.bool,
  danger: PropTypes.bool,
};

Text.defaultProps = {
  className: '',
  ellipsis: false,
  primary: false,
  success: false,
  danger: false,
  warning: false,
};

export default Text;
