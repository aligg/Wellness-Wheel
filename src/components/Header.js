import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from 'mdi-react/MenuIcon';
import * as theme from '../../public/static/theme';

const Header = ({
  toggleDrawer,
}) => (
  <div>
    <MenuIcon
      color={theme.colors.grey}
      onClick={toggleDrawer}
      size={30}
      style={{ cursor: 'pointer' }}
    />
  </div>
);

Header.propTypes = {
  toggleDrawer: PropTypes.func,
};

export default Header;
