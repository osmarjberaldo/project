import React from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  message: string | null;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  if (!message) return null;

  return (
    <div className="flex items-center justify-center gap-2 text-red-400 text-center mb-4 text-sm bg-red-500/10 p-3 rounded-lg">
      <AlertCircle className="w-4 h-4" />
      <p>{message}</p>
    </div>
  );
};

export default ErrorMessage;