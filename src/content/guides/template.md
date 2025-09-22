---
title: The Site Template
description: A quick overview of getting the template files to begin the project.
pubDate: Sep 22 2025
heroImage: ../../assets/images/guide-2/guide-2-header.png
tags:
  - development
  - guide
author: Sam
---
Web development from scratch is difficult, especially when you're working on your first website. The shear scale of options and decisions in front of you can be crippling. Do you make a static site? Code in PHP? What about using a platform like Wordpress? Do you use a specialized host?

For a first-time project, it's easier to just run with a template. The world is full of free to use (and paid) templates that we can readily customize to fit almost any purpose. This site was based on a [a template created by guihubie](https://github.com/guihubie/free-astro-template). We're going to do almost the same thing.

A modified version of that template [can be downloaded from github](https://github.com/guihubie/free-astro-template). 

![A picture of the github repository with the website template](../../assets/images/guide-2/github-download.png)

## Options for Downloading

There are decisions to make, even when just receiving a freely-made and ready to go piece of code. To download the template, click the green Code button near the top of the page. This is going to present some options.

![A picture of the code options dialog, it include git download options as well as a source code download option](../../assets/images/guide-2/download-options.png)

>What does all of that do?
>-<cite>Every First-Time Git User</cite>

In the development world, there is a tool called GIT. It's main purpose is to store versions of code and allow multiple people to work on a project at once. This system lets two people edit the same file and it can merge those changes together into a coherent end result without breaking everything. If you have a Git client, you can copy the information above into it and it'll download the files and help you download updates, manage revisions, and even contribute code back to a project.

If you've used Git before, feel free to clone the repository. If not, let's keep this simple - click Download ZIP.

This little file contains the entire website in its current state. You can't just upload this yet though, it's built using Astro and we'll need to use Astro to turn this from Source Code into a working webpage you can view.