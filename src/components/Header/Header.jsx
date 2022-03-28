// Dependencies
import { useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Redux Toolkit logic
import { logout, authenticationState } from '../../features/slices/authSlice';

// Styles
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
        <div>
          {isAuthenticated ? (
            <>
              <Link className='main-nav-item' to='/' onClick={handleLogout}>
                <i aria-hidden={true}></i>
                Logout
              </Link>
            </>
          ) : location.pathname === "/login" ? (''
          ) : (
            <Link className='main-nav-item' to='/login'>
              <i aria-hidden={true}></i>
              Sign In
            </Link>
          )
          }

        </div>
      </nav>
    </div>
  )
}

export default Header