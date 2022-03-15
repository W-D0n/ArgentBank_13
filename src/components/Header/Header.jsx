// Dependencies
import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import propTypes from 'prop-types';

// Styles
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import './Header.css';


// Temporary variables
const isConnected = false;
// const user = useSelector((state) => state.auth.firstName);
const user = 'Tony';

const Header = () => {
  return (
    <div>
      <nav className='main-nav'>
        <Link className='main-nav-logo' to={`/`}>
          <img className='main-nav-logo-image' src='/src/assets/img/argentBankLogo.png' alt='Argent Bank Logo' />
          <h1 className='sr-only'>Argent Bank</h1>
        </Link>
        <Menu>
          {!isConnected ? (
            <Link icon={faUserCircle} className='main-nav-item' to='/login'>
              <i icon={faUserCircle}></i>
              Sign In
            </Link>
          ) : (
            <>
              <Link className='main-nav-item' to='/login'>
                <i icon={faUserCircle}></i>
                {user}
              </Link>
              <Link className='main-nav-item' to='/login'>
                <i icon={faSignOutAlt}></i>
                Logout
              </Link>
            </>
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