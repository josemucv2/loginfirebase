
import { createContext , useContext, useState }from 'react';
import {db  } from './Firebase'
import {  getDocs, collection} from 'firebase/firestore'


export const contexto = createContext()
export const { Provider } = contexto
export const useContexto = () => {
    return useContext(contexto)
}


function CustomProvider({children}) {
     const [user, setUser] = useState(null)
     const [error, setError] = useState('')
    
    function setUserWithFirebaseAndAuth() {
        const UsuariosFirebase = collection(db , 'Usuarios')
       
        getDocs(UsuariosFirebase)
        
        .then((results) =>{ 
            const documentacion = results.docs
            const listUsers = documentacion.map((user) =>{
            const data = user.data()
            const rol = data.rol
            return rol
        })
        
        setUser(listUsers)
       
        })
    }
    
   


   const contextValues = {
       error,
       user,
       setUserWithFirebaseAndAuth,
       setError,
       setUser

   }
  
  
   return (
       <Provider value={contextValues}>{children}</Provider>
   )
}

export default  CustomProvider