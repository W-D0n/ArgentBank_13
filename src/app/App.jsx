// Dependencies
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

// Components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home';
import LogIn from '../pages/Login/LogIn';
import Dashboard from '../pages/Dashboard/Dashboard';
import Error from '../pages/Error/Error';

/**
 * The main component. It contains the router.
 * @memberof App
 * @function
 * @return {ReactElement} jsx to be injected in the html
 */
const App = () => {
  const isConnected = useSelector((state) => state.auth.isConnected);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={isConnected ? <Navigate to={'/dashboard'} /> : <Login />} />
        {isConnected && (
          <>
            <Route path='dashboard' element={<Dashboard />} />
          </>
        )}
        <Route path='*' element={<Error />} />
      </Routes >
      <Footer />
    </BrowserRouter >
  )
}

export default App
