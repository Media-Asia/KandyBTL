import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import "./hover-zoom-tilt.css"
import { Poppins } from "next/font/google"
import Script from "next/script"
import Head from "next/head"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "KandyBTL - Outdoor Advertising in Kandy, Sri Lanka",
  description: "KandyBTL is the leading outdoor advertising agency in Kandy, Sri Lanka. We offer billboards, bus shelter ads, roundabout branding, and more.",
  icons: {
    icon: "https://i.postimg.cc/7662YgyG/432389509-122094905402252660-5301846214880630571-n.jpg",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <Head>
        <title>KandyBTL - Outdoor Advertising in Kandy, Sri Lanka</title>
        <meta name="description" content="KandyBTL is the leading outdoor advertising agency in Kandy, Sri Lanka. We offer billboards, bus shelter ads, roundabout branding, and more." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.kandybtl.lk/" />
        {/* Open Graph */}
        <meta property="og:title" content="KandyBTL - Outdoor Advertising in Kandy, Sri Lanka" />
        <meta property="og:description" content="KandyBTL is the leading outdoor advertising agency in Kandy, Sri Lanka. We offer billboards, bus shelter ads, roundabout branding, and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.kandybtl.lk/" />
        <meta property="og:image" content="/public/placeholder-logo.png" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="KandyBTL - Outdoor Advertising in Kandy, Sri Lanka" />
        <meta name="twitter:description" content="KandyBTL is the leading outdoor advertising agency in Kandy, Sri Lanka. We offer billboards, bus shelter ads, roundabout branding, and more." />
        <meta name="twitter:image" content="/public/placeholder-logo.png" />
        <link rel="icon" href="/placeholder-logo.png" type="image/png" />
      </Head>
      <body>
        {children}
        <Script
          id="crisp-chat"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.$crisp=[];
              window.CRISP_WEBSITE_ID="25c75610-62ff-4650-8682-f10ab6ad2e2f";
              (function(){
                d=document;
                s=d.createElement("script");
                s.src="https://client.crisp.chat/l.js";
                s.async=1;
                d.getElementsByTagName("head")[0].appendChild(s);
              })();
            `,
          }}
        />
      </body>
    </html>
  )
}
