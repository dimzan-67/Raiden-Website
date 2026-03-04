import Link from "next/link"
import { executors } from "@/data/executors"

export default function Executors() {
  return (
    <div>

      <div className="pg-hd">
        <div className="pg-title">
          Supported <span>Executors</span>
        </div>
        <div className="pg-sub">
          Free and Paid compatible executors
        </div>
      </div>

      <div className="exec-grid">

        {executors.map((exec) => (
          <Link
            key={exec.slug}
            href={`/executors/${exec.slug}`}
            className="exec-card"
          >
            <img src={exec.image} alt={exec.name} />
            <div className="exec-name">{exec.name}</div>
          </Link>
        ))}

      </div>

    </div>
  )
}
