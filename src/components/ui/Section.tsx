import React from 'react';
import { cn } from '../../lib/utils';
import Grid from './Grid';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  noContainer?: boolean;
}

const Section = ({ children, className, id, noContainer = false, ...props }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn('relative py-16 md:py-24', className)}
      {...props}
    >
      <Grid />
      {noContainer ? children : (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      )}
    </section>
  );
};

export default Section; 