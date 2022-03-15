// Dependencies
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import clearStorage from '../../services/clearStorage'
import purgeStore from '../../services/clearStorage'


const Logout = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
		dispatch(purgeStore());
		navigate("/");
	}, []);

	return null;
}

export default Logout