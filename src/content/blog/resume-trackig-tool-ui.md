---
title: A Little Resume-Tracker Update
description: A little app that helps you place tracking data in resume links, now with a handy UI!
pubDate: Oct 14 2025
heroImage: "@blog/Python-Resume-UI-Code.png"
category: Jobsearching
tags:
  - Python
  - Job Search
  - Analytics
showImage: true
showVideo: false
YT: No
alt: No
author: Sam
---

After a week or two with the [python tracker tool](/blog/resume-tracking-tool) it felt like time to upgrade it a little. As a little interactive commandline app, it certainly did the job.

```shell
python resume.py

UTM Source?     TechWriter @ Google
UTM Campaign?   Oct25
UTM Medium?     LinkedIn

File saved!
```

Sure, that worked, but what if it were a little better? Something friendly looking and with a handy reset button, pre-filled answers, and a nice little UI? Of course, me and Python UIs haven't always gotten along. TKInter is a little less than ideal and getting into QT for this little script seemed like overkill. It's just a tiny little tool, we don't need to be running flash or making whole web-app UIs with electron. Who wants to waste that much ram on a handy little thing?

![A screenshot of my script running with a UI! It's very simple, a set of dialog boxes for each input: Source, Campaign, Medium, Term, Content, Name, and a file select input. It looks a lot like a windows installer type of dialog.](@blog/Python-Resume-UI.png)

This has been sitting on my desk for about a day now and it's worked! I fixed some little typos, added some extra default values, and made other little tweaks. The requirements for it to work have changed a little. Gone is TKInter for loading files and in comes Gooey.

To get started you'll need to run:

```shell  
pip install gooey pdfrw six 
```

In principal, six is a dependency of Gooey, but somewhere in all the packages it's not listed in a requirements file. You'll have to grab it manually until the next release fixes that. [Someone already has an open issue about it on github](https://github.com/chriskiehl/Gooey/issues/928).

With that done, it's the same game as before:

```shell 
python resume.py
```

And you'll get this handy little UI to customize your resume. It'll place any instance of "?placeholder" with your utm_source, utm_campaign, utm_term, utm_this and utm_that. 

>https://hirethis.one?placeholder

Becomes:

>https://hirethis.one?utm_source=Google-Tech-Writer&utm_med...


Submit your resume like normal, one per application, and then watch your analytics roll in. So far I've observed ATS (Application Tracking Systems) automatically crawling the site shortly after sending in my resume. It's somewhat easy to spot them, they all connect with strange, low resolutions and from the cities. Boynton, Illinois is common. They'll check each link twice and bounce. An analytics entry from any other time is usually a genuine human taking a look.


Just like last time, the code is posted on Github gists: [https://gist.github.com/NXSam/acf70162605ed096bdaec1c577f2b5f4](https://gist.github.com/NXSam/acf70162605ed096bdaec1c577f2b5f4).

Special thanks also go out to [@laughinggiraffe](https://bsky.app/profile/laughinggiraffe.bsky.social/post/3m33sk5qqh22d) who told me about Gooey. It's absolutely wild, in many cases you can add a two lines: an import statement and @gooey. It just works. And if you want to be fancy, there's options to add more, tweak, and customize it. 