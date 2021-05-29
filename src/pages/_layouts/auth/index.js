import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

const AuthLayout = ({ children }) => <Wrapper>{children}</Wrapper>;

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AuthLayout;
