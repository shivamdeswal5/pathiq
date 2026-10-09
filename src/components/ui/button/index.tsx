import * as React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'emerald';
  size?: 'sm' | 'md' | 'lg';
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', ...props }, ref) => {
    const base =
      'inline-flex items-center justify-center font-semibold rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-teal-500/20 disabled:opacity-50 disabled:pointer-events-none cursor-pointer';

    const variants = {
      primary: 'bg-teal-600 hover:bg-teal-700 text-white shadow-xs',
      secondary: 'bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-200',
      outline: 'bg-white hover:bg-slate-50 text-slate-800 border border-slate-300 shadow-2xs',
      ghost: 'hover:bg-slate-100 text-slate-600 hover:text-slate-900',
      emerald: 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs',
    };

    const sizes = {
      sm: 'h-8 px-3 text-xs gap-1.5',
      md: 'h-9 px-4 text-xs gap-2',
      lg: 'h-11 px-6 text-sm gap-2.5',
    };

    return (
      <button
        ref={ref}
        className={twMerge(clsx(base, variants[variant], sizes[size], className))}
        {...props}
      />
    );
  },
);
Button.displayName = 'Button';
