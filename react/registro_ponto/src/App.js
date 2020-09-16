import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard/UserCard';


function App() { 

  const [counter, setCounter] = useState(0);
  const [time, setTime] = useState('');
  const [entryTime, setEntryTime] = useState('');
  const [outTime, setOutTime] = useState('');

  useEffect(() => {
    if (entryTime) {
      alert('Parabéns, você veio pro trampo hoje!');
    }
  }, [entryTime]);

  const isLogged = false;

  const user = {
    name: 'Pietro Ribeiro',
    company: 'Let\'s Code'
  };

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

  setInterval(() => {
    setTime(getCurrentTime());
  }, 1000);

  return (
    <>
      {isLogged 
        ? (
        <UserCard 
          username={user.name} 
          company={user.company} 
        />) 
        : (
          <button>Faça login</button>
        )
      }
      
      <p>{time}</p>
      <button onClick={computeEntry}>Entrada</button>
      <button onClick={computeOut}>Saída</button>

      <p>Entrada: {entryTime ? entryTime : 'Pendente'}</p>
      <p>Saída: {outTime ? outTime : 'Pendente'}</p>
    </>
  );
}

export default App;
