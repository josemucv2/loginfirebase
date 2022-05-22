import {Link} from 'react-router-dom'
import { useContexto }from '../Credenciales/Contex'
import { signOut } from 'firebase/auth'
import { auth } from '../Credenciales/Firebase'

function NavbBar () {

    const { user }= useContexto()
    
    if(user){
        
        return (
        
        <nav className="order-nav">
            <div className='margin-title-nav'>
                <Link to='/' className='no-links'>System4Data</Link>
            </div>
            
            <div>
                <button className='button-loggout' onClick={() => signOut(auth)}>Cerrar Sesion</button>
            </div>
        </nav>
    )
    } else{
        
        return (
        
        <nav className="order-nav">
            <div className='margin-title-nav'>
                <Link to='/' className='no-links'>System4Data</Link>
            </div>

            
            <div className='margin-title-nav'>
                <Link to='/' className='no-links'>Iniciar Sesion</Link>
                <Link to='/Registro' className='no-links'>Registro</Link>
            </div>
        </nav>
        )
    }
}
export default NavbBar