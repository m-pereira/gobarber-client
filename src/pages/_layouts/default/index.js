import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './styles';

const DefaultLayout = ({ children }) => <Wrapper>{children}</Wrapper>;

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default DefaultLayout;
