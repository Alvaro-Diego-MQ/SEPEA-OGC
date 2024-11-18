"use client"
import React, { useState } from 'react';

const NewAssessment = () => {
  const [currentStep, setCurrentStep] = useState(0);

  // Array de pasos
  const steps = [
    { name: 'Seleccionar Evento', content: <SelectEvent /> },
    { name: 'Matriz de Calidad', content: <QualityMatrix /> },
    { name: 'Configurar Autoevaluación', content: <ConfigureAssessment /> },
  ];

  // Función para navegar entre pasos
  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-8">
      <h1 className="text-2xl font-bold mb-4">Nueva Autoevaluación</h1>
      <div className="flex justify-between items-center mb-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`px-4 py-2 rounded-md ${
              index === currentStep
                ? 'bg-blue-500 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {step.name}
          </div>
        ))}
      </div>
      {steps[currentStep].content}
      <div className="flex justify-between mt-4">
        {currentStep > 0 && (
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-600 px-4 py-2 rounded-md"
            onClick={handlePrevious}
          >
            Anterior
          </button>
        )}
        {currentStep < steps.length - 1 && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
            onClick={handleNext}
          >
            Siguiente
          </button>
        )}
      </div>
    </div>
  );
};

const SelectEvent = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Seleccionar Evento</h2>
      {/* Contenido del paso "Seleccionar Evento" */}
      <select className="border rounded-md px-4 py-2 w-full">
        <option>Seleccione</option>
        <option>AUTOEVALUACION</option>
        {/* Opciones del evento */}
      </select>
    </div>
  );
};

const QualityMatrix = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Matriz de Calidad</h2>
      {/* Contenido del paso "Matriz de Calidad" */}
    </div>
  );
};

const ConfigureAssessment = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-2">Configurar Autoevaluación</h2>
      {/* Contenido del paso "Configurar Autoevaluación" */}
    </div>
  );
};

export default NewAssessment;