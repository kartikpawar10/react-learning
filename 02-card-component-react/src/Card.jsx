import profilePic from './assets/profilePic.jpg'
function Card(){
    return (
        // In JSX Class is reserved that why use className
        <div className="card">
            <img className="card-image"src={profilePic} alt="This is a image" />
            <h2 className='card-title'>Bro Code</h2>
            <p className='card-text'>I make Youtube Video And Play Video Games</p>
        </div>
    );
}

export default Card