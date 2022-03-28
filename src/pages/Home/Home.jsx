// Components
import Hero from '../../components/Hero';
import Feature from '../../components/Feature';
import { featuresData } from '../../app/data/featuresData';

// Style
import './Home.css';

/**
 * Home page with structure and link to login page
 * @memberof Home
 * @param {Object} featuresData a list of features offered by the companie 
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