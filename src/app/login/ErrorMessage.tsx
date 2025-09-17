"use client";

import React from 'react';

interface ErrorMessageProps {
  message: string;
  onClose: () => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message, onClose }) => {
  return (
    <div className="flex items-center justify-between bg-red-100 text-red-600 p-4 rounded-md border border-red-300">
      <span>{message}</span>
      <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
        ×
      </button>
    </div>
  );
};

export default ErrorMessage;
