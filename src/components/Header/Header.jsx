import React, { useState } from 'react';
import './Header.css';

const Header = () => {
    const [menu, setMenu] = useState("home");

    const handleViewMenu = () => {
        setMenu("menu"); 
        const menuSection = document.getElementById('explore-menu'); 
        if (menuSection) {
            menuSection.scrollIntoView({ behavior: 'smooth' }); 
        }
    };

    return (
        <div className='header'>
            <div className='header-contents'>
                <h2>Start your order.</h2>

                <button onClick={handleViewMenu} className={`${menu === "menu" ? "active" : ""}`}>
                    View Menu
                </button>
            </div>
        </div>
    );
};

export default Header;
