// Dependencies
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Components
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Home from '../pages/Home';
import Login from '../pages/Login/Login';
import Dashboard from '../pages/Dashboard/Dashboard';
import Error from '../pages/Error/Error';

/**
 * The main component. It contains the router.
 * @return {ReactElement} jsx to be injected into the html
 */
const App = () => {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='*' element={<Error />} />
      </Routes >
      <Footer />
    </BrowserRouter >
  )
}

export default App
