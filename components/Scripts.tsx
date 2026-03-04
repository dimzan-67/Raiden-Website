import { scripts } from "@/data/scripts"

export default function Scripts() {
  return (
    <>

      <div className="pg-hd">
        <div className="pg-title">
          <span>Raiden</span>
        </div>

        <div className="pg-sub">
          Best Skin Changer & Unlock All for Roblox Rivals
        </div>
      </div>

      {scripts.map((script) => (
        <div key={script.name} className="script-card">

          <div className="sc-body">

            <div>

              <div className="sc-game-icon">
                <i className="fas fa-crosshairs"></i>
              </div>

              <div className="sc-title">
                {script.name}
              </div>

              <p className="sc-desc">
                {script.description}
              </p>

              <div className="feat-tags">

                {script.features.map((feature) => (
                  <span key={feature} className="ftag">
                    <i className="fas fa-check"></i> {feature}
                  </span>
                ))}

              </div>

            </div>

            <div className="sc-action">

              <a
                href={script.buyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="buy-btn"
              >
                <i className="fas fa-shopping-cart"></i>
                Buy Raiden
              </a>

            </div>

          </div>

        </div>
        
      ))}
    </>
  )
}
