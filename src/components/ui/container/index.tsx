import * as React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'default' | 'narrow' | 'wide';
}

export function Container({ className, size = 'default', children, ...props }: ContainerProps) {
  const sizes = {
    narrow: 'max-w-5xl',
    default: 'max-w-7xl',
    wide: 'max-w-(--breakpoint-2xl)',
  };

  return (
    <div
      className={twMerge(clsx('mx-auto px-4 sm:px-6 lg:px-8 w-full', sizes[size], className))}
      {...props}
    >
      {children}
    </div>
  );
}
