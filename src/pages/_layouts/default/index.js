import React from 'react';
import PropTypes from 'prop-types';
import Header from '~/Components/Header';
import { Wrapper } from './styles';

const DefaultLayout = ({ children }) => (
  <Wrapper>
    <Header>{children}</Header>
  </Wrapper>
);

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default DefaultLayout;
