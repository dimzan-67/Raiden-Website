"use client"

import { useEffect, useState } from "react"

export default function Topbar() {

  const [time, setTime] = useState("00:00:00")

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().toLocaleTimeString("en-US", { hour12:false })
      setTime(now)
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="topbar">

      <div className="breadcrumb" id="bc">
        <span>Raiden</span> / Home
      </div>

      <div className="tb-right">
        <span className="tb-clock">{time}</span>
        <span className="tb-pill">N/A</span>
      </div>

    </div>
  )
}
