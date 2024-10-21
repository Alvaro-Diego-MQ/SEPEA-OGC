import React from 'react'
import LoginForm from '../Components/login/index';
import Sidebar from '../Components/autoevaluacion/sidebar';
import Header from '../Components/autoevaluacion/header'
function page() {
  return (
    //<LoginForm/>
    <div className='flex flex-row items-start'>
      <Sidebar />
      <Header />
      
    </div>
    
  )
}

export default page