import React from 'react';
import PropTypes from 'prop-types';
import MenuIcon from 'mdi-react/MenuIcon';
import * as theme from '../../public/static/theme';

const Header = ({
  toggleDrawer,
}) => (
  <div style={{display : 'flex',justifyContent: 'space-between'}}>
    <MenuIcon
      color={theme.colors.grey}
      onClick={toggleDrawer}
      size={30}
      style={{ cursor: 'pointer' }}
    />
    <p style={{
      color: theme.colors.grey,
      fontSize: 12,
    }}>calm</p>
  </div>
);

Header.propTypes = {
  toggleDrawer: PropTypes.func.isRequired,
};

export default Header;
