"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Sidebar() {

  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path ? "nav-item active" : "nav-item"
  }

  return (
    <aside className="sidebar" id="sidebar">

      <div className="sb-top">
        <div className="sb-logo"><span>Raiden</span></div>

        <div className="sb-status">
          <div className="pulse-dot"></div> In Development
        </div>
      </div>

      <nav>

        <Link href="/" className={isActive("/")}>
          <span className="ni"><i className="fas fa-house-chimney"></i></span>
          Home
        </Link>

        <Link href="/scripts" className={isActive("/scripts")}>
          <span className="ni"><i className="fas fa-terminal"></i></span>
          Buy Raiden
        </Link>

        <Link href="/executors" className={isActive("/executors")}>
          <span className="ni"><i className="fas fa-bolt"></i></span>
          Supported Executors
        </Link>

        <Link href="/socials" className={isActive("/socials")}>
          <span className="ni"><i className="fas fa-share-nodes"></i></span>
          Socials
        </Link>

      </nav>

    </aside>
  )
}
