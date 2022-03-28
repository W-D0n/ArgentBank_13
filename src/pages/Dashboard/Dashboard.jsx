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
 * Page which contain the User informations react/redux calls logic
 * @memberof Dashboard
 * 
 * @property {String} name.
 * @property {String} lastname
 * @property {String} userId
 * @property {String} paramsId
 * @property {Object} transactions
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

  // Import state from the store with needed values  
  const { firstName, lastName } = useSelector(userCurrentState);

  /**
   * @function handleInputChange on input change, update local state of inputs
   * @param {*} e event triggered
   */
  useEffect(() => {
    dispatch(getUser())
  }, [dispatch]);

  /**
   * Event handling wich open the changeName form and set first/last name to empty field
   * @function 
   */
  const handleEditName = () => {
    setName({ firstName: '', lastName: '' });
    setIsEditing(true);
  }

  /**
   * @function handleInputChange Event handling wich render user input
   * @param {*} e event triggered
   */  
  const handleInputChange = (e) => {
    console.log('handleInputChange')
    const { name, value } = e.target;
    setName((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  /**
   * @function handleInputChange Event handling wich render user input
   * @param {*} e event triggered
   * @param {Object} name object wich containt
   */ 
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