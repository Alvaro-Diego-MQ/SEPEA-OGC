'use client';
import React from 'react'
import HeaderDesarrollo from './header'
import SidebarDesarrollo from './sidebar'

export function contentDesarrollo() {
  return (
    <div className='flex flex-row items-start bg-[#D2D6DE]'>
        <SidebarDesarrollo/>
        <div className='flex flex-col w-full'>
            <HeaderDesarrollo/>
            <div>
                <DesarrolloAutoEvaluacion/>
            </div>
        </div>
        

    </div>
  )
}

export function DesarrolloAutoEvaluacion() {
    const handleSalir = () => {
      console.log('Salir de la Autoevaluación');
    };
  
    const handleGuardar = () => {
      console.log('Guardar Avance');
    };
  
    const handleFinalizar = () => {
      console.log('Finalizar Autoevaluación');
    };
  
    const handleCancelar = () => {
      console.log('Cancelar Autoevaluación');
    };
  
    return (
      <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg">
        <h1 className="text-xl font-bold mb-4">
          Desarrollo de la Auto Evaluacion: ESTANDAR 1
        </h1>
  
        {/* Action Buttons */}
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={handleSalir}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors"
          >
            Salir de la Autoevaluacion
          </button>
          <button
            onClick={handleGuardar}
            className="px-4 py-2 bg-yellow-400 text-black rounded hover:bg-yellow-500 transition-colors"
          >
            Guardar Avance
          </button>
          <button
            onClick={handleFinalizar}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
          >
            Finalizar Autoevaluacion
          </button>
          <button
            onClick={handleCancelar}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
          >
            Cancelar Autoevaluacion
          </button>
        </div>
  
        {/* Main Content */}
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="mb-4">
            <h2 className="text-lg font-semibold">
              1.- Gestion Estrategica: 
              <span className="font-normal">Planificacion del Programa de Estudio</span>
            </h2>
          </div>
  
          <div className="mb-4">
            <h3 className="text-lg font-semibold mb-4">
              ESTANDAR 1: PROPOSITOS ARTICULADOS
            </h3>
  
            {/* Navigation Buttons */}
            <div className="flex flex-wrap gap-2">
              {['Brechas', 'Actividades', 'Obs. Auditorias', 'Dashboard'].map((button) => (
                <button
                  key={button}
                  className="px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                  onClick={() => console.log(`Clicked ${button}`)}
                >
                  {button}
                </button>
              ))}
            </div>
          </div>
  
          {/* Content Area */}
          <div className="bg-white p-4 rounded-lg min-h-[400px]">
            {/* Add your content here */}
          </div>
        </div>
      </div>
    );
  }