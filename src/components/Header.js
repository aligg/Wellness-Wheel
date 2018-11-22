import * as theme from "../../public/static/theme.js"
import React from "react";
import MenuIcon from 'mdi-react/MenuIcon';

const Header = ({
    toggleDrawer: toggleDrawer,
}) => {
    return (
        <div>
            <MenuIcon
                color={theme.colors.grey}
                onClick={toggleDrawer}
                size={30}
                style={{cursor: "pointer"}}
            />
        </div>
    );
}

export default Header;
