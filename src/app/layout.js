import { Inter } from "next/font/google";
import "./globals.css";
import SessionWrapper from "@/components/modules/SessionWrapper";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionWrapper>
          <main>{children}</main>
        </SessionWrapper>
      </body>
    </html>
  );
}
