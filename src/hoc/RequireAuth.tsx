import {useLocation, Navigate} from 'react-router-dom'
import {useAuth} from '../hook/useAuth'

const RequireAuth =({children}:any)=>{
const location = useLocation();
const {user}:any = useAuth();
console.log(useAuth())
if(user !== "Anna"){
    return <Navigate to='/login' state={{from:location}}/>
}
return children;
    
}

export {RequireAuth}