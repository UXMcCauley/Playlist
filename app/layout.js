"use client"
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html data-theme={`dark`} lang="en">
      <body className={` antialiased`}>
        {children}
      </body>
    </html>
  );
}
