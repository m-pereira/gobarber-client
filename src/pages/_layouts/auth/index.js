import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Content } from './styles';

const AuthLayout = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
);

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AuthLayout;
