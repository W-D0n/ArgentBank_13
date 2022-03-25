// Dependencies
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// Services
import { login, authenticationState } from '../../features/slices/authSlice';

// Style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import './Login.css'

/**
 * Contain the authentification's form 
 * @returns {reactElement}
 */
const logIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuthenticated, error } = useSelector(authenticationState);
  const [creditential, setCreditential] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e) => {
    const { name, type, checked, value } = e.target;
    setCreditential((previousState) => ({
      ...previousState,
      [name]: type === 'checkbox' ? checked : value
    }))
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(creditential));
  }

  useEffect(() => {
    isAuthenticated && navigate('/dashboard');
  })
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
            // onFocus={removeError}
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
            {error ? <ErrorMessage>hoho</ErrorMessage> : null}
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

const Error = styled.div`
  margin-top: 15px;
  color: red;
`;