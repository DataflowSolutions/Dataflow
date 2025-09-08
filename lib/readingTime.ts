// lib/readingTime.ts
export function computeReadingTime(md: string, wpm = 200) {
  const text = md.replace(/```[\s\S]*?```/g, "")
                 .replace(/`[^`]*`/g, "")
                 .replace(/[#>*_~\-\[\]\(\)`]/g, " ");
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(words / wpm));
  return `${minutes} min läsning`;
}
