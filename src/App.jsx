// Dependencies
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Components
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import LogIn from './pages/Login/LogIn';
import Profile from './pages/Profile/Profile';
import Error from './pages/Error/Error';


/**
 * @namespace App
 */

/**
 * The main component. It contains the router.
 * @memberof App
 * @function
 * @return {ReactElement} jsx to be injected in the html
 */
const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<LogIn />} />
        <Route path='profile' element={<Profile />}>
          <Route path=':id' element={<Profile />} />
          {/* <Route path='transaction' element={<Transaction />} /> */}
        </Route>
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
