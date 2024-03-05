import Proptypes from "prop-types"
const UserGreeting = (props) =>{
    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please Login To Continue</h2>
    return (props.isLoggedIn ? welcomeMessage : loginPrompt);
}

UserGreeting.proptypes = {
    isLoggedIn : Proptypes.bool,
    username : Proptypes.string
}
UserGreeting.defaultProps = {
    isLoggedIn : false,
    username : "Guest"
}

export default UserGreeting