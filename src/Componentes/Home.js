import Login from './Login'
import { useContexto } from '../Credenciales/Contex'
import Profile from '../screen/Profile'
import { onAuthStateChanged} from 'firebase/auth'
import { auth } from '../Credenciales/Firebase'



function Home (){

    
    
    const { user , setUserWithFirebaseAndAuth ,setUser } = useContexto()

     onAuthStateChanged(auth, (userFirebase) => {
        
        if(userFirebase) {
        
            if(!user) {
                console.log(user)
                setUserWithFirebaseAndAuth(userFirebase)
           }
        } else {
            setUser(null)
        }
   })
   

    return <>{ user ? <Profile/> : <Login/>}</>
}

export default Home