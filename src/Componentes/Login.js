
import { AiOutlineUser ,AiOutlineLock} from "react-icons/ai"
import CircularProgress from '@mui/material/CircularProgress'
import Backdrop from '@mui/material/Backdrop';
import Modal from './Modal'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from "../Credenciales/Firebase"
import {useState} from 'react'


function Login () {


    const [error,setError] = useState('')
    const [open, setOpen] = useState(false)
    const [isOpen,setIsOpen] = useState(false)
     
     const close = () => {
            setIsOpen(false)
        }
        
        const openModal = () => {
            setIsOpen(true)
        }
        
        function submitHandler(e) {
   
          
    setOpen(true)
    e.preventDefault()
    const email = e.target.elements.InputUser.value
    const password = e.target.elements.InputPassword.value
    
    signInWithEmailAndPassword(auth, email, password)
    
    .then(() => {

     setOpen(false)
    }) 
    .catch(() => {
        setOpen(false)
        setError('Usuario o Contraseña: INVALIDOS')
    })
    
}
 
 return(
        <div className="center-main-log">
         <div>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </div>
                   <div className="box-container box-container-mobile">
            <div className="center-img">
                <img src="https://cdn.pixabay.com/photo/2016/08/31/11/54/user-1633248_960_720.png" alt="" className='img-container img-container-mobile'/>
            </div>
    
        <form onSubmit={submitHandler}>
            <div className="separate">
            <div className='center-img'>
                <label htmlFor="InputUser" className="margin-icon"><AiOutlineUser/>
                <input id="InputUser" type="text"  className='input-style input-style-mobile' placeholder="User"/>
                </label>
                
            </div>
           
           <div className='center-img '>
               <label htmlFor="InputPassword" className="margin-icon"><AiOutlineLock/>
               <input id="InputPassword" type="password" className='input-style input-style-mobile' placeholder="Password"/>
               </label>
               
           </div>
        </div>
           
          <div className='center-img'>
               <button type="submit" className="btn-log btn-log-mobile">Iniciar Sesion</button>
        </div>
        </form>
      
           <div className="box-check">
               <button className="btn-log btn-log-mobile" onClick={openModal}>Olvidaste tu Contraseña?</button>
                <Modal isOpen={isOpen} closeModal={close}/>
            </div>
            <div className='center-img'>  
                <div className='error'>{error}</div> 
            </div>
           
        </div>
    
        </div>


        
    )
}

export default Login