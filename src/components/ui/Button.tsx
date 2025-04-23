import { ButtonHTMLAttributes, forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary: "bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-sm hover:shadow-md",
        secondary: "bg-secondary-600 text-white hover:bg-secondary-700 focus:ring-secondary-500 shadow-sm hover:shadow-md",
        outline: "bg-transparent border-2 border-primary-600 text-primary-600 hover:bg-primary-50 dark:hover:bg-gray-800 focus:ring-primary-500",
        ghost: "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300",
        link: "bg-transparent underline-offset-4 hover:underline text-primary-600 dark:text-primary-400 p-0 h-auto shadow-none",
        white: "bg-white text-primary-900 hover:bg-gray-100 focus:ring-primary-500 shadow-sm hover:shadow-md",
      },
      size: {
        sm: "text-sm px-3 py-1.5 h-9",
        md: "text-base px-4 py-2 h-11",
        lg: "text-lg px-6 py-2.5 h-12",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  className?: string;
  isExternal?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant, size, fullWidth, href, isExternal, ...props }, ref) => {
    const classes = twMerge(buttonVariants({ variant, size, fullWidth, className }));

    if (href) {
      const externalProps = isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {};
      
      return (
        <Link href={href} className={classes} {...externalProps}>
          {children}
        </Link>
      );
    }

    return (
      <button className={classes} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants }; 