import { useNavigate } from "react-router-dom";

export default function Profile(){
const navigate = useNavigate()
const handleClick=()=>{
    localStorage.clear();
    // window.location.reload()
    navigate('/', {replace: true})
}
    return(
        
        <div>
            <h1>Profile</h1>
            <button onClick={handleClick}>Logout</button>
        </div>
    )
}

