import React, { useState, useEffect } from 'react';
import './App.css';
import Login from './pages/Login/Login';
import { BrowserRouter, Link, Redirect, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';


function App(props) { 

  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState('');
  const [entryTime, setEntryTime] = useState('');
  const [outTime, setOutTime] = useState('');
  // const [user, setUser] = useState({
  //   name: 'Pietro Ribeiro',
  //   email: '',
  //   password: '',
  //   company: 'Let\'s Code'
  // });

  useEffect(() => {
    console.log(props);
  }, []);

  const isLogged = false;

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

  // const changeName = (newName) => {
  //   setUser({...user, name: newName});
  // }

  // const defineUser = (newUser) => {
  //   setUser(newUser);
  // }

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

        <p>Nome: {props.user.name}</p>
        {/* <p>E-mail: {user.email}</p>
        <p>Senha: {user.password}</p> */}
        
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
  }
};

export default connect(mapStateToProps)(App);

// export default App;
