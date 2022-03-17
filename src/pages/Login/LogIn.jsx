// Dependencies
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';

// Components
import { Loader } from '../../components/Loader/Loader'
// Redux Toolkit logic
import { userLogIn } from '../../features/auth/authSlice';

// Style
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styled, { StyledComponent } from 'styled-components';
import './Login.css'


/**
 * Contain the authentification's form
 * 
 * @returns {reactElement}
 */
const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isConnected = useSelector((state) => state.auth.isConnected);
  const errMsg = useSelector((state) => state.auth?.status?.message);
  const status = useSelector((state) => state.auth.status);

  // utilisation regex pr validation input

  /**
   * Set the focus on input when it's load
   */
  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    if (isConnected) {
      navigate("/dashboard")
    }
  }, [isConnected]);

  /**
   * @function removeError remove decoration of error
   * @param {Object} e event
   */
  const removeError = (e) => {
    e.target.classList.remove("field-error");
  };

  /**
   * @function handleSubmit Handle submit event
   * @param {Object} e event
   * @returns 
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch()

    setEmail('');
    setPassword('');
  };

  return (
    <main className='main bg-dark'>
      <section className='sign-in-content'>
        <>
          {isConnected ? (
            navigate("/dashboard")
          ) : (
            <>
              <i className='fa fa-user-circle sign-in-icon'></i>
              <h1>Sign In</h1>
              <form onSubmit={handleSubmit({ email, password })}>
                <div className='input-wrapper'>
                  <label htmlFor='email'>Username(@mail)</label>
                  <input
                    type='text'
                    id='email'
                    name='email'
                    ref={userRef} // to catch focus
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={removeError}
                    autoComplete='off'
                    value={email}
                    required
                  />
                </div>
                <div className='input-wrapper'>
                  <label htmlFor='password'>Password</label>
                  <input
                    type='password'
                    id='password'
                    name='password'
                    onChange={(e) => setPassword(e.target.value)}
                    onFocus={removeError}
                    autoComplete='off'
                    value={password}
                    required
                  />
                  {isError && <Error>{errMsg}</Error>}
                </div>
                <div className='input-remember'>
                  <input
                    type='checkbox'
                    id='remember-me'
                    onChange={(e) => setIsChecked(!IsChecked)}
                  />
                  <label htmlFor='remember-me'>Remember me</label>
                </div>
                <button className='sign-in-button'>Sign In</button>
              </form>
            </>
          )}

        </>
      </section>
      {
        useEffect(() => {
          if (isConnected) {
            navigate('/login');
          }
        }, [isConnected])
      }
    </main >
  )
}

export default SignIn;

const Error = styled.div`
  margin-top: 15px;
  color: red;
`;