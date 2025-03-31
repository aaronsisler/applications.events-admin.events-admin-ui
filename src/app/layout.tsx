import type { Metadata } from "next";

import { StoreProvider } from "./store-provider";
import { Nav } from "./common/nav";

import "./styles/globals.css";

export const metadata: Metadata = {
  title: "Events Admin",
  description: "Events Admin UI that calls the Events Admin Service for data",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <Nav />
          <main>{children}</main>
        </StoreProvider>
      </body>
    </html>
  );
}
