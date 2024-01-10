---
title: Wrangling Your CSS Into Submission
date: "2016-01-16T21:52:45+04:00"
description: Do you work on an enterprise system? Do you have a single page web app? Did you just go through a major redesign? Does re-styling a seemingly harmless little element tend to break other elements? If you answered “yes” to any of these questions, then this post is probably for you.
meta: old
path: wrangling-your-css
---

Do you work on an enterprise system? Do you have a single page web app? Did you just go through a major redesign? Does re-styling a seemingly harmless little element tend to break other elements? If you answered “yes” to any of these questions, then this post is probably for you.

Last summer at [GrubHub](https://www.grubhub.com), we reached a major milestone in the company’s history: completing the consumer site’s first ever facelift. Because of business demands, this facelift was conceptualized and executed (design + research + build) in just _three months!_

![Seamless Homepage Post-Facelift](/assets/blogs/wrangling-SL_homepage.png)

After we celebrated our launch, we evaluated. We found that while the overall accomplishment was a huge success, the underlying code was a complete disaster. Because of the lack of any kind of process, most components were prototyped out in CodePen and then literally just dumped into the code base. Developers were given individual components and views to style, and they did so independently and in parallel. There was no thought given to scale or performance, only to meet the deadline.

As you can imagine, our CSS code ballooned. We went from ~180kb at start, to over 370kb by the finish. In just three months we doubled the size of our CSS! The worst part of this was that, being a single page app, we served the entire payload at once from the document head. That meant that critical downloads were blocked while CSS was being downloaded.

Now, even though our site looked nice and pretty, it performed poorly and was very brittle and susceptible to breakage. Writing new code was painful, and in the interest of time, devs just starting putting code anywhere to get the job done. It was quickly becoming a nightmare.

![GrubHub Homepage Post-Facelift](/assets/blogs/wrangling-/GH_homepage.png)

Towards the end of the facelift, my manager looked at me for an answer. We needed someone to take control of this mess and I was interested. He named me the tech lead for CSS and set me to work. In a short turn around time of about two months, we went from a bloated code base, to a lean, organized, style-guide-driven development process. How did we do it? This series of posts is a collection of learnings from the process, so you can weed out the mess and not waste a lot of time figuring out what to do next.
