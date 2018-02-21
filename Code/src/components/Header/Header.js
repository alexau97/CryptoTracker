import React from 'react';

import NavigationItems from './NavigationItems/NavigationItems';

import classes from './Header.css';

const Header = (props) => (
    <header className={classes.Header}>
        <div className={classes.Logo}>
            onCareer
        </div>
        <div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
    </header>

);

export default Header;
