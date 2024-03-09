function ProfilePicture(){
    const imageUrl = "./src/assets/vegeta.jpg"
    const handleClick =(e)=> e.target.style.border= "2px solid red"
    return (<img onClick={(e)=>handleClick(e)}src={imageUrl}></img>)
}

export default ProfilePicture