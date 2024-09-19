
function ProfilePic(){

    const imageURL = './src/assets/Changli_icon.png';

    const handleClick = (e) => e.target.style.display = "none";

    return(<img onClick={(e) => handleClick(e)} src={imageURL}></img>);
}

export default ProfilePic