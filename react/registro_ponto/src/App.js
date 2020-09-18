import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard/UserCard';
import RegisterButton from './components/RegisterButton/RegisterButton';
import LoginForm from './components/LoginForm/LoginForm';


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
    console.log(newName);
    setUser({...user, name: newName});
  }

  setInterval(() => {
    setTime(getCurrentTime());
  }, 1000);

  return (
    <>
      <LoginForm changeName={changeName}/>
      
      {user.name 
        && (
        <UserCard 
          username={user.name} 
          company={user.company} 
        />)
      }

      <ul>
      {employees.map((e, ind) => {
        return (
          <li key={ind}>{e}</li>
        )
      })}
      </ul>

      
      {/*

      <RegisterButton 
        computeEntry={computeEntry} 
        computeOut={computeOut}
        time={time}/>
      
      <p>{time}</p>
      

      

      <p>Entrada: {entryTime ? entryTime : 'Pendente'}</p>
      <p>Saída: {outTime ? outTime : 'Pendente'}</p>
       */}
    </>
  );
}

export default App;
