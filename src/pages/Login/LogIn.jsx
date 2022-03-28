// Dependencies
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

// Services
import { login, authenticationState } from '../../features/slices/authSlice';

// Style
import './Login.css'

/**
 * Contain the authentification's form and react/redux calls logic
 * @memberof Login
 * @returns {reactElement}
 */
const logIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Import state from the store with needed values  
  const { isAuthenticated, error } = useSelector(authenticationState);
  console.log(error)
  console.log(typeof (error))

  const [creditential, setCreditential] = useState({
    email: '',
    password: ''
  });
  const [err, setErr] = useState(false)
  /**
   * @function handleInputChange on input change, update local state of inputs
   * @param {*} e event triggered
   */
  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;
    setCreditential((previousState) => ({
      ...previousState,
      [name]: type === 'checkbox' ? checked : value
    }))
  }

  /**
   * @function handleSubmit on submit, call authentication logic with redux config
   * @param {*} e event triggered
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(creditential));
    if (error === 400) {
      setErr(true)
    }
  };

  // on page load check if user  is authenticated, and redirect him
  useEffect(() => {
    isAuthenticated && navigate('/dashboard');
  });

  return (
    <main className='main bg-dark'>
      <section className='sign-in-content'>
        <i className='fa fa-user-circle sign-in-icon'></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className='input-wrapper'>
            <label htmlFor='email'>Username(@mail)</label>
            <input
              required
              type='text'
              id='email'
              name='email'
              autoComplete='off'
              value={creditential.email}
              onChange={handleInputChange}
            />
          </div>
          <div className='input-wrapper'>
            <label htmlFor='password'>Password</label>
            <input
              required
              type='password'
              id='password'
              name='password'
              autoComplete='off'
              value={creditential.password}
              onChange={handleInputChange}
            />
            {err && (
              <p className="input-error">
                Merci de saisir un identifiant et mot de passe valide
              </p>
            )}
          </div>
          <div className='input-remember'>
            <input
              type='checkbox'
              id='remember'
              checked={creditential.remember}
              onChange={handleInputChange}
            />
            <label htmlFor='remember'>Remember me</label>
          </div>
          <button className='sign-in-button'>Sign In</button>
        </form>
      </section>
    </main >
  )
}

export default logIn;

/**
 * Styled-tag p for the error message of Login page.
 * @memberof Login
 */
const Error = styled.p`
 font-size: 1rem;
 color: red;
 margin-top: 1rem;
`;