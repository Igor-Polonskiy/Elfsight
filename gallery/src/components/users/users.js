import User from '../user/user';
import './users.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Users(props) {
  const [userid, setUserid] = useState(null);

  const handleclick = (id) => {
    setUserid(id);
    props.getid(userid);
  }

  useEffect(() => {
    //props.getid(userid);
    console.log(userid);

  }, [userid]);


  let screen = props.users.map(item =>
    <Link  key={item.id} onClick={()=>handleclick(item.id)} to={`/#${item.name}`}>
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