import './globals.css'
import Script from "next/script";

export const metadata = {
  title: 'Merit Boost',
  description: "MeritBoost is all about education. We offer science and math lessons, interactive content, and resources to help you learn and excel in these subjects. It's a hub for students and learners seeking to expand their knowledge in a fun and engaging way.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className="bg-bg" lang="en">
      <Script id="gtag" async src="https://www.googletagmanager.com/gtag/js?id=G-GXDNP98SJ4"></Script>
      <Script id="gtag-config">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GXDNP98SJ4');
        `}
      </Script>
      <body>
        {children}
      </body>
    </html>
  );
}


