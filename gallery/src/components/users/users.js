import User from '../user/user';
import './users.css';
import { Link } from 'react-router-dom';
import React, { Fragment } from 'react';

function Users(props) {

  function handleclick(id, name) {
    props.getid(id,name);
    
  }

  return (
    <Fragment>
      <h1>Пользователи</h1>
      <div className='users'>
        {props.users.map(item =>
          <Link key={item.id} onClick={() => handleclick(item.id, item.name)} to={`/users/${item.name}`}>
            <User
              name={item.name}
              id={item.id}
            />
          </Link>)}
      </div>
    </Fragment>
  )
}
export default Users;