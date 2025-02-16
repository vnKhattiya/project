import React, { useState } from 'react';
import { NavLink } from 'react-router';
import { useCart } from "../../CartContext";

const Header = () => {
  const { cartItems } = useCart();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // สถานะการล็อกอิน

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <header className="p-3 border-bottom bg-success text-white">
  <div className="container">
    <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
      <a href="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-bootstrap me-2" viewBox="0 0 16 16">
          <path d="M5.062 12h3.475c1.804 0 2.888-.908 2.888-2.396 0-1.102-.761-1.916-1.904-2.034v-.1c.832-.14 1.482-.93 1.482-1.816 0-1.3-.955-2.11-2.542-2.11H5.062zm1.313-4.875V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23zm0 3.762V8.162h1.822c1.236 0 1.887.463 1.887 1.348 0 .896-.627 1.377-1.811 1.377z"></path>
          <path d="M0 4a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v8a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4zm4-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3z"></path>
        </svg>
      </a>
      <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0 d-flex flex-row">
        <li>
          <NavLink 
            className={({ isActive }) => 
              `nav-link px-2 text-white ${isActive ? 'fw-bold' : ''}`
            } 
            to='/' 
            end
          >
            Home
          </NavLink>
        </li>
      </ul>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
      </form>
      <div className="dropdown text-end">
        <a href="#" className="d-block text-white text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          {isLoggedIn ? (
            <img src="https://github.com/mdo.png" alt="Profile" width={32} height={32} className="rounded-circle" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"/>
            </svg>
          )}
        </a>
        <ul className="dropdown-menu text-small">
          {!isLoggedIn ? (
            <li><NavLink className="dropdown-item" to="/Login" onClick={handleLogin}>Login</NavLink></li>
          ) : (
            <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
          )}
        </ul>
      </div>
      <NavLink 
        className={({ isActive }) => 
          `nav-link px-2 text-white position-relative ${isActive ? 'fw-bold' : ''}`
        } 
        to='/cart'
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
        </svg>
        {cartItems.length > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {cartItems.reduce((total, item) => total + item.quantity, 0)}
          </span>
        )}
      </NavLink>
    </div>
  </div>
</header>

  );
}

export default Header;