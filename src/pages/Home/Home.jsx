// Dependencies
// import styled from 'styled-components';
// import propTypes from 'prop-types';

// Components
import Hero from '../../components/Hero';
import Feature from '../../components/Feature';
import { featuresData } from '../../app/data/featuresData';

// Style
import './Home.css';

/**
 * Home page with structure and link to login page
 * @memberof Home
 * 
 * @returns {reactElement}
 */

const Home = () => {

  return (
    <main>
      <Hero />
      <section className='features'>
        <h2 className='sr-only'>Features</h2>
        {featuresData && featuresData.map((e, i) => (
          <Feature key={i} src={e.imgSrc} alt={e.alt} title={e.title} text={e.text} />
        ))}
      </section>
    </main>
  )
}

export default Home