// Dependencies
// Components
//Style
import './Feature.css';

const Feature = ({ src, alt, title, text }) => {
  return (
    <div className='feature-item'>
      <img src={src} alt={alt} className='feature-icon' />
      <h3 className='feature-item-title'>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default Feature