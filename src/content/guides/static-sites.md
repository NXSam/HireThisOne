---
title: Introduction To Static Site Generators
description: Why this project isn't using PHP or other languages to build a dynamic site.
pubDate: Sep 22 2025
heroImage: ../../assets/images/guide-3/guide-3-header.png
category: Concepts
tags:
  - development
  - guide
author: Sam
---
These guides have previously mentioned Astro, but not much has been said about what Astro is, or even why we specifically need it. We're going to dive-in on the way web pages used to be made and how we can make them better with tools like Astro or one of its competitors - Hugo, Eleventy, and many others. 

## Old-School Web Development

Without using any special tools or other bits of clever code, building a website gets to be a bit tedious. Every single page has to be made by hand. That means repeating elements also have to be done by hand, or copied and pasted between the files with every update.

>How bad can that be?

Suppose you have a website that has 5 web pages. You've made every page and it's ready to go. You put it live. You decide to add a page. Well, now you have to edit six pages and create a fifth. Your header, your main menu, won't update itself. You have to go there and make the same edit to five pages. If you change a piece of contact information, now you have to make that change on six pages.

As your site expands, you'll be having to copy and paste edits everywhere and soon you're patrolling your pages for mistakes. If you add in a blog, it'll get even worse. Now you might have hundreds of pages that need to be updated whenever something changes. You'll add a new blog post and then you have to edit perhaps 3 or 4 pages so people can reliably find that blog post. The whole set up starts to get ridiculous fast, but at one point in time, that's how websites worked.

## Dynamic Web Pages

Alternatively, the web page can build itself from some code and that code can update all the links. You go to a web page like: [Mywebiste.com/index.php](#). That page has some code on it that loads a centralized menu file, and some code that gets links to all the individual blog posts. Your webserver does this whenever someone looks at Index.php and then it sends them the customized webpage as HTML.

This approach works well enough that many languages built an entire internet on the concept. Many of the enormous sites you visit every day: Netflix, Youtube, Facebook, Google, Bluesky, etc. are built this way. The view you get of the website is at least partially, if not entirely custom-created by some code on the website's servers. It's the most efficient way to create a dynamic, semi-custom web page at large scale. 

### Why aren't we doing that?

Fully dynamic websites have higher operating costs and more complexity. With the old-school, hand-made web pages, a server just has to hand out copies of the website. It can be done so cheaply as to be nearly free. These webservers can just do that work without any real effort or stress. By contrast, these dynamic sites need servers that do some work. Those webservers have to build the site every time someone looks at it, they're running code that does things instead of just handing out that code. If there's a mistake in that code, a flaw somewhere, then some less than friendly hacker can alter the server, steal data from it, and cause other trouble. 

There are entire courses of study about writing safe and secure code. People have dedicated their lives to making secure infrastructure and technology. Researchers explore code to look for and fix flaws that cause data breaches.

Building a dynamic site can be a can of worms. It's a bit too much for a first-time web project and it can be overkill for making a simple site.

## The Middle Ground

Code can be used to generate everything a website needs. When it runs on the server, there's security risks if it's not well managed. Why don't we just generate the entire site ahead of time and then upload that?

That's where Astro and other static site generators come in.

The website's source code is a mix of static html, content, and some special code that brings pieces together. This set up lets your computer generate all the menus from a single file. We can create blog posts that get automatically listed on blog pages. Everything just builds itself so we can have the best of both-worlds:

- Cheap to host site
- Dynamically built so there is no tedious repetitive work
- Secure against hackers/infiltration