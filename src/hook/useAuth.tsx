import{useContext} from 'react'
import { AuthContext } from '../hoc/AuthProviser'

export function useAuth(){
    // console.log(useContext(AuthContext))//Lola
    return useContext(AuthContext)
}