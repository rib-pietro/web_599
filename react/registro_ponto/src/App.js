import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard/UserCard';
import RegisterButton from './components/RegisterButton/RegisterButton';
import LoginForm from './components/LoginForm/LoginForm';
import Login from './pages/Login/Login';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';


function App() { 

  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState('');
  const [entryTime, setEntryTime] = useState('');
  const [outTime, setOutTime] = useState('');
  const [user, setUser] = useState({
    name: '',
    company: 'Let\'s Code'
  });

  // const [state, setState] = useState(null);

  // useEffect(() => {
  //   if (entryTime) {
  //     alert('Parabéns, você veio pro trampo hoje!');
  //   }
  // }, [entryTime]);

  // useEffect(() => {
  //   console.log('Cheguei! Ou atualizei, não sei');

  //   return ();
  // }, []);

  const isLogged = false;

  const employees = ['Pietro', 'Ricardo', 'André', 'Priscila'];

  // const user = {
  //   name: 'Pietro Ribeiro',
  //   company: 'Let\'s Code'
  // };

  const getCurrentTime = () => {
    const currTime = new Date();
    const hours = currTime.getHours();
    const minutes = currTime.getMinutes();
    const seconds = currTime.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  }

  const computeEntry = () => {
    setEntryTime(getCurrentTime());
  }

  const computeOut = () => {
    setOutTime(getCurrentTime());
  }

  const changeName = (newName) => {
    setUser({...user, name: newName});
  }

  setInterval(() => {
    setTime(getCurrentTime());
  }, 1000);

  return (
    <>
      <BrowserRouter>
        <header>
          <h1>Registro de Ponto #599</h1>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/feriados">Feriados</Link>
            </li>
          </ul>
        </header>
        
        <Switch> 
          {/* Conteúdo que varia */}

          <Route exact path="/">
            {isLogged ? 
              (<h2>Home</h2>) :
              (<Redirect to="/login" />)
            }
          </Route>

          <Route exact path="/login">
            {isLogged ? 
              (<Redirect to="/" />) :
              (<>
                <Login />
              </>)
            }
          </Route>

          <Route exact path="/feriados">
            {isLogged ? 
              (<h2>Feriados</h2>) :
              (<Redirect to="/login" />)
            }
          </Route>

        </Switch>

        <footer>
          <p>&copy; Todos os direitos reservados. 2020.</p>
        </footer>
      </BrowserRouter>
    </>
  );
}

export default App;
