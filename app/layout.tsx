import "./globals.css"
import "./styles.css"

import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"

export const metadata = {
  title: "Raiden",
  description: "Raiden Rivals Script",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>

      <body>

        {/* Ambient background */}
        <div className="orb orb1"></div>
        <div className="orb orb2"></div>
        <div className="orb orb3"></div>

        <div className="mob-overlay" id="mob-overlay"></div>

        <Sidebar />

        <main className="main">

          <Topbar />

          <div className="content">
            {children}
          </div>

        </main>

      </body>

    </html>
  )
}
