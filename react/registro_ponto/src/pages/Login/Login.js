import React, { useState, useEffect } from 'react';
import { connect, useSelector } from 'react-redux';
import LoginForm from '../../components/LoginForm/LoginForm';

function Login(props) {

  const apiUrl = 'https://randomuser.me/api/';

  const [users, setUsers] = useState([]);

  const user = useSelector((state) => {
    return state.user;
  });

  useEffect(() => {

    // const storedUsers = fromCookie();
    // if (storedUsers && storedUsers.users && storedUsers.users.length > 0) {
    //   setUsers(storedUsers.users);
    // } else {
    //   getUsers();
    //   toCookie();
    // }
  }, []);

  const getUsers = async () => {
    try {
      const rawResponse = await fetch(apiUrl + '?results=20');
      const jsonResponse = await rawResponse.json();
      setUsers(jsonResponse.results);
    } catch (err) {
      console.log(err);
    }
  };

  const toCookie = () => {
    localStorage.setItem('599_users', JSON.stringify({ users }));
  }

  const fromCookie = () => {
    const stringObject = localStorage.getItem('599_users');
    return JSON.parse(stringObject);
  }

  return (
    <div id="login">
      <h2>Login</h2>
      <p>Nome: {user.name}</p>
      <LoginForm />
    </div>
  );
}

export default Login;