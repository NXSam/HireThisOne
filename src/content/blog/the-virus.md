---
title: Well - that sucked!
description: Beware of scammer recruiters and their nasty malware!
pubDate: Nov 24 2025
heroImage: "@blog/Hacker_email.png"
category: Site News
tags:
  - job hunting
  - evil
  - viruses
showImage: true
showVideo: false
YT: No
alt: No
author: Sam
---

I think it goes without saying that most jobseekers hate the current job market. It's just the reality of the situation, getting a job right now is not a great experience. It's about a 1/10.

Then we get the scammers and it drops to a -10/10, I'd like to go live in the woods now type of situation.

Unfortuantely I was the victim of one of these scams and while I'm fairly confident that no longterm damage has been done, I can't help but feel angry at the companies that allowed the situation to happen and that did nothing when I reported the events with documentation. As jobseekers we're forced to jump through hoops, as regular people a thousand companies demand Identity Verification. It all happens while they rubberstamp bad actors.

# What Happened?

I applied for a job at Amtec Inc, posted on LinkedIn. It looked legitimate enough. Then came the follow up, an email with a google form to follow and honestly? It was all pretty reasonable at first glance. I've previously had access to corporate VPNs for limited duration and controlled access so it didn't seem too wild. Here, we have a special access site for our screening process. Read and prepare for your interview.

I had some concern about everything with the VPN, it was a random installer from a random person, but they looked legitimate and the portal to download the VPN from was a legitimate looking portal too. Like a fool, I charged on ahead and ran the installer. I tried to troubleshoot it when nothing worked. I reached back out to the HR Contact that also didn't work.

If you're in the modern job market, you might think you were just being ghosted for some personal failure.

# The Investigation

If you've looked over this site, you might guess that I don't like to see something left undone. If I were responsible for the VPN not working, I'd want to know. Thus begins the deep dive. It was a deep dive with more caution than the first time around. This time my dear little piece of malware was locked in a container via Windows Sandbox.

I was annoyed to discover that Windows Sandbox isn't installed by Default. It 100% should be.

Run the malware in my little sandbox and I get the same result.

Grab some tools to take it apart and on the inside it sort of looked like an OpenVPN installer - but it was smaller than a stock OpenVPN install. At first I aimed to just locate and extract the VPN Config so I could connect and keep things moving. Makes enough sense, right? No config file.

My suspicions were raised, I ran a virus scan of the first PC and it found malware.

> "Ok windows, go kill that for me."

All good, right? We found and devoured the suspicious material?

# The Report

I gathered evidence, submitted the file to virus total, looked up hosts and sent out reports that fell on deaf ears. Cloudflare could "take no action" because they weren't the host of the virus. They WERE the registrar for the domain and they were 100% enabling this whole campaign, but as long as the virus wasn't on their servers, it's fine. They scanned the domain and it's fine. The virus was in Google Forms, so Google must be responsible.

It's worse with LinkedIn, there's no human contact there. Just hopes, luck, and dreams. Report the company and they take no action. Even now, there are **32** fake profiles on LinkedIn Associated with this Amtec, LLC. There's 2 open jobs from last week. You can't even send them evidence to get a bad actor taken down.

You can see where this circus is going.

I had to just move on.

# The Infection

My computer showed some weird symptoms. Performance issues. Weird. Nothing overtly suspicious, it was just being buggy. More virus scans and I discover a batch of folders in an Exceptions setting "ignore these." I didn't put those there. Microsoft Defender still didn't find anything when I purged the folders. It was getting frustrating, but maybe it wasn't the virus, maybe I could keep on chugging on.

This morning, the whole OS was having a fit. Endless dialogues and errors, evidence that someone attempted to remote access the system. It was the final straw.

## Recovery

Would you believe those asshole malware devs broke Windows Recovery?

Shift-Click, restart,  and I could not do anything on the recovery screen. The whole computer was just frozen. No otherkeyboard or mouse would do it, it just would not work. The malware got to what SHOULD be a protected part of windows?

The gloves were off at this point. I grabbed my laptop, grabbed Rufus (I am NOT adding a Microsoft account Bill, get over it), and I burned down the system I had perfectly-fit to the way I liked it. It was like a comfy hoody, everything where it should be. There were a few rough spots, but it was working.

I've purged all of that. There is a risk these assholes left something on my network drives, but I don't think so. If they did, BTRFS and Fedora Atomic are harder nuts to crack and my Mac is probably due for a little clean-install anyway.

The hard part still remains: I need to  sign into a million places, download approximately 3 billion blender addons, and kick myself in the butt.

# Next Time

Unfortunately for any future scammers (and recruiters), I'm going to be taking a tighter view to security. It's not like I don't know how. I just trusted more than I should have. I have tools for virtual machines and I will be using them. I have a machine or two with no explicit purpose that I could use as honeypots/testing machines. At some point, I'm going to tell a recruiter I need proof they actually work for a real employer. Maybe I'll ask for their EIN and business registration. Any discrepency is a reason to lock down.

# Lastly, A SPECIAL Shout Out

This could've sucked more. This could've been harder.

I had Chris Titus's [win util](https://github.com/ChrisTitusTech/winutil) to make parts of this faster.

