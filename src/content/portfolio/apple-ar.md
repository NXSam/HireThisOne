---
title: Augmented Reality with iOS
description: Creating a virtual try-on system on an all new platform.
pubDate: Oct 10 2025
heroImage: "@images/apple-ar.png"
category: Engineering
tags:
  - template
showImage: true
showVideo: false
alt: A screenshot from Apple's AR Kit site. It shows an iPad with a lunar lander on it and some of apple's text about AR Kit. The original can be seen at - https://developer.apple.com/augmented-reality/arkit/, published before October 10th, 2025, for AR Kit 6.
---

A hallmark of my work has been my willingness to go above and beyond for my clients. I do my best to make problems go away, to help the entire team, and to ensure we get our very best possible product at the end of the day. Problems crop up and if I can make them go away, why wouldn't I?

Perhaps the best example of this was building an Augmented Reality App.

My client was an apparel manufacturer. They produced worn items and they wanted a way for their customers to try them on before actually buying them. The client didn't have a very firm idea of how to get the job done or what was involved. They had rolled every job into a single role:

- Modeler
- Developer
- Project Manager
- Texture Artist

They wanted an Expert in Modeling with Apple's Reality Kit.

In our first meeting, I laid out the jobs involved and their separate roles. An artist (me) would create the models and that generally speaking, models were 'universal'. The assets I made could be viewed in a dozen platforms, they were all a standard. Someone would have to do the development work, I wasn't an Apple Developer. It probably wasn't hard, but I'm honest - my client needed someone who'd done this before. They needed someone who already knew Apple's APIs and whatever strangeness could pop up.

After some negotiations, a signed contract, and a little work, we had our team. I would be the artist. An in-house developer would oversee integrating everything together. An outside company would provide the Augmented Reality code. The in-house team would handle database and web things. 

I spent about two months charging through the models. I produced about 300 assets in six weeks. There was extensive automation, an optimized workflow, and scripts that got the job done. For six weeks I was a factory turning out art at a rate of one asset every thirty minutes. Clockwork.

## The Problem

Months after the assets were finished, I had considered the project finished. Management didn't like how the final product had come out. The model files were fine, they could be loaded into any other tool and they looked perfect. Blender, Unity, Three.JS, and a dozen others produced really good looking real time renders, they were even better when a path tracer was used. The Augmented Reality App was another story.

At first I traded files with the dedicated, AR Specialists. They couldn't get a better result - not their developers and not their artists. We all tried a dozen things. I tried faking certain effects. We created test models. Tested every parameter. The result was the same.

In the app, there were no real reflections. This is a major problem in photorealism. Things look fake when there's just a few universal light sources. When the lighting is flat, everything is just awful. In Apple's Reality Converter, everything looked good. We had proof the technology could do the job and that the models were more than right, so how did we fix it?

At first, I was just troubleshooting. I researched the API's and provided the in-house developer with material to try, but progress remained slow. I wrote explanations and provided examples to explain what we needed to do, but no one knew exactly how to do that. An environment texture would do the job, but the API didn't exist to load it in. We couldn't get additional lights to work without it being disruptive either.

This needed a different kind of expert.

## A Deeper Investigation

I was already neck deep in API docs, I may as well start development. It would've been much easier if Apple's simulator worked with their AR APIs. It unfortunately did not. I started changing lines of code and sharing my results as we built towards an actual solution.

My answer was to ultimately refactor the code and completely change the API we were using.

The original development contractor had used Reality Kit. This was the fastest way to make an AR app, but by doing so we gave up control of the scene. Reality Kit is concerned with realism, but it has its limitations. It will try to estimate the lighting in the room and match it. That estimation is usually flat lighting. It fits the color and the overall feel of the room, but it destroys reflections.

![A screenshot of one of Apple's examples, the US Lunar Module, in AR Kit, next to a picture of a real Lunar Module in the Smithsonian.](@images/ar-comparison.png)

Look at how bright and shiny the real thing is. Look at how contrasty the foil is with those areas of light and dark. Sure, the official Smithsonian exhibit was lit by a team of experts who eat and breathe lighting systems, but Apple's front page example was made by a team of engineers who made this entire system. In principal, Apple's example is as good as it can possibly get.

Sure, we can say that Apple didn't create a foil material so we wouldn't get the contrast there and it doesn't have all the details, but I think the comparison is on the nose - especially for troubleshooting. The Lunar Module they made is just dull. The wood however, looks nice. The wooden platform under it is reasonably believable. We'd perhaps never mistake it for real wood, but it looks good.

Why the difference?

Metals and highly reflective materials live or die on the environmental reflections. Reality Kit isn't creating a good-enough lighting/environment map set up to fully drive those materials. My client's products involved lots of shiny material, so they couldn't help but look dull under this arrangement.

## Taking Back Control

Reality Kit locks out important controls. There were two ways to maybe fix this. On the one hand, a custom shader written in Apple's Metal Language would give us extensive control. On the other, it was a can of worms that no one involved had expertise with. We just couldn't stick with Reality Kit. Luckily, that's not the only way to do Augmented Reality in Apple's ecosystem.

Reality Kit simplifies the setup, but if you want to actually drive and control the scene, you can just use Scene Kit instead. Originally, Scene Kit was just Apple's graphics API, if you wanted to make a game, you used Scene Kit to control the rendering. Scene Kit gives you lighting, environment maps, and total control over everything. It also wasn't meant for this.

Or was it?

Apple provides another tool, AR Kit.

What's the difference between AR Kit and Reality Kit? These almost sound like they should be doing the same thing. Well, AR Kit is the reality-tracking system. You use AR Kit to see through the camera, track objects, and have that data available. Reality Kit, I think is basically a shortcut for merging AR Kit and Scene Kit, but with some kneecapping to keep your hands off the controls.

I rewrote the AR App and moved it from Reality Kit to Scene Kit + AR Kit. I documented the hows and why's, the other changes this would cause, and what other work would need to be done. We would restructure some of our data, but in the long run this would give us better control. I was able to produce the first AR Images approved by management. We did some work fine tuning our paremters, our reflections were perfect, everything looked as bright and colorful as it should be. It was golden.

The next steps would be coding in occlusion to hide the bits of the product that were behind people. Apple has depth map sensors for that. The model files needed to be tweaked. The original structure was using one complete asset package per model/texture combination. My scheme would create a central set of materials stored across all products and dynamically apply them, allowing us to refine our material parameters on the fly. There was work still to be done, but my stint in AR Development was over. The mightiest hurdle had been crossed and the rest was someone else's problem.
