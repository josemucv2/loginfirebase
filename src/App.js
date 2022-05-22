
import './App.css';
import Navbar from './Componentes/Navbar'
import Footer from './Componentes/Footer'
import Home from './Componentes/Home'
import CustomProvider from './Credenciales/Contex'
import Registro from './Componentes/Registro'
import Profile from './screen/Profile'
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Spinner from './Componentes/Spinner';
import { Suspense } from 'react';





function App() {

  
  return (
    
      <CustomProvider>
     <BrowserRouter>
     
     <Suspense fallback={<Spinner/>}>
       <Navbar/>
      </Suspense>
     <main>
         <Routes>
             <Route path='/Registro' element={<Registro/>}/>
             <Route path="/" element={<Home/>}/>
             <Route path="/Profile" element={<Profile/>}/>
        </Routes>
    </main>
    <Footer/>
     
    
    </BrowserRouter>
</CustomProvider>

    
   

  );
}

export default App;

