import { cn } from "@/lib/utils";

interface BadgeProps {
  text: string;
  variant?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "error"
    | "gradient";
  size?: "sm" | "md" | "lg";
  icon?: React.ReactNode;
  className?: string;
}

export default function Badge({
  text,
  variant = "default",
  size = "md",
  icon,
  className,
}: BadgeProps) {
  const baseClasses = [
    "inline-flex items-center font-medium rounded-full",
    "border transition-all duration-200 ease-in-out",
  ];

  const variants = {
    default: "bg-muted text-muted-foreground border-border",
    primary: "bg-primary/10 text-primary border-primary/20",
    secondary: "bg-secondary/10 text-secondary border-secondary/20",
    success: "bg-success/10 text-success border-success/20",
    warning: "bg-warning/10 text-warning border-warning/20",
    error: "bg-error/10 text-error border-error/20",
    gradient:
      "bg-gradient-to-r from-primary/10 to-secondary/10 text-primary border-primary/20",
  };

  const sizes = {
    sm: "px-2 py-1 text-xs gap-1",
    md: "px-3 py-1.5 text-sm gap-1.5",
    lg: "px-4 py-2 text-base gap-2",
  };

  return (
    <span
      className={cn(baseClasses, variants[variant], sizes[size], className)}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {text}
    </span>
  );
}
