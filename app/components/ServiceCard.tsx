export default function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="flex flex-col items-center text-center gap-4 rounded-2xl p-6 bg-muted/20 hover:bg-muted/30 transition-all duration-200 border border-accent/40 shadow-md hover:shadow-lg h-full transform hover:-translate-y-1">
      {/* Icon on Top */}
      <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 text-primary text-2xl">
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-bold text-text-primary">{title}</h3>
        <p className="text-sm text-text-primary/70 leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}
