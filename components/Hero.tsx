import Link from "next/link"

export default function Hero() {
  return (
    <>
      <div className="hero">

        <div className="hero-title">
          Your Premium<br />
          <span className="g">Rivals Script.</span>
        </div>

        <p className="hero-desc">
          Fast and reliable script for Roblox Rivals — supporting Unlock All and a Skin Changer.
        </p>

        <div className="hero-btns">
          <Link href="/scripts" className="btn-em">
Buy Raiden
</Link>
        </div>

      </div>

      <div className="stats-grid">

        <div className="stat-card">
          <div className="stat-num">1</div>
          <div className="stat-lbl">Game Supported</div>
        </div>

        <div className="stat-card">
          <div className="stat-num">20+</div>
          <div className="stat-lbl">Happy Customers</div>
        </div>

        <div className="stat-card">
          <div className="stat-num">4</div>
          <div className="stat-lbl">Developers</div>
        </div>

      </div>
    </>
  )
}
