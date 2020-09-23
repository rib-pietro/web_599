import React, { useState, useEffect } from 'react';
import LoginForm from '../../components/LoginForm/LoginForm';

function Login(props) {

  const apiUrl = 'https://randomuser.me/api/';

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUsers = fromCookie();
    if (storedUsers && storedUsers.users && storedUsers.users.length > 0) {
      setUsers(storedUsers.users);
    } else {
      getUsers();
      toCookie();
    }
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
      <LoginForm/>
      <ul>
      {users.length > 0 ?
        users.map((user, idx) => (
        <li key={idx}>E-mail: {user.email}, Senha: {user.login.password}</li>
      )) : <p>Loading...</p>}
      </ul>
    </div>
  );
}

export default Login;