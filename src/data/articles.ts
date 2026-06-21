export interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  excerpt: string;
  content: string;
  coverGradient: string;
}

export const articles: Article[] = [
  {
    id: "mastering-react-server-components",
    title: "Mastering React Server Components",
    category: "React",
    readTime: "8 min read",
    date: "June 10, 2024",
    excerpt: "A deep dive into how Server Components change the mental model of building React applications, with practical examples.",
    coverGradient: "from-blue-600 via-indigo-600 to-purple-700",
    content: `
<h2>The Paradigm Shift Nobody Warned You About</h2>
<p>React Server Components (RSC) aren't just a new feature — they represent a fundamental rethinking of where React components run and what they can do. After shipping RSC in production across three large applications, I can tell you: the learning curve is real, but the payoff is extraordinary.</p>

<h2>What Makes RSC Different?</h2>
<p>Traditional React runs entirely in the browser. Every component — whether it fetches data, renders UI, or handles events — runs on the client. Server Components break this assumption entirely.</p>
<p>With RSC, components are classified into two worlds:</p>
<ul>
  <li><strong>Server Components</strong> — run only on the server, can access databases directly, have zero JS bundle impact, and cannot use hooks or event handlers.</li>
  <li><strong>Client Components</strong> — marked with <code>"use client"</code>, run in the browser, and work exactly like traditional React components.</li>
</ul>
<pre><code>// This runs on the server — direct DB access, no client bundle
async function UserProfile({ userId }) {
  const user = await db.users.findById(userId); // Direct DB call!
  return &lt;div&gt;{user.name}&lt;/div&gt;;
}</code></pre>

<h2>The Mental Model Shift</h2>
<p>The hardest part isn't the syntax — it's rewiring your intuition. I spent the first two weeks fighting the model instead of working with it. Here's what finally clicked:</p>
<p>Think of your component tree as a <strong>mosaic of server and client islands</strong>. The server renders the structure, fetches data, and sends HTML + a minimal JS payload. Interactive islands — buttons, forms, animated elements — are client components that hydrate on top of this HTML.</p>

<h2>Data Fetching Becomes Trivial</h2>
<p>The most immediately gratifying change is data fetching. Gone are useEffect chains, loading states for initial renders, and waterfall request problems. Server components can be <code>async</code> and <code>await</code> data directly:</p>
<pre><code>// No useEffect, no useState, no loading spinner needed
async function Dashboard() {
  const [metrics, posts, users] = await Promise.all([
    fetchMetrics(),
    fetchRecentPosts(),
    fetchActiveUsers()
  ]);
  
  return (
    &lt;main&gt;
      &lt;MetricsGrid data={metrics} /&gt;
      &lt;PostsList posts={posts} /&gt;
      &lt;UserActivity users={users} /&gt;
    &lt;/main&gt;
  );
}</code></pre>
<p>This eliminates an entire category of bugs — race conditions, stale closures, and forgetting to handle loading/error states.</p>

<h2>The Bundle Size Revolution</h2>
<p>Here's a statistic that surprised me: in one project, switching a data-heavy reporting page to use Server Components reduced its JavaScript bundle by 67%. Heavy dependencies like <code>date-fns</code>, <code>markdown-it</code>, and database ORMs simply disappear from the client bundle when they only run on the server.</p>

<h2>Common Pitfalls</h2>
<p>The boundary between server and client is sharp, and crossing it awkwardly is easy. The biggest pitfall: trying to pass non-serializable data (functions, class instances) across the boundary. Stick to plain objects, primitives, and React elements.</p>
<p>The second pitfall is over-clientizing. Every <code>"use client"</code> directive creates a new bundle entry point. Treat it like a tax — pay it only when you genuinely need interactivity.</p>

<h2>Conclusion</h2>
<p>Server Components are the most significant architectural change in React since hooks. They're not a drop-in migration — you need to rethink component boundaries and data flow. But the result is applications that are faster, cheaper to serve, and dramatically simpler to reason about for data-heavy use cases.</p>
<p>Start small: convert your most data-heavy, least-interactive page to use Server Components. The experience will convince you faster than any blog post.</p>
    `
  },
  {
    id: "future-of-css-container-queries",
    title: "The Future of CSS: Container Queries",
    category: "Design",
    readTime: "5 min read",
    date: "May 22, 2024",
    excerpt: "Why container queries are the most important CSS feature since flexbox, and how you can start using them today.",
    coverGradient: "from-pink-500 via-rose-500 to-orange-500",
    content: `
<h2>The Problem with Media Queries</h2>
<p>Media queries are based on the viewport — the full browser window. But most UI components don't care about the viewport. They care about <em>their own available space</em>. A card component in a sidebar behaves differently from the same card in a full-width feed — but with media queries, you can't express that distinction.</p>
<p>Container queries solve this by letting elements respond to their parent container's size, not the viewport.</p>

<h2>Container Queries in Action</h2>
<p>The syntax is surprisingly close to what you already know:</p>
<pre><code>/* Define the container */
.card-wrapper {
  container-type: inline-size;
  container-name: card;
}

/* Style based on container size, not viewport */
@container card (min-width: 400px) {
  .card {
    display: grid;
    grid-template-columns: 200px 1fr;
  }
}

@container card (max-width: 399px) {
  .card {
    display: block;
  }
}</code></pre>
<p>The <code>.card</code> now reflows based on how wide its parent wrapper is — regardless of viewport size. Drop this card into a sidebar, a modal, or a full-page grid and it <em>just works</em>.</p>

<h2>Why This Changes Everything</h2>
<p>The implications for component design are massive:</p>
<ul>
  <li><strong>True portability</strong>: Components can be genuinely self-contained and responsive without knowing their context.</li>
  <li><strong>Design system simplicity</strong>: One component definition instead of viewport-specific variants.</li>
  <li><strong>Better collaboration</strong>: Designers can specify "this card is horizontal when it has more than 350px" without needing to know where it'll be placed.</li>
</ul>

<h2>Container Query Units</h2>
<p>Container queries also introduce new length units: <code>cqw</code> (container query width) and <code>cqh</code> (container query height), similar to <code>vw</code> and <code>vh</code> but relative to the container:</p>
<pre><code>.card-title {
  font-size: clamp(1rem, 4cqw, 2rem);
  /* Font scales with the card's width, not the viewport */
}</code></pre>

<h2>Browser Support</h2>
<p>As of 2024, container queries have <strong>93%+ global browser support</strong> across all evergreen browsers. They're production-ready. If you're still not using them, you're writing more CSS than you need to.</p>

<h2>Where Media Queries Still Win</h2>
<p>Layout changes at the page level — like switching from a side-by-side layout to stacked on mobile — still belong to media queries. Think of it this way: <strong>media queries for layout, container queries for components</strong>.</p>

<h2>Start Today</h2>
<p>Pick your most reused component — probably a card or a panel — and refactor it to use container queries. Remove the viewport-specific class variations. You'll immediately see how much simpler the CSS becomes and how much more composable the component is.</p>
<p>Container queries are the biggest CSS quality-of-life improvement since flexbox. Stop waiting.</p>
    `
  },
  {
    id: "building-resilient-microservices",
    title: "Building Resilient Microservices",
    category: "Architecture",
    readTime: "12 min read",
    date: "April 14, 2024",
    excerpt: "Lessons learned from scaling a backend system from 10k to 1M daily active users without downtime.",
    coverGradient: "from-emerald-500 via-teal-600 to-cyan-700",
    content: `
<h2>The 100x Scale Journey</h2>
<p>Eighteen months ago, our platform served 10,000 daily active users on a modest monolith. Today it serves over 1 million. This is the story of how we migrated to microservices without a single planned outage — and the hard lessons we learned along the way.</p>

<h2>Why Microservices? (And Why It's Not the Answer You Think)</h2>
<p>Let me be direct: microservices are not inherently better than a monolith. The organization that benefits most from microservices is one with multiple independent teams shipping features in different domains. If you have five engineers, you probably shouldn't have ten services.</p>
<p>Our reason for migrating was team scaling, not technical necessity. We grew from 4 to 28 engineers over 12 months, and deployment conflicts became a daily friction. That's when microservices made sense.</p>

<h2>Lesson 1: Strangle the Monolith, Don't Rewrite It</h2>
<p>The most dangerous thing you can do is attempt a big-bang rewrite. We used the Strangler Fig pattern — incrementally extracting bounded contexts into services while keeping the monolith as the default fallback.</p>
<pre><code>// API Gateway routes — gradually shifting traffic
const routes = {
  "/api/payments": "payments-service:3001",      // ✅ Extracted
  "/api/notifications": "notification-svc:3002", // ✅ Extracted
  "/api/users/*": "monolith:8080",               // ⏳ Still pending
  "/api/*": "monolith:8080"                      // Fallback
};</code></pre>
<p>This let us migrate at our own pace. No big-bang, no feature freeze, no all-hands crisis at 2am.</p>

<h2>Lesson 2: Embrace Circuit Breakers Early</h2>
<p>In a monolith, a slow database query makes your app slow. In microservices, a slow upstream service can cascade into a system-wide outage if you don't have circuit breakers.</p>
<p>We learned this the hard way when our notification service's Twilio dependency had a 30-second timeout. Every request to our checkout service waited for that timeout before proceeding, which exhausted our connection pool and took down the entire checkout flow.</p>
<pre><code>const circuitBreaker = new CircuitBreaker(notificationService.send, {
  timeout: 3000,      // Fail fast after 3s
  errorThresholdPercentage: 50,
  resetTimeout: 30000 // Try again after 30s
});

circuitBreaker.fallback(() => {
  // Queue notification for later — never block checkout
  queue.add('send-notification', payload, { delay: 60000 });
});</code></pre>

<h2>Lesson 3: Distributed Tracing is Non-Negotiable</h2>
<p>Once you have 15 services, debugging a slow request requires tracing it across every service it touched. Without distributed tracing, you're flying blind. We implemented OpenTelemetry on day one of our first extracted service — that was the right call.</p>

<h2>Lesson 4: Design for Failure at the Data Layer</h2>
<p>The hardest part of microservices isn't the HTTP boundaries — it's the data. Each service owns its data. This means distributed transactions, eventual consistency, and the saga pattern become daily concerns.</p>
<p>For our checkout flow (spanning order, payment, inventory, and notification services), we implemented the choreography-based saga pattern:</p>
<ul>
  <li>Order service creates an order and emits <code>OrderCreated</code></li>
  <li>Payment service listens, charges the card, emits <code>PaymentProcessed</code> or <code>PaymentFailed</code></li>
  <li>Inventory service listens to <code>PaymentProcessed</code>, reserves stock, emits <code>StockReserved</code></li>
  <li>Compensation events roll back earlier steps on failure</li>
</ul>

<h2>Lesson 5: Observability Over Logging</h2>
<p>Logs are a blunt instrument. We shifted to the three pillars of observability — metrics, traces, and structured logs — and our incident MTTR dropped from 45 minutes to under 8.</p>

<h2>The Numbers</h2>
<p>After 18 months on microservices:</p>
<ul>
  <li>Deployment frequency: 3x/month → 15x/day</li>
  <li>Mean time to recovery: 45min → 8min</li>
  <li>P99 API latency: 2.1s → 180ms</li>
  <li>Infrastructure cost per 1k requests: -40%</li>
</ul>

<h2>Final Advice</h2>
<p>Microservices are a tool, not a goal. Start with the strangler fig. Add circuit breakers before you think you need them. Instrument everything from day one. And never, ever attempt a big-bang migration.</p>
<p>The journey from 10k to 1M users wasn't about clever algorithms — it was about building systems that fail gracefully and recover automatically.</p>
    `
  }
];
