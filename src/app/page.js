import React from 'react'
import Index from '../Components/login/index';
import Sidebar from '../Components/autoevaluacion/sidebar';
import Header from '../Components/autoevaluacion/header'
import NuevaAutoevaluacion from './NuevaAutoevaluacion/page';
import LoginForm from '../Components/login/index';
function page() {
  return (
    <div>
      <LoginForm/>
    </div>
    
    
    
    //<LoginForm/>
    /*<div className='flex flex-row items-start'>
      <Sidebar />
      <Header />
      
      
    </div>*/
    
  )
}

export default page