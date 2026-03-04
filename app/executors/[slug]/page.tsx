import Link from "next/link"
import { executors } from "@/data/executors"

export default async function ExecutorPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {

  const { slug } = await params

  const executor = executors.find((e) => e.slug === slug)

  if (!executor) {
    return <div>Executor not found</div>
  }

  return (
  <div className="executor-page">

    {/* Back button wrapper */}
    <div className="back-row">
      <Link href="/executors" className="btn-em back-btn">
        ← Back to Executors
      </Link>
    </div>

    <div className="pg-hd">
      <div className="pg-title">{executor.name}</div>
      <div className="pg-sub">Supported Executor</div>
    </div>

    <div className="exec-card">
      <img src={executor.image} alt={executor.name} />
      <div className="exec-name">{executor.name}</div>

      <a
        href={executor.url}
        target="_blank"
        rel="noopener noreferrer"
        className="buy-btn"
      >
        Download
      </a>
    </div>

  </div>
)
}
