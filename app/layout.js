import localFont from "next/font/local";
import "./globals.css";
import { SessionProvider } from "next-auth/react"


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};
import Header from "./header"
import { Children } from "react";

//import Footer from "./footer" 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}

/*
export default function RootLayout({ children, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <html lang="en">

        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Header />
          <Children {...pageProps} />
        </body>

      </html>
    </SessionProvider>
  );
}
*/