import './globals.css'

export const metadata = {
  title: 'Merit Boost',
  description: "MeritBoost is all about education. We offer science and math lessons, interactive content, and resources to help you learn and excel in these subjects. It's a hub for students and learners seeking to expand their knowledge in a fun and engaging way.",
}

export default function RootLayout({ children,
}: {
  children: React.ReactNode
} ) {
  return (
    <html className="bg-bg" lang="en">
      <body>
      {children}
      </body>
    </html>
  )
}

