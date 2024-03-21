import { Inter } from "next/font/google";
import "./globals.css";
import "@uploadthing/react/styles.css"
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vendeme este Auto",
  description: "Consegui el auto que buscás",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      <Head>
        <link rel="shortcut icon" href="./favicon.ico"></link>
      </Head>
    </html>
  );
}
