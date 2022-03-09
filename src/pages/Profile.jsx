// Dependencies
import { useState } from 'react';
// import styled from 'styled-components';
// import propTypes from 'prop-types';

// Components
import Card from '../components/ui/AccountCard';
// Styles
import '../assets/styles/Account.css';
import '../assets/styles/Button.css';

/**
 * There is user informations and the list of all transactions
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

  const account = [
    {
      id: 1,
      type: 'x8349',
      title: 'Argent Bank Checking',
      amount: '2082.79',
      description: 'Available Balance',
      isNegative: false
    },
    {
      id: 2,
      type: 'x6712',
      title: 'Argent Bank Savings',
      amount: '10928.42',
      description: 'Available Balance',
      isNegative: false
    },
    {
      id: 3,
      type: 'x8349',
      title: 'Argent Bank Credit Card',
      amount: '184.30',
      description: 'Current Balance',
      isNegative: false
    }
  ]
  //* 
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
    il faut faire un onClick={} pour afficher le changement de nom
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
                <div className="user-button">
                  <button className="user-edit-button" type="submit">
                    Save
                  </button>
                  <button
                    className="user-edit-button"
                    onClick={() => setIsEditing(false)}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </h1>
            <button className='edit-button' onClick={handleClickEdit}>Edit Name</button>
          </>
        ) : (
          <>
            <h1>Welcome back
              <br />
              {userName.firstName} {userName.lastName} !
            </h1>
            <button className='edit-button' onClick={handleClickEdit}>Edit Name</button>
          </>
        )
        }
      </div>
      <h2 className='sr-only'>Accounts</h2>
      {account && account.map((e, i) => (
        <Card key={i} type={e.type} title={e.title} amount={Number(e.amount)} description={e.description} isNegative={Math.sign(e.amount) < 0 ? true : false} />
      ))}
    </main>
  )
}

const userIdentity = () => { }

export default Profil