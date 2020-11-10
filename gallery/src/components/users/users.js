import User from '../user/user';
import './users.css';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Users(props) {
  const [userid, setUserid] = useState(null);

  function handleclick(id) {
    setUserid(id);
    props.getid(id);
  }

  useEffect(() => {
    
    console.log(userid);

  }, [userid]);


  let screen = props.users.map(item =>
    <Link  key={item.id} onClick={()=>handleclick(item.id)} to={`/user#${item.name}`}>
      <User
        name={item.name}
        id={item.id}
      />
    </Link>
  );

  return (
    <div className='users'>

      {screen}

    </div>
  )
}
export default Users;