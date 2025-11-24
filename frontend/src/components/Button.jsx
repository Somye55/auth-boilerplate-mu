import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  isLoading = false, 
  disabled, 
  className = '', 
  type = 'button',
  ...props 
}) => {
  const baseStyles = "relative w-full inline-flex items-center justify-center px-6 py-3 text-sm font-semibold transition-all duration-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white shadow-lg shadow-indigo-500/25 focus:ring-indigo-500 border border-transparent",
    secondary: "bg-white/5 hover:bg-white/10 text-white border border-white/10 focus:ring-white/20 backdrop-blur-sm",
    danger: "bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 focus:ring-red-500",
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && (
        <svg className="w-5 h-5 mr-2 animate-spin text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      )}
      <span className={isLoading ? "opacity-90" : ""}>
        {children}
      </span>
    </button>
  );
};

export default Button;