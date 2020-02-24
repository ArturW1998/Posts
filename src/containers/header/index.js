import React, {useContext} from "react";
import {Link, Redirect} from "react-router-dom";
import './header.css';
import {UserContext} from "../../context";
import localStorageService from "../../services";

const Header = () => {
  const [state, setState] = useContext(UserContext);
  const {users, userAuth, articles} = state;

  const onLogout = (e) => {
    e.preventDefault();


    users.map(item => {
      if (item.auth) {
        item.auth = false
      }
      return item;
    });
    setState(state=>({...state, users, userAuth: null}));
    const newState = {
      users,
      articles
    };

    const service = new localStorageService();
    service.setItem(newState);

    return <Redirect to="/"/>
  };

  return (
    <header>
      <div className="container">
        <div className="header-row">
          <Link to="/">Logo</Link>
          {userAuth &&
            <>
              <p>{userAuth.userName}</p>
              <Link onClick={onLogout} to="logout" className="user">Logout</Link>
            </> }
        </div>
      </div>
    </header>
  )
}

export default Header;