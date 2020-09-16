import './UserCard.css';
import React from 'react';

function UserCard(props) {

  return (
    <>
      <h2>{props.username}</h2>
      <h3>{props.company}</h3>
    </>
  );
}

export default UserCard;