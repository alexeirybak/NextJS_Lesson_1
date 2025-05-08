"use client";

import { useTheme } from "@/components/theme-provider";

export default function ClientRoutePage() {
  const theme = useTheme();

  return (
    <div
      className="image-slider-container"
      style={{ backgroundColor: theme.color.primary }}
    >Тема применяется</div>
  );
}
