import React from 'react';
import { cn } from '@/lib/utils';

type HeadingProps = {
  children: React.ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  gradient?: boolean;
  align?: 'left' | 'center' | 'right';
};

export function Heading1({
  children,
  className,
  as = 'h1',
  gradient = true,
  align = 'left',
}: HeadingProps) {
  const Tag = as;
  
  return (
    <Tag className={cn(
      'text-4xl md:text-5xl lg:text-6xl font-bold mb-6',
      align === 'center' && 'text-center',
      align === 'right' && 'text-right',
      className
    )}>
      {gradient ? (
        <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
          {children}
        </span>
      ) : (
        children
      )}
    </Tag>
  );
}

export function Heading2({
  children,
  className,
  as = 'h2',
  gradient = true,
  align = 'left',
}: HeadingProps) {
  const Tag = as;
  
  return (
    <Tag className={cn(
      'text-3xl md:text-4xl font-bold mb-6',
      align === 'center' && 'text-center',
      align === 'right' && 'text-right',
      className
    )}>
      {gradient ? (
        <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
          {children}
        </span>
      ) : (
        children
      )}
    </Tag>
  );
}

export function Heading3({
  children,
  className,
  as = 'h3',
  gradient = false,
  align = 'left',
}: HeadingProps) {
  const Tag = as;
  
  return (
    <Tag className={cn(
      'text-2xl md:text-3xl font-bold mb-4',
      align === 'center' && 'text-center',
      align === 'right' && 'text-right',
      className
    )}>
      {gradient ? (
        <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
          {children}
        </span>
      ) : (
        children
      )}
    </Tag>
  );
}

export function Heading4({
  children,
  className,
  as = 'h4',
  gradient = false,
  align = 'left',
}: HeadingProps) {
  const Tag = as;
  
  return (
    <Tag className={cn(
      'text-xl md:text-2xl font-semibold mb-3',
      align === 'center' && 'text-center',
      align === 'right' && 'text-right',
      className
    )}>
      {gradient ? (
        <span className="bg-gradient-to-r from-gray-900 to-primary-600 bg-clip-text text-transparent">
          {children}
        </span>
      ) : (
        children
      )}
    </Tag>
  );
}

export function Paragraph({
  children,
  className,
  align = 'left',
}: Omit<HeadingProps, 'as' | 'gradient'>) {
  return (
    <p className={cn(
      'text-xl text-gray-600 mb-6',
      align === 'center' && 'text-center',
      align === 'right' && 'text-right',
      className
    )}>
      {children}
    </p>
  );
}

export function SectionTitle({ 
  subtitle, 
  title, 
  className, 
  align = 'center',
}: { 
  subtitle?: string; 
  title: string; 
  className?: string;
  align?: 'left' | 'center' | 'right';
}) {
  return (
    <div className={cn(
      'mb-16',
      align === 'center' && 'text-center',
      align === 'right' && 'text-right',
      className
    )}>
      {subtitle && (
        <span className="inline-block text-primary-600 font-semibold mb-2">
          {subtitle}
        </span>
      )}
      <Heading2 align={align}>{title}</Heading2>
    </div>
  );
} 