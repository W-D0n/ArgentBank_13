// Dependencies
// import styled from 'styled-components';
// import propTypes from 'prop-types';

// Components
import chatIcon from '../../assets/img/icon-chat.png';
import moneyIcon from '../../assets/img/icon-money.png';
import securityIcon from '../../assets/img/icon-security.png';
import Hero from '../../components/Hero';
import Feature from '../../components/Feature';

// Style
import './Home.css';

/**
 * Home page with structure and link to login page
 * @memberof Home
 * 
 * @returns {reactElement}
 */

const Home = () => {
  const featureItems = [
    {
      imgSrc: chatIcon,
      alt: 'Chat Icon',
      title: 'You are our #1 priority',
      text: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.'
    },
    {
      imgSrc: moneyIcon,
      alt: 'Money Icon',
      title: 'More savings means higher rates',
      text: 'The more you save with us, the higher your interest rate will be!'
    },
    {
      imgSrc: securityIcon,
      alt: 'Security Icon',
      title: 'Security you can trust',
      text: 'We use top of the line encryption to make sure your data and money is always safe.'
    }
  ]

  return (
    <main>
      <Hero />
      <section className='features'>
        <h2 className='sr-only'>Features</h2>
        {featureItems && featureItems.map((e, i) => (
          <Feature key={i} src={e.imgSrc} alt={e.alt} title={e.title} text={e.text} />
        ))}
      </section>
    </main>
  )
}

export default Home