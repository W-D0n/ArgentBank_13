// Components
import '../Button/Button.css';
import './Account.css';


/**
 * Component which show balance of an account
 * 
 * @param {Srting} title how to call this account
 * @param {Srting} type charset which match with account type xXXXX
 * @param {Number} amount how much money on account
 * @param {Srting} description subtext of account title
 * @param {Boolean} isNegative extra prop to style account card when amount < 0
 */
const AccountCard = ({ type, title, amount, description, isNegative }) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  });
  let money = formatter.format(amount);

  return (
    <section className={`account ${isNegative ? 'alert' : ''}`}>
      <div className='account-content-wrapper'>
        <h3 className='account-title'>{title} ({type})</h3>
        <p className='account-amount'>{money}</p>
        <p className='account-amount-description'>{description}</p>
      </div>
      <div className='account-content-wrapper cta'>
        <button className='transaction-button'>View transactions</button>
      </div>
    </section>
  )
}

export default AccountCard