export default function Badge({ text }: { text: string }) {
  return (
    <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
      {text}
    </div>
  );
}
