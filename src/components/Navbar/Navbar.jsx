import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate('/');
  };

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleMenuClick = (hash) => {
    if (location.pathname !== '/') {
      navigate(`/#${hash}`);
    } else {
      window.location.hash = hash;
    }
    setMenu(hash);
    closeMenu();
  };

  useEffect(() => {
    const scrollToHash = () => {
      if (location.hash) {
        const element = document.getElementById(location.hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    scrollToHash();
  }, [location]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false); // Close the menu when resizing to a larger screen
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="navbar">
      <Link to="/" className="navbar-logo">
        <h1>Kevin's Fried Creations</h1>
      </Link>
      <div
        className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-menu ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => { setMenu("home"); closeMenu(); }} className={`${menu === "home" ? "active" : ""}`}>Home</Link>
        <a
          onClick={() => handleMenuClick('explore-menu')}
          className={`${menu === "menu" ? "active" : ""}`}
        >
          Menu
        </a>
        <a
          onClick={() => handleMenuClick('app-download')}
          className={`${menu === "mob-app" ? "active" : ""}`}
        >
          Mobile App
        </a>
        <a
          onClick={() => handleMenuClick('footer')}
          className={`${menu === "contact" ? "active" : ""}`}
        >
          Contact Us
        </a>
        <li className="mobile-only">
          <img src={assets.search_icon} alt="Search" />
        </li>
        <li className="mobile-only">
          <Link to="/cart" className="navbar-search-icon">
            <img src={assets.basket_icon} alt="Cart" />
            <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
          </Link>
        </li>
        {!token ? (
          <li className="mobile-only">
            <button onClick={() => { setShowLogin(true); closeMenu(); }}>Sign In</button>
          </li>
        ) : (
          <li className="mobile-only">
            <div className="navbar-profile">
              <img src={assets.profile_icon} alt="Profile" />
              <ul className="navbar-profile-dropdown">
                <li onClick={() => { navigate('/myorders'); closeMenu(); }}>
                  <img src={assets.bag_icon} alt="Orders" /> <p>Orders</p>
                </li>
                <hr />
                <li onClick={() => { logout(); closeMenu(); }}>
                  <img src={assets.logout_icon} alt="Logout" /> <p>Logout</p>
                </li>
              </ul>
            </div>
          </li>
        )}
      </ul>
      <div className={`navbar-right ${isMenuOpen ? 'hidden' : ''}`}>
        <img src={assets.search_icon} alt="Search" />
        <Link to="/cart" className="navbar-search-icon">
          <img src={assets.basket_icon} alt="Cart" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign In</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile_icon} alt="Profile" />
            <ul className="navbar-profile-dropdown">
              <li onClick={() => navigate('/myorders')}>
                <img src={assets.bag_icon} alt="Orders" /> <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout_icon} alt="Logout" /> <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
