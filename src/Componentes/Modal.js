import { AiTwotoneMail} from "react-icons/ai"

const Modal = ({isOpen,closeModal}) => {
    
    return(
    
    <article className={`modal-name ${isOpen && "isOpen"}`}>
        <div className="modal-container modal-container-mobile">
            <div className="center-img">
                <h2>System4Data</h2>
                <p className='text-color-pass'>RECUPERAR CONTRASEÑA</p>
            </div>
            
            <div>
                <div className="modal-margin-icon-email">
                    <AiTwotoneMail className="color-icon"/>
                    <label htmlFor="inputEmail" className="email-label-modal">Correo Electronico</label>
                </div>
                
                <div className="center-img"> 
                <input type="email" id='inputEmail' className="email-input-modal"/>
                </div>
            </div>
            
            <div className="center-img">
                <button type="email" className='botton-modal'>Enviar</button>
                <button onClick={closeModal} className="close-modal botton-modal">Cerrar</button>
            </div>
        </div>
    </article>

)
}

export default Modal