"use client";

import { ReactNode } from "react";

export default function FindDonorLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      {children}
    </div>
  );
}



