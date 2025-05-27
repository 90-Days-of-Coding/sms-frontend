"use client";

import { ThemeProvider } from "next-themes";
import React, { ReactNode } from "react";

const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider enableSystem attribute="data-theme" defaultTheme="system">
      {children}
    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
