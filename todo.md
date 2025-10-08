# Blog Feature Implementation - TODO Checklist

**Project**: Avanço Website - Blog Section
**Status**: Ready to Start
**Last Updated**: October 8, 2025

---

## Quick Reference

- [ ] = Not Started
- [~] = In Progress
- [✓] = Completed
- [!] = Blocked
- [-] = Skipped/Not Applicable

---

## Phase 1: Core Infrastructure (Week 1)
**Goal**: Set up MDX processing and data fetching

### Dependencies & Setup
- [ ] Install core dependencies
  ```bash
  npm install next-mdx-remote gray-matter reading-time remark-gfm rehype-slug rehype-autolink-headings shiki date-fns
  ```
- [ ] Verify TypeScript configuration supports MDX
- [ ] Update `.gitignore` for content cache if needed

### Directory Structure
- [ ] Create `content/` directory in project root
- [ ] Create `content/blog/` directory
- [ ] Create sample post folders:
  - [ ] `content/blog/getting-started-bjj-notes/`
  - [ ] `content/blog/spaced-repetition-techniques/`
  - [ ] `content/blog/introducing-avanco/`
- [ ] Create `public/blog/images/` directory for post assets

### Type Definitions
- [ ] Create `src/types/blog.ts`
  - [ ] Define `BlogPost` interface
  - [ ] Define `Author` interface
  - [ ] Define `Category` type
  - [ ] Define `BlogPostMetadata` type
  - [ ] Define `PostWithContent` type
  - [ ] Export all types

### MDX Processing Utilities
- [ ] Create `src/lib/blog/` directory
- [ ] Create `src/lib/blog/mdx.ts`
  - [ ] Implement `compileMDX()` function
  - [ ] Configure MDX plugins (remark-gfm, rehype-slug, etc.)
  - [ ] Configure Shiki for syntax highlighting
  - [ ] Add error handling for invalid MDX
  - [ ] Add TypeScript types

### Post Fetching Utilities
- [ ] Create `src/lib/blog/posts.ts`
  - [ ] Implement `getAllPosts()` - fetch all posts
  - [ ] Implement `getPost(slug)` - fetch single post
  - [ ] Implement `getFeaturedPosts()` - get featured posts
  - [ ] Implement `getPostsByCategory(category)` - filter by category
  - [ ] Implement `getPostsByTag(tag)` - filter by tag
  - [ ] Implement `getRecentPosts(limit)` - get N recent posts
  - [ ] Add frontmatter validation
  - [ ] Add reading time calculation
  - [ ] Sort posts by date (newest first)
  - [ ] Filter out draft posts in production

### Category & Tag Utilities
- [ ] Create `src/lib/blog/categories.ts`
  - [ ] Implement `getAllCategories()` - get unique categories
  - [ ] Implement `getCategoryCount(category)` - count posts per category
  - [ ] Implement `getCategoryMetadata()` - get display names, colors, etc.
- [ ] Create `src/lib/blog/tags.ts`
  - [ ] Implement `getAllTags()` - get unique tags
  - [ ] Implement `getTagCount(tag)` - count posts per tag
  - [ ] Implement `normalizeTag(tag)` - consistent tag formatting

### Sample Content
- [ ] Write `content/blog/getting-started-bjj-notes/index.mdx`
  - [ ] Complete frontmatter with all fields
  - [ ] Write 800-1000 word article
  - [ ] Add cover image
  - [ ] Add 2-3 supporting images
  - [ ] Test MDX compilation
- [ ] Write `content/blog/spaced-repetition-techniques/index.mdx`
  - [ ] Complete frontmatter
  - [ ] Write 800-1000 word article
  - [ ] Add images
- [ ] Write `content/blog/introducing-avanco/index.mdx`
  - [ ] Complete frontmatter
  - [ ] Write product announcement post
  - [ ] Add product screenshots

### Testing
- [ ] Test MDX compilation with all 3 sample posts
- [ ] Test frontmatter parsing
- [ ] Test `getAllPosts()` returns correct data
- [ ] Test `getPost()` with valid and invalid slugs
- [ ] Test error handling for malformed frontmatter
- [ ] Verify reading time calculation accuracy
- [ ] Run TypeScript type checking: `npx tsc --noEmit`

---

## Phase 2: Blog Pages & Routing (Week 2)
**Goal**: Build blog listing and individual post pages

### Blog Listing Page
- [ ] Create `src/app/blog/page.tsx`
  - [ ] Implement async server component
  - [ ] Fetch all posts with `getAllPosts()`
  - [ ] Generate metadata for SEO
  - [ ] Render blog hero section
  - [ ] Render featured post (if any)
  - [ ] Render post grid
  - [ ] Add pagination logic (12 posts per page)
  - [ ] Test rendering with sample posts

### Individual Post Page
- [ ] Create `src/app/blog/[slug]/page.tsx`
  - [ ] Implement async server component
  - [ ] Implement `generateStaticParams()` for all posts
  - [ ] Implement `generateMetadata()` with post data
  - [ ] Fetch post with `getPost(slug)`
  - [ ] Handle 404 for invalid slugs (notFound())
  - [ ] Render post header
  - [ ] Render MDX content
  - [ ] Render post footer
  - [ ] Add structured data (JSON-LD)
  - [ ] Test with all sample posts

### Category Filtering
- [ ] Create `src/app/blog/category/[category]/page.tsx`
  - [ ] Implement async server component
  - [ ] Implement `generateStaticParams()` for all categories
  - [ ] Implement `generateMetadata()` with category info
  - [ ] Fetch posts with `getPostsByCategory()`
  - [ ] Render filtered post grid
  - [ ] Add category description/hero
  - [ ] Test with all categories

### Tag Filtering
- [ ] Create `src/app/blog/tag/[tag]/page.tsx`
  - [ ] Implement async server component
  - [ ] Implement `generateStaticParams()` for all tags
  - [ ] Implement `generateMetadata()` with tag info
  - [ ] Fetch posts with `getPostsByTag()`
  - [ ] Render filtered post grid
  - [ ] Test with sample tags

### Metadata & SEO
- [ ] Update `src/app/layout.tsx` with blog metadata
- [ ] Implement dynamic metadata for blog listing
- [ ] Implement dynamic metadata for individual posts
- [ ] Implement dynamic metadata for category pages
- [ ] Implement dynamic metadata for tag pages
- [ ] Test Open Graph tags with debugger
- [ ] Test Twitter Card tags

### Testing
- [ ] Navigate to `/blog` - listing renders
- [ ] Navigate to `/blog/getting-started-bjj-notes` - post renders
- [ ] Navigate to `/blog/category/training-tips` - filtered view works
- [ ] Navigate to `/blog/tag/note-taking` - tag view works
- [ ] Test 404 handling for invalid slugs
- [ ] Verify metadata in page source
- [ ] Run `npm run build` - check for errors

---

## Phase 3: UI Components (Week 2-3)
**Goal**: Build reusable blog components

### Blog Listing Components

#### BlogHero
- [ ] Create `src/components/blog/blog-hero.tsx`
  - [ ] Design hero section with gradient background
  - [ ] Add title: "BJJ Training Tips & Insights"
  - [ ] Add subtitle/description
  - [ ] Add Framer Motion animations
  - [ ] Make responsive (mobile/tablet/desktop)
  - [ ] Test rendering

#### BlogCard
- [ ] Create `src/components/blog/blog-card.tsx`
  - [ ] Accept `post` prop (BlogPost type)
  - [ ] Display cover image with next/image
  - [ ] Display category badge
  - [ ] Display title (truncate if needed)
  - [ ] Display excerpt (auto or manual)
  - [ ] Display author, date, reading time
  - [ ] Add hover animation (lift up)
  - [ ] Link to post page
  - [ ] Create variant: `hero` (large featured)
  - [ ] Create variant: `grid` (standard card)
  - [ ] Test with sample posts

#### BlogGrid
- [ ] Create `src/components/blog/blog-grid.tsx`
  - [ ] Accept `posts` array prop
  - [ ] Implement responsive grid (1 col mobile, 2 tablet, 3 desktop)
  - [ ] Map over posts and render BlogCard
  - [ ] Add stagger animation with Framer Motion
  - [ ] Handle empty state
  - [ ] Test with various post counts

#### BlogFilters
- [ ] Create `src/components/blog/blog-filters.tsx`
  - [ ] "use client" directive
  - [ ] Display category pills/buttons
  - [ ] Highlight active category
  - [ ] Update URL params on click
  - [ ] Add "All" option
  - [ ] Make responsive (horizontal scroll on mobile)
  - [ ] Add smooth animations
  - [ ] Test category switching

#### BlogSearch
- [ ] Create `src/components/blog/blog-search.tsx`
  - [ ] "use client" directive
  - [ ] Implement controlled input
  - [ ] Debounce input (300ms)
  - [ ] Update URL params with search query
  - [ ] Add search icon (Lucide)
  - [ ] Add clear button
  - [ ] Add keyboard shortcuts (⌘K to focus)
  - [ ] Make responsive
  - [ ] Test search functionality

### Blog Post Components

#### PostHeader
- [ ] Create `src/components/blog/post-header.tsx`
  - [ ] Accept `post` prop
  - [ ] Display category badge
  - [ ] Display title (large, bold)
  - [ ] Display author avatar + name
  - [ ] Display publish date (formatted)
  - [ ] Display reading time
  - [ ] Display cover image (full-width, responsive)
  - [ ] Add breadcrumbs (Home > Blog > Category > Post)
  - [ ] Add Framer Motion fade-in animation
  - [ ] Make responsive
  - [ ] Test rendering

#### PostContent
- [ ] Create `src/components/blog/post-content.tsx`
  - [ ] Accept `content` prop (MDX compiled)
  - [ ] Wrap in prose container
  - [ ] Apply custom prose styles
  - [ ] Pass custom MDX components
  - [ ] Add smooth scroll behavior
  - [ ] Test with various content types

#### PostFooter
- [ ] Create `src/components/blog/post-footer.tsx`
  - [ ] Accept `post` prop
  - [ ] Display tags as clickable pills
  - [ ] Include ShareButtons component
  - [ ] Include AuthorBio component
  - [ ] Add dividers/spacing
  - [ ] Make responsive
  - [ ] Test rendering

#### TableOfContents
- [ ] Create `src/components/blog/table-of-contents.tsx`
  - [ ] "use client" directive
  - [ ] Extract headings from post content
  - [ ] Generate nested list structure
  - [ ] Add click-to-scroll functionality
  - [ ] Highlight active heading on scroll (IntersectionObserver)
  - [ ] Make sticky on desktop, collapsible on mobile
  - [ ] Add smooth scroll behavior
  - [ ] Style with orange accents
  - [ ] Test with long posts

#### ReadingProgress
- [ ] Create `src/components/blog/reading-progress.tsx`
  - [ ] "use client" directive
  - [ ] Calculate scroll percentage
  - [ ] Render fixed top progress bar
  - [ ] Animate width based on scroll
  - [ ] Use orange gradient
  - [ ] Don't show on blog listing
  - [ ] Test scroll tracking

#### RelatedPosts
- [ ] Create `src/components/blog/related-posts.tsx`
  - [ ] Accept `currentPost` prop
  - [ ] Fetch 3 related posts (by tags/category)
  - [ ] Render as small BlogCard grid
  - [ ] Add "Related Posts" heading
  - [ ] Add Framer Motion animations
  - [ ] Make responsive
  - [ ] Test recommendations

#### ShareButtons
- [ ] Create `src/components/blog/share-buttons.tsx`
  - [ ] "use client" directive
  - [ ] Implement Twitter/X share
  - [ ] Implement LinkedIn share
  - [ ] Implement Facebook share
  - [ ] Implement copy link button
  - [ ] Add icons (Lucide)
  - [ ] Add hover animations
  - [ ] Track share events in analytics
  - [ ] Test sharing functionality

#### AuthorBio
- [ ] Create `src/components/blog/author-bio.tsx`
  - [ ] Accept `author` prop
  - [ ] Display avatar (rounded)
  - [ ] Display name
  - [ ] Display bio
  - [ ] Display social links (Twitter, LinkedIn)
  - [ ] Add subtle border/background
  - [ ] Make responsive
  - [ ] Test rendering

#### NewsletterSignup
- [ ] Create `src/components/blog/newsletter-signup.tsx`
  - [ ] "use client" directive
  - [ ] Design CTA box with gradient
  - [ ] Add email input field
  - [ ] Add submit button
  - [ ] Integrate with Tally (or email service)
  - [ ] Add success/error states
  - [ ] Add loading state
  - [ ] Validate email format
  - [ ] Track signups in analytics
  - [ ] Test form submission

### Custom MDX Components

#### MDXComponents
- [ ] Create `src/components/blog/mdx-components.tsx`
  - [ ] Export object with component overrides
  - [ ] Custom `h2` with anchor link
  - [ ] Custom `h3` with anchor link
  - [ ] Custom `a` with external link icon
  - [ ] Custom `img` with next/Image wrapper
  - [ ] Custom `code` with syntax highlighting
  - [ ] Custom `pre` with copy button
  - [ ] Custom `blockquote` with accent border
  - [ ] Custom `table` with responsive wrapper
  - [ ] Test rendering

#### Callout Component
- [ ] Create `src/components/blog/callout.tsx`
  - [ ] Accept `type` prop (info, warning, tip, danger)
  - [ ] Accept `children` prop
  - [ ] Design colored boxes with icons
  - [ ] Add Framer Motion entrance animation
  - [ ] Test in MDX content:
    ```mdx
    <Callout type="tip">
    Always maintain good posture in guard!
    </Callout>
    ```

#### VideoEmbed Component
- [ ] Create `src/components/blog/video-embed.tsx`
  - [ ] Accept `url` prop (YouTube, Vimeo)
  - [ ] Parse video ID from URL
  - [ ] Render responsive iframe
  - [ ] Add lazy loading
  - [ ] Add loading placeholder
  - [ ] Test with YouTube and Vimeo URLs

#### ImageGallery Component
- [ ] Create `src/components/blog/image-gallery.tsx`
  - [ ] Accept `images` array prop
  - [ ] Render grid of images
  - [ ] Add lightbox functionality (click to enlarge)
  - [ ] Add keyboard navigation
  - [ ] Optimize with next/Image
  - [ ] Test with multiple images

#### TechniqueCard Component
- [ ] Create `src/components/blog/technique-card.tsx`
  - [ ] Accept props: `name`, `category`, `difficulty`, `description`
  - [ ] Design card with BJJ theme
  - [ ] Add icons for difficulty level
  - [ ] Add hover effect
  - [ ] Test in MDX content

### Testing
- [ ] Test all components in isolation
- [ ] Test responsive behavior on mobile/tablet/desktop
- [ ] Test animations with Framer Motion
- [ ] Verify accessibility (keyboard navigation, screen readers)
- [ ] Run TypeScript type checking
- [ ] Run `npm run lint` - fix any issues

---

## Phase 4: Enhanced Features (Week 3)
**Goal**: Add search, filtering, and related posts

### Search Implementation
- [ ] Create `src/lib/blog/search.ts`
  - [ ] Implement `searchPosts(query, posts)` function
  - [ ] Search in title, description, content, tags
  - [ ] Return ranked results
  - [ ] Add fuzzy matching (optional)
  - [ ] Test with various queries

- [ ] Update `src/app/blog/page.tsx`
  - [ ] Make it a client component wrapper
  - [ ] Read search query from URL params
  - [ ] Filter posts based on query
  - [ ] Update BlogSearch to set URL params
  - [ ] Show "No results" state
  - [ ] Test search end-to-end

### Tag Filtering
- [ ] Update BlogFilters component
  - [ ] Add tag pills below categories
  - [ ] Support multi-tag selection
  - [ ] Update URL params
  - [ ] Test tag filtering

### Related Posts Algorithm
- [ ] Create `src/lib/blog/related.ts`
  - [ ] Implement `getRelatedPosts(post, allPosts, limit = 3)`
  - [ ] Score posts by shared tags (weight: 3)
  - [ ] Score posts by same category (weight: 2)
  - [ ] Score posts by recent date (weight: 1)
  - [ ] Sort by score, return top N
  - [ ] Exclude current post
  - [ ] Test with sample posts

- [ ] Integrate into post page
  - [ ] Pass related posts to RelatedPosts component
  - [ ] Test recommendations make sense

### Pagination / Infinite Scroll
- [ ] Decide: Pagination or Infinite Scroll
  - [ ] Pagination (better for SEO, simpler)
  - [ ] Infinite Scroll (better UX, more complex)

- [ ] If Pagination:
  - [ ] Create `src/components/blog/pagination.tsx`
  - [ ] Add page number to URL params
  - [ ] Implement prev/next buttons
  - [ ] Implement page number buttons
  - [ ] Update blog listing to paginate
  - [ ] Test navigation

- [ ] If Infinite Scroll:
  - [ ] Install `react-intersection-observer`
  - [ ] Implement load more trigger
  - [ ] Fetch next batch of posts
  - [ ] Update URL params
  - [ ] Add loading spinner
  - [ ] Test scrolling behavior

### Reading Progress Integration
- [ ] Add ReadingProgress to post layout
- [ ] Test scroll tracking
- [ ] Track 25%, 50%, 75%, 100% milestones in analytics

### Testing
- [ ] Test search with various queries
- [ ] Test tag filtering with multiple tags
- [ ] Test related posts recommendations
- [ ] Test pagination/infinite scroll
- [ ] Test reading progress tracking
- [ ] Test analytics events firing

---

## Phase 5: SEO & Performance (Week 4)
**Goal**: Optimize for search engines and performance

### Sitemap Generation
- [ ] Create `src/app/blog/sitemap.xml/route.ts`
  - [ ] Export async `GET()` function
  - [ ] Fetch all posts
  - [ ] Generate XML sitemap
  - [ ] Include post URLs with lastmod dates
  - [ ] Include category and tag URLs
  - [ ] Set appropriate priority and changefreq
  - [ ] Return XML response
  - [ ] Test at `/blog/sitemap.xml`

### RSS Feed Generation
- [ ] Create `src/app/blog/rss.xml/route.ts`
  - [ ] Export async `GET()` function
  - [ ] Fetch all posts (limit 20)
  - [ ] Generate RSS 2.0 XML
  - [ ] Include title, description, link, pubDate
  - [ ] Include content:encoded with full HTML
  - [ ] Include category and author
  - [ ] Return XML response with correct headers
  - [ ] Test at `/blog/rss.xml`
  - [ ] Validate with RSS validator

### Structured Data (JSON-LD)
- [ ] Create `src/lib/seo.ts`
  - [ ] Implement `generateBlogPostingSchema(post)`
  - [ ] Implement `generateBreadcrumbSchema(items)`
  - [ ] Implement `generateOrganizationSchema()`

- [ ] Add to post page
  - [ ] Inject BlogPosting schema in <script> tag
  - [ ] Inject Breadcrumb schema
  - [ ] Test with Google Rich Results Test

### Meta Tags & SEO
- [ ] Review all meta tags on blog pages
- [ ] Ensure unique title for each page
- [ ] Ensure unique description for each page
- [ ] Add keywords (sparingly)
- [ ] Add canonical URLs
- [ ] Add og:image for all posts
- [ ] Add twitter:card meta tags
- [ ] Test with Facebook Sharing Debugger
- [ ] Test with Twitter Card Validator

### Image Optimization
- [ ] Audit all images in blog posts
- [ ] Convert to WebP format (with JPEG/PNG fallback)
- [ ] Generate responsive sizes with next/image
- [ ] Add proper alt text to all images
- [ ] Add width and height attributes
- [ ] Lazy load images below fold
- [ ] Test image loading performance

### Performance Optimization
- [ ] Run Lighthouse audit on blog listing
  - [ ] Performance score 90+
  - [ ] Accessibility score 100
  - [ ] Best Practices score 100
  - [ ] SEO score 100

- [ ] Run Lighthouse audit on blog post
  - [ ] Performance score 90+
  - [ ] Accessibility score 100
  - [ ] Best Practices score 100
  - [ ] SEO score 100

- [ ] Optimize bundle size
  - [ ] Lazy load Shiki syntax highlighter
  - [ ] Lazy load ShareButtons
  - [ ] Code split blog components
  - [ ] Run `npm run build` and check bundle size

- [ ] Optimize Core Web Vitals
  - [ ] LCP < 2.5s
  - [ ] FID < 100ms
  - [ ] CLS < 0.1

### Analytics Integration
- [ ] Update Google Analytics events
  - [ ] Track blog_post_view
  - [ ] Track blog_post_read (scroll depth)
  - [ ] Track blog_share (platform)
  - [ ] Track blog_search (query)
  - [ ] Track newsletter_signup (source: blog)

- [ ] Test analytics events in GA4 DebugView

### Testing
- [ ] Test sitemap renders correctly
- [ ] Test RSS feed in feed reader
- [ ] Test structured data with Google tool
- [ ] Test Open Graph with Facebook debugger
- [ ] Test Twitter Cards with validator
- [ ] Run Lighthouse on 3+ pages
- [ ] Verify Core Web Vitals
- [ ] Test analytics tracking

---

## Phase 6: Navigation Integration (Week 4)
**Goal**: Integrate blog into existing site

### Header Update
- [ ] Open `src/components/header.tsx`
- [ ] Add "Blog" link to desktop navigation
  - [ ] Add after "FAQ" link
  - [ ] Use same hover styles
  - [ ] Link to `/blog`
  - [ ] Test active state on blog pages
- [ ] Add "Blog" link to mobile navigation
  - [ ] Add in same position
  - [ ] Test mobile menu

### Footer Update
- [ ] Open `src/components/footer.tsx`
- [ ] Add "Blog" section
  - [ ] Add "Recent Posts" heading
  - [ ] Fetch 3 most recent posts
  - [ ] Display as links
  - [ ] Add "View All Posts" link
- [ ] Or add "Blog" link to existing footer nav
- [ ] Test footer rendering

### Homepage Integration
- [ ] Open `src/app/page.tsx`
- [ ] Add blog CTA section (optional)
  - [ ] Create `src/components/blog-cta.tsx`
  - [ ] Design gradient box
  - [ ] Add "Latest from the Blog" heading
  - [ ] Show 2-3 featured posts as cards
  - [ ] Add "Read More" button linking to /blog
  - [ ] Add Framer Motion animations
- [ ] Insert before or after RoadmapSection
- [ ] Test homepage rendering

### Breadcrumbs
- [ ] Create `src/components/breadcrumbs.tsx`
  - [ ] Accept `items` array prop
  - [ ] Render linked breadcrumb trail
  - [ ] Add separator (/)
  - [ ] Style with gray text
  - [ ] Add schema.org markup

- [ ] Add to post page
  - [ ] Generate breadcrumb items
  - [ ] Render above post header
  - [ ] Test navigation

### Global Metadata Update
- [ ] Update `src/app/layout.tsx`
  - [ ] Update site description to mention blog
  - [ ] Add blog-related keywords
  - [ ] Test metadata

### Testing
- [ ] Navigate site, ensure blog links work
- [ ] Test breadcrumbs navigation
- [ ] Test header active states
- [ ] Test footer links
- [ ] Test homepage blog CTA (if added)
- [ ] Verify consistent design language

---

## Phase 7: Polish & Launch (Week 5)
**Goal**: Final touches and production deployment

### Animation Polish
- [ ] Audit all blog components for animations
- [ ] Add Framer Motion to all cards
  - [ ] Fade in on scroll
  - [ ] Stagger children
  - [ ] Lift on hover
- [ ] Add page transitions (optional)
- [ ] Add smooth scroll behavior
- [ ] Test animations on all devices
- [ ] Ensure animations respect `prefers-reduced-motion`

### Mobile Responsiveness
- [ ] Test on iPhone (Safari)
- [ ] Test on Android (Chrome)
- [ ] Test on iPad (Safari)
- [ ] Test landscape and portrait
- [ ] Check touch targets (min 44x44px)
- [ ] Check text readability (font sizes)
- [ ] Check image scaling
- [ ] Fix any layout issues

### Cross-Browser Testing
- [ ] Test on Chrome (latest)
- [ ] Test on Firefox (latest)
- [ ] Test on Safari (latest)
- [ ] Test on Edge (latest)
- [ ] Fix any rendering inconsistencies

### Accessibility Audit
- [ ] Run axe DevTools on blog pages
- [ ] Fix all critical issues
- [ ] Fix all serious issues
- [ ] Ensure keyboard navigation works
  - [ ] Tab through all interactive elements
  - [ ] Enter/Space activates buttons
  - [ ] Escape closes modals
- [ ] Ensure screen reader compatibility
  - [ ] Test with VoiceOver (Mac)
  - [ ] Test with NVDA (Windows)
  - [ ] Add ARIA labels where needed
- [ ] Check color contrast ratios
  - [ ] All text meets WCAG AA (4.5:1)
  - [ ] Large text meets WCAG AA (3:1)
- [ ] Ensure focus indicators visible
- [ ] Test with keyboard only
- [ ] Test with zoom (200%)

### Performance Profiling
- [ ] Run Chrome DevTools Performance profiling
- [ ] Identify and fix any janky animations
- [ ] Identify and fix any layout shifts
- [ ] Optimize any slow components
- [ ] Run bundle analyzer
  - [ ] `npm install --save-dev @next/bundle-analyzer`
  - [ ] Identify large dependencies
  - [ ] Optimize or lazy load

### Content Creation
- [ ] Write 5-10 launch posts
  - [ ] Getting Started with BJJ Note-Taking
  - [ ] Spaced Repetition for Technique Mastery
  - [ ] How to Track Your Progress Effectively
  - [ ] Introducing Avanço
  - [ ] The Science of Learning BJJ
  - [ ] Top Note-Taking Mistakes
  - [ ] Building Your Technique Library
  - [ ] From White to Black Belt
  - [ ] AI-Enhanced Note-Taking Explained
  - [ ] Product Roadmap 2025

- [ ] Add high-quality images to all posts
- [ ] Proofread all content
- [ ] Verify all frontmatter
- [ ] Set featured posts

### Documentation
- [ ] Create `CONTENT_GUIDELINES.md`
  - [ ] Tone and voice guide
  - [ ] SEO best practices
  - [ ] Image requirements
  - [ ] Frontmatter checklist
  - [ ] Category descriptions
  - [ ] Tag naming conventions
  - [ ] Code snippet formatting
  - [ ] Publishing workflow

- [ ] Update main README.md
  - [ ] Add blog section to project structure
  - [ ] Document blog scripts (if any)
  - [ ] Document content creation workflow

### Pre-Launch Checklist
- [ ] All 5-10 launch posts ready
- [ ] All images optimized
- [ ] All links working (internal and external)
- [ ] All meta tags correct
- [ ] Sitemap working
- [ ] RSS feed working
- [ ] Analytics tracking working
- [ ] Newsletter signup working
- [ ] Social sharing working
- [ ] Search working
- [ ] Filtering working
- [ ] Related posts showing
- [ ] No console errors
- [ ] No TypeScript errors
- [ ] No accessibility errors
- [ ] Lighthouse scores 90+
- [ ] Mobile responsive
- [ ] Cross-browser tested

### Deployment
- [ ] Run full production build
  ```bash
  npm run build
  ```
- [ ] Fix any build errors or warnings
- [ ] Test production build locally
  ```bash
  npm run start
  ```
- [ ] Commit all changes
  ```bash
  git add .
  git commit -m "feat: Add blog section with 10 launch posts"
  ```
- [ ] Push to repository
  ```bash
  git push origin main
  ```
- [ ] Deploy to production (Vercel auto-deploys on push)
- [ ] Verify deployment successful
- [ ] Test live site at avanco.app/blog
- [ ] Check all pages load correctly
- [ ] Check analytics tracking on live site

### Post-Launch
- [ ] Submit sitemap to Google Search Console
  - [ ] Add `https://avanco.app/blog/sitemap.xml`
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Request indexing for 5-10 blog posts
- [ ] Share blog posts on social media
  - [ ] Twitter/X
  - [ ] LinkedIn
  - [ ] Facebook
- [ ] Share in BJJ communities
  - [ ] Reddit (r/bjj)
  - [ ] BJJ Discord servers
  - [ ] BJJ Facebook groups
- [ ] Monitor analytics for first week
- [ ] Monitor for any errors or issues
- [ ] Gather feedback from users
- [ ] Plan next batch of content

---

## Success Metrics

### Launch Goals (Week 5)
- [✓] 10 blog posts published
- [✓] Blog accessible at /blog
- [✓] Lighthouse score 90+ on all pages
- [✓] Mobile responsive
- [✓] Accessible (WCAG 2.1 AA)
- [✓] RSS feed working
- [✓] Sitemap submitted to Google
- [✓] Analytics tracking implemented
- [✓] Social sharing functional

### 30-Day Goals
- [ ] 500+ blog visitors
- [ ] 10+ newsletter signups from blog
- [ ] 5+ social shares
- [ ] 3+ backlinks
- [ ] 10+ indexed pages in Google

### 90-Day Goals
- [ ] 1,000+ blog visitors
- [ ] 50+ newsletter signups from blog
- [ ] 25+ social shares
- [ ] 10+ backlinks
- [ ] 5+ keywords ranking in top 20

---

## Notes & Decisions

### Key Architectural Decisions
1. **File-based MDX** - Chosen for version control, flexibility, zero infra costs
2. **Static Generation** - Pre-render at build time for performance
3. **No comments initially** - Can add Utterances/Disqus later if needed
4. **Pagination over infinite scroll** - Better for SEO
5. **Shiki for syntax highlighting** - Best quality, lazy loaded

### Design Decisions
1. **Orange/Rose gradient theme** - Consistent with brand
2. **Framer Motion animations** - Consistent with existing site
3. **Lucide icons** - Lightweight, consistent
4. **Tailwind v4** - Using existing setup

### Content Decisions
1. **Focus on BJJ + training** - Primary audience
2. **Mix of educational and product content** - 70/30 split
3. **800-2000 word posts** - Optimal for SEO and engagement
4. **2-4 posts per month** - Sustainable cadence

---

## Questions & Blockers

### Questions
- [ ] Who will be writing blog content? (Internal vs guest authors)
- [ ] Do we need multi-author support initially?
- [ ] Should we add comments? If so, which system?
- [ ] Do we want email newsletter integration? (e.g., ConvertKit, Mailchimp)
- [ ] Should we support series/multi-part posts initially?

### Blockers
- None currently identified

---

## Future Enhancements (Post-Launch)

### Short-term (3-6 months)
- [ ] Add comment system (Utterances or Disqus)
- [ ] Add series/multi-part post support
- [ ] Integrate email newsletter service
- [ ] Add dark mode for blog posts
- [ ] Add print stylesheet
- [ ] Add "Estimated reading time" progress indicator

### Medium-term (6-12 months)
- [ ] Implement full-text search with Algolia/Meilisearch
- [ ] Create author pages
- [ ] Accept guest post submissions
- [ ] Add interactive technique diagrams (SVG/Canvas)
- [ ] Add video post embeds
- [ ] Integrate podcast episodes

### Long-term (12+ months)
- [ ] User bookmarking/favorites system
- [ ] Personalized recommendations (ML-based)
- [ ] Multi-language support (Portuguese, Spanish)
- [ ] Public API for content distribution
- [ ] Community contributions via Pull Requests
- [ ] Advanced analytics dashboard

---

**Status**: ✅ Ready to Begin Implementation
**Next Step**: Start Phase 1 - Core Infrastructure
**Estimated Completion**: 5 weeks
