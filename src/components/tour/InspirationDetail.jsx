import { useParams } from "react-router-dom";
import PublicHeader from "../layout/PublicHeader";
import PublicFooter from "../layout/PublicFooter";
import MoreInspiration from "./moreInspiration";
import { MOCK_INSPIRATION_ARTICLES } from "../../data/mockInspirationArticles";
import { formatDate } from "../../utils/formatDate";

/**
 * InspirationDetail
 * ---------------------------------------------------------------------
 * HOW TO CONNECT YOUR WORK
 * Routed as /inspiration/:id (see App.jsx). Looks up the matching article
 * from src/data/mockInspirationArticles.js by its id — the same data
 * source moreInspiration.jsx's cards read from, and the same id each
 * card links to. Once a real articles/blog feature exists, replace the
 * lookup below with a real fetch by id; everything else can stay as-is
 * since it already just expects one article object matching that shape.
 * ---------------------------------------------------------------------
 */
export default function InspirationDetail() {
  const { id } = useParams();
  const article = id
    ? MOCK_INSPIRATION_ARTICLES.find((item) => item.id === id)
    : MOCK_INSPIRATION_ARTICLES[0];

  if (!article) {
    return (
      <div className="min-h-screen bg-gray-100">
        <PublicHeader />
        <main className="max-w-2xl mx-auto px-6 py-24 text-center">
          <h1 className="text-2xl font-bold text-slate-900 mb-2">
            Article not found
          </h1>
          <p className="text-slate-500">
            It may have been removed, or the link is incorrect.
          </p>
        </main>
        <PublicFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <PublicHeader />

      {/* ================= HERO ================= */}
      <section className="mx-auto max-w-full pt-5 px-10">
        <div className="relative h-[450px] overflow-hidden rounded-sm">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
          <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-24 text-white">
            <span className="mb-4 w-fit rounded bg-teal-500 px-3 py-1 text-[10px] font-bold uppercase">
              {article.category}
            </span>
            <h1 className="max-w-2xl text-2xl font-extrabold leading-tight md:text-4xl">
              {article.title}
            </h1>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-black">
                {article.author.avatarEmoji}
              </div>
              <div>
                <p className="text-sm font-semibold">
                  By {article.author.name}
                </p>
                <p className="text-xs text-gray-300">
                  {formatDate(article.publishedAt)} · {article.readTimeMinutes}{" "}
                  min read
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-full bg-white px-10 py-10 md:px-16">
        {article.introParagraphs.map((paragraph, index) => (
          <p key={index} className="mb-6 text-lg leading-7 text-gray-1000">
            {paragraph}
          </p>
        ))}

        {/* ================= QUOTE ================= */}
        <blockquote className="my-8 border-l-4 border-teal-500 bg-teal-50 px-6 py-5">
          <p className="text-xl font-semibold italic leading-7 text-gray-800">
            "{article.quote.text}"
          </p>
          <footer className="mt-3 text-s text-gray-700">
            — {article.quote.author}
          </footer>
        </blockquote>

        {/* ================= SECTION ================= */}
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          {article.sectionHeading}
        </h2>
        {article.sectionParagraphs.map((paragraph, index) => (
          <p key={index} className="mb-6 text-lg leading-7 text-gray-1000">
            {paragraph}
          </p>
        ))}

        {/* ================= ARTICLE IMAGE ================= */}
        <div className="my-8 overflow-hidden rounded-lg">
          <img
            src={article.articleImageUrl}
            alt={`${article.title} detail`}
            className="h-[250px] w-full object-cover md:h-[360px]"
          />
        </div>

        {/* ================= SHARE ================= */}
        <div className="flex flex-wrap items-center gap-2 border-b border-gray-200 pb-6">
          <span className="mr-2 text-xs font-semibold text-gray-600">
            Share this article
          </span>
          <button className="rounded border border-gray-200 bg-white px-3 py-1.5 text-[10px] text-gray-600 transition hover:bg-gray-100">
            Facebook
          </button>
          <button className="rounded border border-gray-200 bg-white px-3 py-1.5 text-[10px] text-gray-600 transition hover:bg-gray-100">
            Twitter
          </button>
          <button className="rounded border border-gray-200 bg-white px-3 py-1.5 text-[10px] text-gray-600 transition hover:bg-gray-100">
            Pinterest
          </button>
        </div>

        {/* ================= AUTHOR ================= */}
        <div className="mt-8 flex gap-4 rounded-xl bg-gray-50 p-5">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-200 text-xl">
            {article.author.avatarEmoji}
          </div>
          <div>
            <h3 className="text-m font-bold text-gray-900">
              {article.author.name}
            </h3>
            <p className="mt-1 text-sm leading-5 text-gray-500">
              {article.authorBio}
            </p>
          </div>
        </div>
      </main>

      {/* ================= MORE INSPIRATION ================= */}
      <MoreInspiration excludeId={article.id} />

      <PublicFooter />
    </div>
  );
}
