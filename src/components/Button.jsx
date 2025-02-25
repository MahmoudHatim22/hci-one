import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  onClick,
  className = "",  
  to = "#",            
}) => {
  const isLink = to && to !== "#";
  
  
    return (
      <Link to={to} className={className}>
        <button onClick={onClick} className="w-full h-full">
          {children}
        </button>
      </Link>
    );
 
    
  
};

export default Button;