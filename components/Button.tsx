
import React from 'react';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '',
  ...props 
}) => {
  const baseStyles = "font-black py-4 px-8 rounded-xl transition-all duration-200 shadow-xl focus:outline-none uppercase tracking-tight transform active:scale-95 text-center";
  
  const variants = {
    primary: "bg-primary hover:bg-orange-400 text-black shadow-primary/20 hover:shadow-primary/40",
    secondary: "bg-zinc-800 hover:bg-zinc-700 text-white border border-white/10",
    accent: "bg-accent hover:bg-green-400 text-black shadow-accent/20"
  };

  return (
    <button 
      className={cn(baseStyles, variants[variant], fullWidth ? 'w-full' : 'w-auto', className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
