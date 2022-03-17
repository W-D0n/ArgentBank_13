// Dependencies
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import clearStorage from '../../common/services/clearStorage'
import purgeStore from '../../common/services/clearStorage'


const Logout = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
		dispatch(purgeStore());
		navigate("/");
	}, []);

	return null;
}

export default Logout