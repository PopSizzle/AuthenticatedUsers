import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Users = () => {
  const [username, SetUsername] = useState('');
  const { users, setUsers } = useUsers();
  const renderUsers = () => {
    if(users.length) {
      return users.map(({ id, username }) => {
        return (
          <div key = {id}>
            <Link to={`/users/user/${id}`}>
              <p>Username: {username}</p>
            </Link>
          </div>
        );
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // axios call to post user
    // then set username to new user
  }

  return (
    <div>
      <form noValidate autoComplete='off' onSubmit={handleSubmit}>

      </form>
    </div>
  )

}

export default Users;