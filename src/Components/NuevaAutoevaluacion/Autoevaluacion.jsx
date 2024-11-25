"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const NewAssessment = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const router = useRouter();

  // Array de pasos
  const steps = [
    { name: "Seleccionar Evento", content: <SelectEvent /> },
    { name: "Matriz de Calidad", content: <QualityMatrix /> },
    { name: "Configurar Autoevaluación", content: <ConfigureAssessment /> },
  ];

  // Función para navegar entre pasos
  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }else{
      router.push("/DesarrolloAutoevaluacion");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="bg-white rounded-md shadow-md p-6 w-5/6 mx-auto mt-8">
      <h1 className="text-lg font-semibold mb-6">Nueva Autoevaluación</h1>

      {/* Encabezado de pasos */}
      <div className="flex">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex-1 text-center py-2 rounded-t-md ${
              index === currentStep
                ? "bg-blue-500 text-white font-medium"
                : "bg-gray-100 text-gray-500"
            }`}
          >
            {step.name}
          </div>
        ))}
      </div>

      {/* Contenido del paso actual */}
      <div className="border border-gray-200 p-6">{steps[currentStep].content}</div>

      {/* Botones de navegación */}
      <div className="flex justify-between mt-4">
        {currentStep >= 0 && (
          <button
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded-md"
            onClick={handlePrevious}
          >
            Anterior
          </button>
        )}
        {currentStep <= steps.length - 1 && (
          <button
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md"
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
      <h2 className="text-xl font-medium mb-4">Seleccionar Evento</h2>
      <label htmlFor="event" className="block text-gray-600 mb-2">
        Evento:
      </label>
      <select
        id="event"
        className="border border-gray-300 rounded-md px-4 py-2 w-full text-gray-700"
      >
        <option value="">Seleccione</option>
        <option value="autoevaluacion">Autoevaluación</option>
      </select>
    </div>
  );
};

const QualityMatrix = () => {
  return (
    <div>
      <h2 className="text-xl font-medium mb-4">Matriz de Calidad</h2>
      <p className="text-gray-600">Aquí se mostrará la matriz de calidad.</p>
    </div>
  );
};

const ConfigureAssessment = () => {
  return (
    <div>
      <h2 className="text-xl font-medium mb-4">Configurar Autoevaluación</h2>
      <p className="text-gray-600">
        Aquí podrás configurar la autoevaluación.
      </p>
    </div>
  );
};

export default NewAssessment;
