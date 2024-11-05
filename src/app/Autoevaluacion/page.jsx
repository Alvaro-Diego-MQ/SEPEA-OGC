import React from 'react'
import Header from '../../Components/autoevaluacion/header'
import Sidebar from '../../Components/autoevaluacion/sidebar'
import Select from '../../Components/autoevaluacion/select'
import ContenidoPrincipal from '../../Components/autoevaluacion/contentMain'
const Autoevaluacion = ()=>{

  return (
    /*<div className='flex flex-row items-start bg-[#D2D6DE]'>
         <Sidebar/>
        <Header/>
        <Footer/>
        

    </div>*/
    <div>
        <ContenidoPrincipal/>
    </div>
  );
}
export default Autoevaluacion;

export const Footer = ()=>{
    return(
      <footer className=" bg-[#ffff]  text-black text-center p-4 absolute bottom-0 left-0 w-full border-t-2 border-{#D2D6DE}">
          @ 2024 - Sistema de Evaluacion de Programas de Estudio para la Acreditacion - Todos los derechos reservados.
      </footer>
    )
}