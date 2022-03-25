// Dependencies
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Services
import { accountsData } from '../../app/data/accountsData';
import { getUser, setUser, userCurrentState } from '../../features/slices/userSlice';

// Components
import Card from '../../components/AccountCard/AccountCard';

// Style
import '../../components/Button/Button.css';
import './Dashboard.css';

/**
 * User informations and list of all transactions.
 * @memberof Dashboard
 * 
 * @property {String} name.
 * @property {String} lastname
 * @property {String} userId
 * @property {String} paramsId
 * 
 * 
 * @returns {reactElement}
 */

const Profile = () => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState({
    firstName: '',
    lastName: ''
  });

  const { firstName, lastName } = useSelector(userCurrentState);

  console.log('selector Fname : ', firstName)
  console.log('state name : ', name)
  console.log('state fname : ', name.firstName)
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch]);

  // useEffect(() => setIsEditing(false), [firstName, lastName]);
  /**
   * Event handling wich open the changeName form and set first/last name to empty field
   * @function 
   */
  const handleEditName = () => {
    setName({ firstName: '', lastName: '' });
    setIsEditing(true);
  }

  /**
   * Event handling wich render user input
   * @param {*} event 
   */
  const handleInputChange = (e) => {
    console.log('handleInputChange')
    const { name, value } = e.target;
    setName((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  const handleChangeName = (e) => {
    e.preventDefault();
    if (name.firstName === '' || name.lastName === '') {
      return
    };
    dispatch(setUser(name));
    setIsEditing(false);
  }
  const handleCancelChangeName = () => {
    setIsEditing(false);
  }

  return (
    <main className='main bg-dark'>
      <div className='header'>
        {isEditing ? (
          <>
            <h1>Welcome back<br />
              <form onSubmit={handleChangeName}>
                <div className="user-input">
                  <label htmlFor='first-name'></label>
                  <input
                    className="user-input-editor"
                    type="text"
                    id="first-name"
                    name="firstName"
                    placeholder={firstName}
                    value={name.firstName}
                    onChange={handleInputChange}
                  />
                  <label htmlFor='last-name'></label>
                  <input
                    className="user-input-editor"
                    type="text"
                    id="last-name"
                    name='lastName'
                    placeholder={lastName}
                    value={name.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="edit-buttons">
                  <button
                    className="save-edit-button"
                  >
                    Save
                  </button>
                  <button
                    className="cancel-edit-button"
                    onClick={handleCancelChangeName}
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
              {firstName} {lastName} !
            </h1>
            <button className='edit-button' type='button' onClick={handleEditName}>Edit Name</button>
          </>
        )
        }
      </div>
      <h2 className='sr-only'>Accounts</h2>
      {accountsData.map((e, i) => (
        <Card key={i} type={e.type} title={e.title} amount={Number(e.amount)} description={e.description} isNegative={Math.sign(e.amount) < 0 ? true : false} />
      ))}
    </main>
  )
}

export default Profile