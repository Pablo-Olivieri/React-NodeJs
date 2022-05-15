import '../../styles/Header.css';

import React from 'react';

const Header = (props) => {
    return (
        <header>
            <div className ='holder'>
                <div className="logo">
                    <img src='images/home/logo.png' width='100'
                        alt="Developers SA" />
                        <h1>    Developers SA</h1>

                        </div>
                </div>
        </header>


       
    );
}
export default Header;