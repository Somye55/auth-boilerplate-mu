import React from 'react';

const Input = ({ label, error, className = '', id, ...props }) => {
  return (
    <div className="space-y-1.5">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-300 ml-1">
          {label}
        </label>
      )}
      <div className="relative">
        <input
          id={id}
          className={`
            w-full px-4 py-3 bg-dark-800/50 border rounded-xl outline-none transition-all duration-200 text-white placeholder-gray-500
            ${error 
              ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500/50' 
              : 'border-white/10 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500/50 hover:border-white/20'
            }
            ${className}
          `}
          {...props}
        />
      </div>
      {error && (
        <p className="text-sm text-red-400 ml-1 animate-slide-up">
          {error}
        </p>
      )}
    </div>
  );
};

export default Input;