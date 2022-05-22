import React from 'react'
import {useContexto} from '../Credenciales/Contex'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import {  addDoc , collection , serverTimestamp } from 'firebase/firestore'
import {db , auth} from '../Credenciales/Firebase'
import {useState} from 'react'
import { Link} from 'react-router-dom'

function Registro() {


const {error, setError} = useContexto()
const [isOpen,setIsOpen] = useState(false)


  const close = () => {
            setIsOpen(false)
        }
        
       


  async function sendUser(email,user,password){

    await createUserWithEmailAndPassword(auth,email,password)
    .then(userFirebase => {


      const docuRef = collection(db , 'Usuarios')
      
      addDoc(docuRef , {
       Correo : email,
       Usuario : user,
       Fecha : serverTimestamp()
    })

      setError('Usuario Registrado con Exito')
      setIsOpen(true)
    })
    .catch((err) => {
       if(err.code === 'auth/email-already-in-use'){
         setError('Usuario ya Existe')
         
       } else if(err.code === 'auth/weak-password'){
         setError('Contraseña debe ser mayor a 6 digitos')
       } else if(err.code === 'auth/invalid-email'){
         setError('Correo Electronico invalido')
       }
    })

    

  }
  

    function RegisterUser (e) {
      e.preventDefault()
      const password = e.target.password.value
      const password2 = e.target.password2.value
      const user = e.target.usuario.value
      const email = e.target.email.value
      
      sendUser(email,user,password2,password)
    }


  

   
  return (
    <div className="center-main-log">
      <div className="box-container-form box-container-mobile-form">
        <div className="center-img-mobile center-img">
          <img src="https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633248_960_720.png" alt="" className='img-container-form img-container-mobile'/>
        </div>

      
      <form  onSubmit={RegisterUser}>
        
        
        <div className="separate">

          <div className='center-img'>
            <label>Ingrese un Usuario:
              <input type='text' id='usuario' className='input-style input-style-mobile'/>
            </label>
          </div>
        

        <div className='center-img'>
          <label>Ingrese un correo electronico:
            <input type='email' id='email' className='input-style input-style-mobile'/>
          </label>
        </div>
        
        
        <div className='center-img'>
          <label>Ingrese una contraseña:
            <input type='password' id='password' className='input-style input-style-mobile'/>
          </label>
        </div>
        
        
        <div className='center-img'>
          <label>Confirmar Contraseña:
            <input type='password' id='password2'className='input-style input-style-mobile'/>
          </label>
        </div>
        
        </div>
        
        <div className='center-img'>
          <input type="submit" className="btn-log btn-log-mobile"/>
          <div>{error}</div>
        </div>

          </form>

          <article className={`modal-name ${isOpen && "isOpen"}`}>
        <div className="modal-container modal-container-mobile">
            <div className="center-img">
                <h2>System4Data</h2>
                <div className="wrapper">
                <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                    <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                    <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                </svg>
            </div>
            </div>
            
                <div className="center-img">
                  <h2>Usuario Registrado con exito</h2>
                   <Link to='/'>
                      <div onClick={close}>
                        Ir al Perfil
                      </div>
                   </Link>
                </div>
        </div>
    </article>
       
    </div>
    </div>
    
  )
}

export default Registro