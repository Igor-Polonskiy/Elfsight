import User from '../user/user';
import './users.css';
import {Link, Router} from 'react-router-dom';

function Users(props) {
  let screen = props.users.map(item =>
   
      <User
        name={item.name}
        key={item.id}
      />
    );

  return (
    <div className='users'>
    
      {screen}
      
    </div>
  )
}
export default Users;