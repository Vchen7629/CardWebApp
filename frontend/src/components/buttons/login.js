import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import "./styling/headerbuttons.css"

const Login = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/login');
  };

  return (
    <div>
        <button className="logins" onClick={handleButtonClick}>
          <FontAwesomeIcon icon={faRightToBracket}/>
            <span className="fatextmargin">
                  Login
            </span>
        </button>
    </div>
  );
}

export default Login;