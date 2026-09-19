// Placeholder data for both the "More Travel Inspiration" card grid
// (components/tour/moreInspiration.jsx) and the full article page
// (components/tour/InspirationDetail.jsx) — the same object powers both,
// so a card's `id` is what InspirationDetail looks up via the URL to know
// which article to render.
//
// HOW TO CONNECT YOUR WORK: once a real articles/blog feature exists
// (with its own admin create/manage pages, similar to destinations),
// replace this file's usage in both components with real fetched data —
// each article should keep this same shape.
export const MOCK_INSPIRATION_ARTICLES = [
  {
    id: 'article-1',
    category: 'Islands',
    title: "Sihanoukville's Secret Islands",
    publishedAt: '2024-09-28',
    readTimeMinutes: 5,
    imageUrl: 'https://img.harbor-property.com/bkarticle/2021/10/29/153239491.png',
    author: { name: 'Sophea Ly', avatarEmoji: '👩🏻' },
    introParagraphs: [
      "Most visitors to Sihanoukville see only the crowded main beach and the ferry terminal to Koh Rong — but a short boat ride further out reveals a scattering of smaller islets that rarely make it into guidebooks. Koh Ta Kiev and Koh Russei sit close enough for a day trip, yet feel worlds away from the tourist strip.",
      "These islands are still mostly undeveloped, with a handful of simple bungalow operations run by local families rather than resort chains. What you get in exchange for fewer amenities is genuinely empty white sand, water clear enough to see your feet in, and evenings lit only by string lights and stars.",
    ],
    quote: {
      text: "The moment the boat engine cuts out and it's just the water lapping against the hull, you understand why people keep coming back to these smaller islands instead of the popular ones.",
      author: 'Chantha Rin, local boat operator',
    },
    sectionHeading: 'Getting There Without the Crowds',
    sectionParagraphs: [
      'Shared longtail boats leave from Otres Beach most mornings, but timing matters — arriving before 9am usually means having a stretch of beach entirely to yourself before day-trippers from the main resorts show up around midday. Bring cash, a dry bag, and enough water for the day, since most islets have only one or two small food stalls.',
    ],
    articleImageUrl: 'https://img.harbor-property.com/bkarticle/2021/10/29/153239491.png',
    authorBio:
      'Sophea is a Phnom Penh-based travel writer who covers the coastal provinces, with a particular focus on small-scale, community-run tourism along the Cambodian coastline.',
  },
  {
    id: 'article-2',
    category: 'Food',
    title: 'Kampot Pepper Farm Guide',
    publishedAt: '2024-08-15',
    readTimeMinutes: 5,
    imageUrl: 'https://laplantation.com/wp-content/uploads/2022/11/3-visite-vuedrone.jpg',
    author: { name: 'Daro Chan', avatarEmoji: '👨🏻‍🌾' },
    introParagraphs: [
      "Kampot pepper earned its reputation long before \"single-origin\" became a marketing term — French colonial chefs were requesting it by name over a century ago, and the province's volcanic red soil is still credited with giving the peppercorns their distinctive heat and citrus-like finish.",
      "Today, a handful of family-run farms just outside Kampot town welcome visitors for walking tours through the pepper vines, most of which are trained up wooden poles in neat rows under the shade of taller trees. It's a far more intimate experience than the plantation's export volume might suggest.",
    ],
    quote: {
      text: "People taste our pepper and expect a factory behind it. Really it's the same families who've been doing this for three generations, just with better roads now.",
      author: 'Ly Sokha, third-generation pepper farmer',
    },
    sectionHeading: 'From Vine to Table',
    sectionParagraphs: [
      "Peppercorns are hand-picked at different stages of ripeness to produce black, red, and white pepper — all from the exact same vine. Most farms offer a short tasting at the end of the tour, and it's worth buying directly from the grower: prices are lower than in town, and the pepper is noticeably fresher than what's usually sold to tourists near the riverside.",
    ],
    articleImageUrl: 'https://laplantation.com/wp-content/uploads/2022/11/3-visite-vuedrone.jpg',
    authorBio:
      "Daro writes about Cambodian food and agriculture, with a focus on the small producers behind the country's best-known culinary exports.",
  },
  {
    id: 'article-3',
    category: 'Culture',
    title: 'Phnom Penh Architectural Walk',
    publishedAt: '2024-07-10',
    readTimeMinutes: 5,
    imageUrl: 'https://www.jaredsdetours.com/wp-content/uploads/2023/09/cambodiacover_image-1024x809.jpg',
    author: { name: 'Vireak Sok', avatarEmoji: '👨🏻‍🎨' },
    introParagraphs: [
      "Phnom Penh's skyline tells a layered story: gilded Khmer temple roofs sit a few blocks from crumbling French colonial villas, which themselves stand in the shadow of 1960s New Khmer Architecture — a bold modernist style unique to Cambodia's post-independence years.",
      'A walking route through the riverside district and into the surrounding streets takes you past all three eras within a couple of hours, without needing a guide or an entrance ticket for most of it.',
    ],
    quote: {
      text: "You can read Cambodia's whole modern history in its buildings if you know where to look — colonization, independence, and everything that came after.",
      author: 'Bopha Meas, architecture historian',
    },
    sectionHeading: 'A City of Layers',
    sectionParagraphs: [
      'Start at the Royal Palace at sunrise before the heat sets in, then head north along Sisowath Quay to see the restored French colonial shopfronts near the Night Market. From there, a short tuk-tuk ride to the Chaktomuk Conference Hall and the National Library shows off the New Khmer Architecture movement at its most distinctive — all fan-shaped roofs and dramatic angles.',
    ],
    articleImageUrl: 'https://www.jaredsdetours.com/wp-content/uploads/2023/09/cambodiacover_image-1024x809.jpg',
    authorBio:
      "Vireak researches 20th-century Cambodian architecture and leads occasional walking tours of Phnom Penh's New Khmer Architecture landmarks.",
  },
]