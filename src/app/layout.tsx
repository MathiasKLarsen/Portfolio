import React from "react";
import "./globals.css";
import Navbar from "./Components/Navbar";
import PageChanger from "./Components/PageChanger";

export const metadata = {
  title: "Mathias Larsen - Frontend Developer",
  description: "Crafting clean, responsive interfaces with a touch of backend. Explore projects built with modern web technologies.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body>
        <Navbar />
        <PageChanger />
        {children}
      </body>
    </html>
  );
}
