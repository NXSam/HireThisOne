---
title: That was EASY!?
description: The site is live and there were no headaches!?
pubDate: Sep 19 2025
heroImage: "@blog/Cloudflare-blog.png"
category: Site News
tags:
  - observation
  - thoughts
  - cloudflare
showImage: true
showVideo: false
YT: No
alt: No
author: Sam
---
I think I might've been doing something wrong for a very, very, very long time. Over the last 20 some years I've worked on dozens of websites. In high school I built static sites for competitions with [PA TSA](https://patsa.org/) - not the law enforcement TSA, the nerdy school kids Technology Student Association. I built two personal sites in college and then a dozen more for my clients.

Going live was never this easy.

It's not that it's hard to go live, but it takes time. The first time I did an AWS static site, I spent half the day going through tutorials. Upload the files, set up permissions, set up route 53, get SSL working, get permissions setup right for public access, and so on. It's even longer to set up a site through a VPS - a whole new can of worms with Apache or Nginx, PHP, file permissions, and more. Wordpress is even worse, you have to go around and tweak a dozen little settings to keep it secure against automated hackers.

There was no avoiding it, we built more complex platforms, better technology, more options, and it costs time to hammer that into shape. Except for this one site.

It took me 5 minutes with Cloudflare.

**Step 1:** Put the code on Git
**Step 2:** Point Cloudflare at the Git repo
**Step 3:** Point the Domain at the site in Cloudflare

Updates are automatic. When I finish this post I'll commit to the git repo, push it, merge that into main, and Cloudflare will grab the files to update the entire site. If there's an error deploying the site, Cloudflare will just leave the last good version live instead.

I love it. 

It doesn't even have to be a static site. Astro has server side rendering, fully supported on Cloudflare. Could it be that easy to put a webstore live? I might just find out.