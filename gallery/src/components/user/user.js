import './user.css';

function User(props){
    return(
        <div className='user_card'>
            <h3>{props.name}</h3>
        </div>
    )
}
export default User;