---
title: "Building an SEO-Optimized Portfolio with Next.js 15"
date: "2026-03-18"
excerpt: "A deep dive into how I built this portfolio using Next.js App Router, dynamic Open Graph images, and optimal metadata strategies to rank on Google."
---

Welcome to my first blog post! I'm Awadh Kishor Singh (also known online as `imawadh` or `im_awadh_`), a Full Stack Developer based in Bengaluru. 

When building this portfolio, I wanted more than just a beautiful interface—I wanted a platform that search engines inherently understood.

## Why Next.js?

Next.js offers unparalleled edge when it comes to SEO due to Server-Side Rendering (SSR) and Static Site Generation (SSG). 

By utilizing the new App Router, we can cleanly separate server logic from client components. This allowed me to keep things like Framer Motion animations strictly on the client (`"use client"`), while keeping my metadata logic on the server.

### The Power of Dynamic OG Images

When you share a link to my portfolio or this exact blog post on Twitter or LinkedIn, you don't just see a generic image. You see a custom-generated Open Graph image featuring the title of the page!

I achieved this using `@vercel/og` (or `next/og`), allowing me to write standard React JSX that gets converted into a highly optimized PNG file at the edge.

```jsx
import { ImageResponse } from 'next/og';

export function GET(request) {
  return new ImageResponse(
    (
      <div style={{ background: 'black', color: 'white' }}>
        <h1>Dynamic Server Generated Image!</h1>
      </div>
    )
  );
}
```

## Going Beyond `<head>` Tags

While standard `<title>` and `<meta name="description">` tags are essential, they are just the baseline. For this portfolio, I implemented comprehensive **JSON-LD** schemas.

```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Awadh Kishor Singh",
  "alternateName": ["imawadh", "im_awadh", "im_awadh_"]
}
</script>
```

This ensures Google treats "imawadh" and "Awadh Kishor Singh" as the exact same entity, boosting organic search placement for all alias keywords automatically.

Thanks for reading, and feel free to check out my [Projects](/projects)!
