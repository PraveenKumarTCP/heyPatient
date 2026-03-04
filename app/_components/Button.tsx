import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    variant = 'primary',
    size = 'md',
    className = '',
    children,
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
        primary: "bg-[#008A8A] text-white hover:bg-[#007373] focus:ring-[#008A8A]",
        secondary: "bg-white text-[#008A8A] hover:bg-gray-100 focus:ring-white border border-transparent",
        outline: "border-2 border-[#008A8A] text-[#008A8A] hover:bg-[#008A8A] hover:text-white focus:ring-[#008A8A]",
        ghost: "bg-transparent text-[#008A8A] hover:bg-[#008A8A]/10 focus:ring-[#008A8A]",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};
