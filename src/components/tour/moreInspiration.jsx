import { MOCK_INSPIRATION_ARTICLES } from '../../data/mockInspirationArticles'

function ImageFrame({ url, alt, className = '' }) {
  return (
    <div className={`relative overflow-hidden bg-slate-200 ${className}`}>
      {url ? (
        <img src={url} alt={alt} className="w-full h-full object-cover" />
      ) : (
        // TODO(articles feature owner): shown whenever an article has no
        // real image yet (see mockInspirationArticles.js) — swap in the
        // real <img> once photos exist.
        <div className="w-full h-full flex flex-col items-center justify-center gap-1 text-slate-400">
          <span className="material-symbols-outlined text-3xl">image</span>
          <span className="text-xs px-2 text-center hidden sm:block">{alt}</span>
        </div>
      )}
    </div>
  )
}

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })
}

/**
 * MoreInspiration
 * ---------------------------------------------------------------------
 * HOW TO CONNECT YOUR WORK
 * Reads from src/data/mockInspirationArticles.js — see that file for the
 * exact article shape and integration notes for whoever eventually builds
 * a real articles/blog feature (with its own admin create/manage pages).
 *
 * Props:
 *   articles?: array of { id, category, title, publishedAt, readTimeMinutes,
 *     imageUrl } — defaults to the mock data above.
 * ---------------------------------------------------------------------
 */
export default function MoreInspiration({ articles = MOCK_INSPIRATION_ARTICLES }) {
  return (
    <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-ink mb-2">More Travel Inspiration</h2>
        <p className="text-sm sm:text-base text-ink-muted">Read more stories from the road</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
          >
            <ImageFrame url={article.imageUrl} alt={article.title} className="aspect-[3/2]" />
            <div className="p-5">
              <p className="text-xs font-bold text-brand uppercase tracking-wide mb-2">
                {article.category}
              </p>
              <h3 className="text-base font-bold text-ink mb-2">{article.title}</h3>
              <p className="text-xs text-ink-muted">
                {formatDate(article.publishedAt)} · {article.readTimeMinutes} min read
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}