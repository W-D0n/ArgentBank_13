// Dependencies
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// Redux Toolkit logic
import { logout } from '../../features/slices/authSlice';

// Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import './Header.css';



const Header = () => {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  // const isAuthenticated = true;
  const user = useSelector((state) => state.auth.firstName);

  /**
   * Logout function triggered by the click event
   */
  const handleLogoutClick = async (e) => {
    dispatch(logout());
  };

  return (
    <div>
      <nav className='main-nav'>
        <Link className='main-nav-logo' to={`/`}>
          <img className='main-nav-logo-image' src='/src/assets/img/argentBankLogo.png' alt='Argent Bank Logo' />
          <h1 className='sr-only'>Argent Bank</h1>
        </Link>
        <Menu>
          {isAuthenticated ? (
            <>
              { }
              <Link className='main-nav-item' to='/dashboard'>
                <i icon={faUserCircle}></i>
                Profile
              </Link>
              <Link className='main-nav-item' to='/' onClick={handleLogoutClick}>
                <i icon={faSignOutAlt}></i>
                Logout
              </Link>
            </>
          ) : (
            <Link icon={faUserCircle} className='main-nav-item' to='/login'>
              <i icon={faUserCircle}></i>
              Sign In
            </Link>
          )}

        </Menu>
      </nav>
    </div>
  )
}

export default Header

const Menu = styled.div`

`;
const Icon = styled(FontAwesomeIcon)`
	text-decoration: none;
	margin-right: 0.5rem;
`;