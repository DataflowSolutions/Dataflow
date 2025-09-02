import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface ButtonProps {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gradient";
  size?: "sm" | "md" | "lg" | "xl";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading,
      leftIcon,
      rightIcon,
      children,
      disabled,
      onClick,
      type = "button",
    },
    ref
  ) => {
    const baseClasses = [
      "inline-flex items-center justify-center font-medium rounded-lg",
      "transition-all duration-200 ease-in-out",
      "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-ring",
      "disabled:opacity-50 disabled:cursor-not-allowed",
      "relative overflow-hidden",
    ];

    const variants = {
      primary: [
        "bg-primary text-primary-foreground hover:bg-primary/90",
        "shadow-lg hover:shadow-xl hover:shadow-primary/25",
        "border border-primary",
      ],
      secondary: [
        "bg-secondary text-primary-foreground hover:bg-secondary/90",
        "shadow-lg hover:shadow-xl hover:shadow-secondary/25",
        "border border-secondary",
      ],
      outline: [
        "border border-border bg-background hover:bg-accent",
        "text-text-primary hover:text-accent-foreground",
        "hover:shadow-md",
      ],
      ghost: [
        "text-text-primary hover:bg-accent hover:text-accent-foreground",
        "hover:shadow-sm",
      ],
      gradient: [
        "bg-gradient-to-r from-primary to-secondary text-primary-foreground",
        "hover:from-primary/90 hover:to-secondary/90",
        "shadow-lg hover:shadow-xl hover:shadow-primary/30",
        "animate-gradient",
      ],
    };

    const sizes = {
      sm: "h-8 px-3 text-sm gap-1.5",
      md: "h-10 px-4 text-sm gap-2",
      lg: "h-12 px-6 text-base gap-2",
      xl: "h-14 px-8 text-lg gap-3",
    };

    return (
      <motion.button
        ref={ref}
        type={type}
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        onClick={onClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        {isLoading && (
          <motion.div
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          />
        )}
        {leftIcon && !isLoading && (
          <span className="flex-shrink-0">{leftIcon}</span>
        )}
        {children}
        {rightIcon && !isLoading && (
          <span className="flex-shrink-0">{rightIcon}</span>
        )}
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
