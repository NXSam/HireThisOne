---
title: TTRPG Organization
description: Using technology for a better tabletop experience with a world-wid player base.
pubDate: Aug 12 2025
heroImage: "@images/ttrpg-cover.png"
category: Engineering
tags:
  - template
showImage: true
showVideo: false
alt: A picture of the Procureinc.us website, cropped to the header and main carousel/banner.
---

I'm a deeply technical guy. I love to dive in on complex things and when I do, I try to build the absolute optimal result. That doesn't just apply to my working life, I do the same thing in my hobbies. I want my life to be easier, to make the world a better place, and to build cool things in the process.

If you're wondering why I'm including this here and on my resume, skip to the bottom.


## What is a TTRPG?

TTRPG stands for Table Top Role Playing Game. If you've seen Stranger Things, then you've seen some kids playing Dungeons and Dragons, a TTRPG. This hobby covers games like Starfinder, Pathfinder, Warhammer 40K, the Expanse, DC20, Call of Cthulu, and dozens more. Over the past decade multiple successful franchises have sprung out of the TTRPG space, including Critical Role, Baldur's Gate, and even the Expanse TV Series. Researchers have even found these games to have [positive effects for mental health](https://pmc.ncbi.nlm.nih.gov/articles/PMC11299717/). 

In a way, TTRPGs are a precursor to today's modern video games. You sit down with some friends, lay out a map, place characters on the board, and follow a set of rules to build out a story and an adventure.

For those who've never seen a game, Critical Role live streams their games. Amazon will be releasing the new Mighty Nein animated series soon based on this campaign, give it a watch below. This is more mature content, at least PG-13.

<iframe width="860" height="480" src="https://www.youtube.com/embed/byva0hOj8CU?t=760" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="mx-auto"></iframe>

## What about the technology?

There are four key pieces of modern development and documentation technology that drives my game. Docker powers the game server, Cloudflare handles the DNS (and eventual website), AWS stores incremental backups, and Obsidian powers a complex markdown based notes system that tracks all adventures - with transcripts of each session. Bringing all these pieces together delivers an experience to my players across the world - as far south as Argentina, as far east as France, North into Canada, and so far only as far west as Washington.

It's my job to run a game every week without fail, so the tech stack has to be robust and reliable. As the Game Master, I need to have at least two hours of entertainment ready every week for the group or the whole thing falls apart. I need to get as close to a 100% uptime as a person can get. With over 100 games in two years, I'm pretty reliable.

### Docker

Webhosting for TTRPG systems gets expensive for a hobby. There are dedicated hosts and platforms where the starting price is $10/month, but that can easily rise over $50 once additional storage and other considerations are factored in. It can be better and cheaper to just run a game locally, and that's where Docker comes in.

As a linux user, I took one of my older workstations, no longer windows compatible thanks to the whole CPU/TPM issue, and installed Fedora. It happily offers better performance than cheaper VPS systems and more storage. Docker allows me to run a platform known as Foundry. 

<iframe width="860" height="480" src="https://www.youtube.com/embed/hTF0QQNvZHE?" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen class="mx-auto"></iframe>

Foundry is built on Node.js, it's a paid platform, but once you own it, you own it. My games run out of docker, allowing me to run multiple instances and even multiple versions of the platform. This setup has allowed me to keep the game running, even through unavoidable errors, like a bad OS update. The data was safely transferred to a secondary machine, the compose file brought the system back up, and the game continued while the original machine was repaired later.

### Cloudflare

Cloudflare plays two roles in the system: networking and web hosting.

The Tunnels Service has proven itself useful for exposing my Foundry services to the internet, without directly exposing any other pieces of my network. The remote access is safely contained, Cloudflare provides security against common and automated security hazards, and my player base gains 24/7 access to the game system through a convenient and memorable domain. I can move the game between servers by changing the routing of the tunnel, including failing over to a cloud-based back up in a worst-case scenario. It keeps everything moving smooth, fast, and easy for all involved.

As a webhost, Cloudflare will host a player wiki. My entire notes system is built in Obsidian using Markdown files. These are compatible with Astro.js, my favorite static site generator. Cloudflare Workers can build Astro sites. This is a win for all involved. My notes can be directly translated to viable and useful web content for my players. When someone misses a session, they can conveniently and easily revisit the transcript, summary, and details of the missed session or review details of the game world/story.

### Backups

The whole system is thoroughly backed up using Docker, AWS, and Backrest. The Backrest system runs in its own Docker container and runs highly compressed, efficient back ups of the Foundry systems and the whole rest of the home lab, including servers for Valheim and Enshrouded. That data is stored with S3 buckets and can be retrieved at any time. This is another key in ensuring high availability. In the event of a system failure or even loss of internet service, these backups facilitate restoring the system to the cloud or another machine and continuing operations uninterrupted.

The system only has to work for about four hours every week, but I do take my uptime seriously. So far, hardware and software issues have caused 0 missed sessions. A case of Covid did successfully cancel two games.

### Markdown and Obsidian

The final piece of this puzzle is my skills as a Technical Writer. In the past, I attempted to use platforms like Notion for my session notes, but ultimately found them lacking. Obsidian however, has elevated the notes and orgizational system to its peak. A series of plugins allow Markdown's frontmatter to be more interactive and to populate fields in each note file. Sessions, adventures, characters, and even individual components of a note are associated with their sources.

My workflow is to ceate an Adventure which encompasses multiple sessions of the game. Each adventure contains and links to Quests which the players are trying to achieve. Those quests are linked to sessions through the notes, tracking when each was worked on and achieved. Each session is itself a 2-4 page document that includes links to relevant characters, locations, events, and items for the session. This perfectly organized symphony makes it easy to track long-term goals and resurface items from the past that makes the game session more alive and dynamic. Every little piece of the game can be created, crafted, and refined to perfection before it's ever brought up.

### Why is this here anyway?

Out of all my hobbies and interests, my experience running TTRPGs is one of the best demonstrators of my skills. It's unconventional to include it, but it demonstrates a great deal. Wil Klusovsky [illustrated many of these poionts](https://www.linkedin.com/pulse/put-dungeon-master-your-resume-william-klusovsky-cissp-cism-cdpse/) in a post on LinkedIn. 

As a baseline to run my games, I need to demonstrate a ton of skills essential in both leadership and team work:

- High reliability and commitment
- Conflict resolution
- Decision making under pressure
- Time management, particularly pacing in session
- Scheduling with a diverse and distributed group
- Deep research skills
- Short and long term planning

These skills are just a piece of running a game, but they are at the heart of it. When I tell my players we're playing every Saturday, I'm committed to achieving that goal. If I flake out, my players won't commit to future games, and any hope of longterm involvement is gone. I can happily say my groups have been operating since 2022 and they returned after I took a creative break in 2024. They knew I would provide them a reliable and entertaining event.

Running the game involves handling conflicts between players, deciding the exact application of a rule on the spot - and being willing to commit to that precedent going forward, keeping a group of people on task for an intense and focused task for at least two uninterrupted hours (and sometimes longer), that justifies them spending that time in the game. This needs to be fun, fit in their schedules, and work with people who might be ten or twelve hours apart in time zones.

Delivering on that experience means collecting, reading, analyzing, and applying tens of thousands of pages of technical and creative information. I've built a library of over 150 TTRPG books and assets - tens of thousands of pages of material. I read through all of that, while generating hundreds of pages in my own notes detailing the events of the game. I draw out plans for what will happen this week without cutting off the players' ability to change things, and create plans that won't be realized for another two, four, or even six years.

In the workplace, these are the skills of an ideal employee. Dedication, committment, organization, teamwork, planning, documentation, on-going education, and more. Even moreso, this is one of the best demonstrations of myself as a technical writer: consuming, translating, and creating an absolutely vast archive of knowldge.