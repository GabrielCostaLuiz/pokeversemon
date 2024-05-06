import React from "react";
import { Session } from "next-auth";
import { NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemeProvider } from "next-themes";

interface ProvidersProps {
  children: React.ReactNode;
  session?: Session;
}

const Providers: React.FC<ProvidersProps> = ({ children, session }) => {
  return (
    <NextUIProvider>
      <NextThemeProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemeProvider>
    </NextUIProvider>
  );
}

export default Providers;
