import { useState, useEffect } from 'react';
import axios from 'axios';

const BASE_URL = 'http://localhost:3001';
// custom hook fetch

export default function useFetch(token) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [userData, setUserData] = useState({});
  const [keyData, setKeyData] = useState({});

  useEffect(() => {
    async function fetchUser() {
      // try {
      // tester axios ici pour vérif son fonctionnement
      // const response = await fetch('http://localhost:3001/api/v1/user/profile',
      const response = await axios.post(
        BASE_URL + '/api/v1/user/profile',
        {},
        { headers: { authorization: 'Bearer ' + token } }
      );
      // console.log(response.data)
      // console.log(response)
      // } catch (err) {
      //   setError(err);
      //   console.log(err);
      // } finally {
      //   setIsLoaded(true);
      // }
    }
    fetchUser();
  }, [token]);

  return {
    userData,
    keyData,
    isLoaded,
    error,
  };
}