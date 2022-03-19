// Dependencies
import { useState } from 'react';

// Components
import Card from '../../components/AccountCard/AccountCard';

// Services
import { REGEX_VALIDSTRING } from '../../constants';
import { accountsData } from '../../app/data/accountsData';
// import { getUserProfile, editUserProfile } from '../../features/user/userSlice';
import {
  postUserProfile,
  getUserProfile,
  setUserProfile
} from '../../features/services/apiService';

// Style
import '../../components/Button/Button.css';
import './Dashboard.css';

/**
 * User informations and list of all transactions.
 * @memberof Dashboard
 * 
 * @property {String} firstName
 * @property {String} lastname
 * @property {String} userId
 * @property {String} paramsId
 * 
 * 
 * @returns {reactElement}
 */

const Profil = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [isEditing, setIsEditing] = useState(false)

  const handleClickEdit = (e) => {
    setFirstName('');
    setLastName('');
    setIsEditing(!isEditing);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const firstNameIsValid = REGEX_VALIDSTRING.test(firstName)
    const lastNameIsValid = REGEX_VALIDSTRING.test(lastName)
    setFirstName();
    setLastName();
  }

  return (
    <main className='main bg-dark'>
      <div className='header'>
        {isEditing ? (
          <>
            <h1>Welcome back<br />
              <form onSubmit={handleSubmit}>
                <div className="user-input">
                  <label htmlFor='first-name'></label>
                  <input
                    className="user-input-editor"
                    type="text"
                    id="first-name"
                    placeholder={userName.firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                  <label htmlFor='last-name'></label>
                  <input
                    className="user-input-editor"
                    type="text"
                    id="last-name"
                    placeholder={userName.lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="edit-buttons">
                  {/* utiliser component */}
                  <button className="save-edit-button" type="submit">
                    Save
                  </button>
                  {/* utiliser component */}
                  <button
                    className="cancel-edit-button"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </h1>
          </>
        ) : (
          <>
            <h1>Welcome back
              <br />
              {userName.firstName} {userName.lastName} !
            </h1>
            {/* utiliser component */}
            <button className='edit-button' onClick={handleClickEdit}>Edit Name</button>
          </>
        )
        }
      </div>
      <h2 className='sr-only'>Accounts</h2>
      {ACCOUNTS_DATA.map((e, i) => (
        <Card key={i} type={e.type} title={e.title} amount={Number(e.amount)} description={e.description} isNegative={Math.sign(e.amount) < 0 ? true : false} />
      ))}
    </main>
  )
}

const userIdentity = () => { }

export default Profil