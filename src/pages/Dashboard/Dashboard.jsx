// Dependencies
import { useState } from 'react';

// Components
import Card from '../../components/AccountCard/AccountCard';
import { ACCOUNTS_DATA } from '../../app/data/ACCOUNTS_DATA';

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

  const userName = {
    firstName: 'Tony',
    lastName: 'Jarvis'
  }

  // ici je dois appeler le userReducer pour modifier nom/prénom
  // et utiliser les dispatch pour modifier les infos
  const handleClickEdit = (e) => {
    // on click render edit name component/form
    setFirstName('');
    setLastName('');
    setIsEditing(!isEditing);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFirstName(e);
    setLastName(e);
  }

  /* 
    comment display les noms et le/les boutons en fonction de l'état dans lequel je veux être, si je veux éditer ou pas les noms (redux je suppose...)
    comment on remplace un composant react par un autre, et inversement ; comment on revient en arrière (redux aussi ?).
    il faut garder les infos, et update uniquement si elles changent (ne pas update la DB ni fetch inutilement).
  */

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