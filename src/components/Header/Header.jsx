// Dependencies
import { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// Redux Toolkit logic
import { logout, authenticationState } from '../../features/slices/authSlice';

// Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import './Header.css';
import { useState } from 'react';



const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isAuthenticated } = useSelector(authenticationState);
  const [isLoginPage, setIsLoginPage] = useState(false)

  /**
   * Logout function triggered by the click event
   */
  const handleLogout = async (e) => {
    dispatch(logout());
    navigate('/dashboard');
  };
  useEffect(() => {
    if (location === 'login') {
      setIsLoginPage(true)
    }
  }, [])

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
              <Link className='main-nav-item' to='/dashboard'>
                <i icon={faUserCircle} aria-hidden={true}></i>
                Profile
              </Link>
              <Link className='main-nav-item' to='/' onClick={handleLogout}>
                <i icon={faSignOutAlt} aria-hidden={true}></i>
                Logout
              </Link>
            </>
          ) : location.pathname === "/login" ? (''
          ) : (
            <Link icon={faUserCircle} className='main-nav-item' to='/login'>
              <i icon={faUserCircle} aria-hidden={true}></i>
              Sign In
            </Link>
          )
          }

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