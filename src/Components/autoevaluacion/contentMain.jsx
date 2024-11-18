"use client"
import Sidebar from './sidebar'
import Header from './header'
import React, { useState } from 'react';
import Button from '../ui/button'
import Link from 'next/link';
import { useRouter } from 'next/navigation';


export default function () {
  const [escuelaSeleccionada, setEscuelaSeleccionada] = useState('');
  const router = useRouter();

  const handleSiguiente = () => {
    // Cuando el usuario haga clic en "Siguiente", redirigimos a la página deseada
    if (escuelaSeleccionada) {
      router.push(`/NuevaAutoevaluacion?escuela=${encodeURIComponent(escuelaSeleccionada)}`);
    } else {
      alert("Por favor, seleccione una escuela primero.");
    }
  };

  return (
    <div className='flex flex-row items-start bg-[#D2D6DE]'>
        <Sidebar/>
      <div className='flex flex-col w-full'>
        <Header escuelaSeleccionada={escuelaSeleccionada}/>
      
        <div className="flex flex-col mt-2 bg-white py-4 border-b border-gray-200">
        <h1 className="text-center text-lg font-bold text-gray-800 px-4">
          BIENVENIDOS AL SISTEMA DE EVALUACION DE PROGRAMAS DE ESTUDIO PARA LA ACREDITACION
        </h1>
        </div>
        <FormularioSeleccion setEscuelaSeleccionada={setEscuelaSeleccionada}/>
        
      </div>
      
      
      <Footer/>
      
      
    </div>
  )
}

export function FormularioSeleccion() {
  const [escuelaSeleccionada, setEscuelaSeleccionada] = useState('');
  const [modeloSeleccionado, setModeloSeleccionado] = useState('');
  const router = useRouter();
  const handleSiguiente = () => {
    if (escuelaSeleccionada) {
      // Redirige a la página NuevaAutoevaluacion pasando el parámetro de la escuela
      router.push(`/NuevaAutoevaluacion?escuela=${encodeURIComponent(escuelaSeleccionada)}`);
    } else {
      alert("Por favor, seleccione una escuela primero.");
    }
  };

  const escuelas = [
    'Ingenieria Agronomica',
    'Ingenieria Topográfica y agrimensura',
    'Ingenieria Agroindustrial',
    'Enfermeria',
    'Ciencias de la Comunicacion Social',
    'Arte: Artes Plasticas',
    'Arte: Danza',
    'Arte: Musica',
    'Arte: Teatro',
    'Psicologia',
    'Biologia: Pesqueria',
    'Biologia: Microbiologia',
    'Biologia: Ecologia',
    'Ciencias Sociales', 
    'Ciencia Tecnologia y Ambiente',
    'Lengua, Literatura, Psicologia y Filosofia',  
    'Matematica, Fisica, Computacion e Informatica',
    'Educacion Fisica',
    'Educacion Primaria',
    'Educacion Inicial',
    'Derecho',
    'Nutricion Humana',
    'Odontologia',
    'Ciencias Fisico Matematico',
    'Medicina Humana',
    'Ingenieria de Telecomunicaciones',
    'Ingeniería de Minas',
    'Ingeniería Geológica',
    'Administración',
    'Ciencias Contables',
    'Sociología',
    'Antropología',
    'Trabajo Social',
    'Turismo',
    'Ingeniería Agronómica',
    'Ingeniería Agrícola',
    'Ingenieria Civil',
    'Arquitectura y Urbanismo',
    'Ingeniería Económica',
    'Estadística e Informática',
    'Ingeniería Metalúrgica',
    'Ingeniería Electrónica',
    'Ingeniería Mecánica Eléctrica',
    'Ingeniería de Sistemas',
    'Ingeniería Química',    
  ];

  const modelos = ['Modelo 2024', 'Modelo 2025'];

  return (
    <div className="w-full mt-4 h-48 mx-auto p-4 bg-white">
      <div className="flex items-center max-w-[600px] space-x-6 bg-white">
        <div>
          <label htmlFor="escuela" className="block text-sm font-medium text-black mb-1">
            Seleccione la Escuela Profesional
          </label>
          <select
            id="escuela"
            onChange={(e) => setEscuelaSeleccionada(e.target.value)}
            className="w-full bg-white-500 text-black border border-blue-500 rounded-md py-2 px-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Seleccionar</option>
            {escuelas.map((escuela) => (
              <option key={escuela} value={escuela} className='bg-white text-black hover:bg-blue-500'>
                {escuela}
              </option>
            ))}
          </select>
        </div>
        <div className="">
          <label htmlFor="modelo" className="block text-sm font-medium text-black mb-1">
            Modelo
          </label>
          <select
            id="modelo"
            value={modeloSeleccionado}
            onChange={(e) => setModeloSeleccionado(e.target.value)}
            className="w-full bg-white-500 w-[150px] text-black border border-blue-500 rounded-md py-2 px-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="">Seleccionar</option>
            {modelos.map((modelo) => (
              <option key={modelo} value={modelo} className='bg-white text-black'>
                {modelo}
              </option>
            ))}
          </select>
        </div>
        <div>
          <Button onClick={handleSiguiente}/>
           
        </div>
        
      </div>
    </div>
  );
}

export const Footer = ()=>{
  return(
    <footer className=" bg-[#ffff]  text-black text-center p-4 absolute bottom-0 left-0 w-full border-t-2 border-{#D2D6DE}">
        @ 2024 - Sistema de Evaluacion de Programas de Estudio para la Acreditacion - Todos los derechos reservados.
    </footer>
  )
}
