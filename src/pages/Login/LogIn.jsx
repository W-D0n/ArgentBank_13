// Dependencies
import { useRef, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";

// Components
import { Loader } from '../../components/Loader/Loader'
// Services
import AuthService from '../../services/authService'

// Style
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import './Login.css'

const users = [
  {
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tony@stark.com',
    password: 'password123'
  },
  {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'steve@rogers.com',
    password: 'password456'
  }
]


/**
 * Contain the authentification's form
 * 
 * @returns {reactElement}
 */
const SignIn = () => {
  const navigate = useNavigate();

  const userRef = useRef();
  const errRef = useRef();

  // Redux


  //Login informations
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errMsg, setErrMsg] = useState('');

  //Verifications
  const [isValidPassword, setValidPassword] = useState(false);
  const [isValidEmail, setValidEmail] = useState(false);
  const [isChecked, setChecked] = useState(false);

  const [isConnected, setConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const isLoading = true;

  // utilisation regex pr validation input

  // Set the focus on input when it's load
  useEffect(() => {
    userRef.current.focus();
  }, [])
  // Reset error msg when input values change
  useEffect(() => {
    setErrMsg('');
  }, [email, password]);

  /**
   * @function removeError remove decoration of error
   * @param {Object} e event
   */
  const removeError = (e) => {
    e.target.classList.remove("field-error");
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }

    AuthService.login(email, password)
      .then(resolved => {
        // Solution 2 : init du token avant la nav dans le profil.
        // utilisation de redux (initialiser le token : ici on set)
        // principe de get/set, c'est le token qui est transféré entre les pages (vérif un token valide)
        console.log('resolved :', res.data.body.token)
        console.log('resolved type :', typeof (resolved))
        // dans le profile on get
        navigate('/profile')
      })
      .catch(rejected => {
        console.log(rejected)
        console.log(rejected.status)
        setErrMsg(rejected.message)
      })
    setEmail('');
    setPassword('');
  };

  return (
    <main className='main bg-dark'>
      <section className='sign-in-content'>
        {isLoading ? (
          <div className="loader-wrapper">
            <Loader />
          </div>
        ) : (
          <>
            <i className='fa fa-user-circle sign-in-icon'></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
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
                <p
                  ref={errRef}
                  className={errMsg ? 'errMsg' : 'offscreen'}
                  aria-live='assertive'
                >
                  {errMsg}
                </p>
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

export default SignIn