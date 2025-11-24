import React from 'react';

const Card = ({ children, className = '', title, subtitle, ...props }) => {
  return (
    <div className={`glass rounded-2xl p-6 md:p-8 ${className}`} {...props}>
      {(title || subtitle) && (
        <div className="mb-6">
          {title && (
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          )}
          {subtitle && (
            <p className="text-sm text-gray-400">{subtitle}</p>
          )}
        </div>
      )}
      {children}
    </div>
  );
};

export default Card;