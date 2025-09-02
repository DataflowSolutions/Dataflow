import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "glass" | "gradient";
  padding?: "none" | "sm" | "md" | "lg" | "xl";
  rounded?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  hover?: boolean;
  onClick?: () => void;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      children,
      className,
      variant = "default",
      padding = "md",
      rounded = "lg",
      hover = false,
      onClick,
    },
    ref
  ) => {
    const baseClasses = [
      "transition-all duration-200 ease-in-out",
      "border border-border",
    ];

    const variants = {
      default: "bg-background-elevated",
      elevated: "bg-background-elevated shadow-lg hover:shadow-xl",
      glass: "glass",
      gradient:
        "bg-gradient-to-br from-background-elevated to-background-muted",
    };

    const paddings = {
      none: "",
      sm: "p-3",
      md: "p-4",
      lg: "p-6",
      xl: "p-8",
    };

    const roundings = {
      none: "",
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      full: "rounded-full",
    };

    const hoverClasses = hover
      ? [
          "hover:scale-105 hover:shadow-xl hover:shadow-primary/10",
          "cursor-pointer",
        ]
      : [];

    const Component = hover || onClick ? motion.div : "div";
    const motionProps =
      hover || onClick
        ? {
            whileHover: { y: -2 },
            whileTap: { scale: 0.98 },
          }
        : {};

    return (
      <Component
        ref={ref}
        className={cn(
          baseClasses,
          variants[variant],
          paddings[padding],
          roundings[rounded],
          hoverClasses,
          className
        )}
        onClick={onClick}
        {...motionProps}
      >
        {children}
      </Component>
    );
  }
);

Card.displayName = "Card";

export default Card;
