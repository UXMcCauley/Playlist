"use client"
import { Silkscreen} from "next/dist/compiled/@next/font/dist/google";
import "./globals.css";
export  const silkscreen = Silkscreen
export default function RootLayout({ children }) {
  return (
    <html data-theme={`dark`} lang="en" className={silkscreen}>
      <body className={` antialiased`}>
        {children}
      </body>
    </html>
  );
}
