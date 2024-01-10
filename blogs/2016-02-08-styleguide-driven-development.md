---
title: Styleguide Driven Development
date: "2016-02-08T19:54:45+04:00"
description: Refactoring is a chore. We all know that. Most people don't like to refactor code, especially CSS, because the amount of gain vs. the amount of effort is minimal.
meta: old
path: styleguide-driven-development
---

Refactoring is a chore. We all know that. Most people don't like to refactor code, especially CSS, because the amount of gain vs. the amount of effort is minimal.

Such was the case with my refactor of our application. After an entire sprint I had cleaned up a couple pages of code. Everything looked great, but what had I really accomplished? We would save time in future development, but the CSS itself was still gigantic (and getting bigger), and we weren't actually saving any real bytes.

Our biggest problem, as mentioned earlier, was that we were styling each page, and each section in each page, as if they were a unique element. Sure we had a bootstrap foundation, but when it came down to the details, we were constantly doing things like coloring buttons red, setting the font size, and creating hover states.

> I had to really think about the problem I was trying to solve.

I needed to get the file size down and get it to load faster. That was the ultimate goal. And what's the only way to get file size down? Is to create a set of reusable classes that we put together to assemble components in the markup.

The answer, believe it or not, wasn't entirely obvious. I ended up talking to a designer on the team about his passion to create a pattern library and living style guide. He was already on the way to approach this from the design side. That's when it clicked with me that the pattern library was the solution to assembling reusable components in the markup. I found out from conversations with the designers, that not only was styling each little element differently a big problem on the code side, but it was just as big of a problem with design consistency on the design side.

The designers kicked off the process by taking inventory of all of the existing features on the application(s) and grouping them into buckets based on the conventions found in [Pattern Lab](http://patternlab.io/). After few sprints we had set of rules that we could build around. Our system was composed simply of mostly atoms, some molecules, and a few organisms that were rough sketches. The designer was able to take this into a rudimentary code phase, so the bare bones of HTML and CSS were set.

Here's where the interesting engineering work began. Now that we had a static set of basic components, how do we then scale this into a robust, reusable component library that will automatically integrate into our gigantic consumer-site application?

## Using the Right Tools

To fully automate our workflow into style guide driven development, we took advantage of some modern tooling.

<img src="/assets/blogs/styleguide-yeoman-logo.png" style="float: left; height: 65px; padding: 0 10px 10px 0; border: 0 none;">

### Yeoman

First things first, we needed a living style guide that actually looked like some sort of a website. We had a set of individual components floating around on static pages and in CodePen. We needed basic that had the ability to possibly scale into something bigger, and we needed it fast. [Yeoman](http://yeoman.io/) to the rescue! Using Yeoman we were able to quickly add our markup, convert our CSS into SCSS, and have a gulp build in one easy step.

<img src="/assets/blogs/styleguide-bower-logo.svg" style="float: left; height: 65px; padding: 0 10px 10px 0; border: 0 none;">

### Bower

Building on the scaffolding from Yeoman, we now had the seed of an application that we could plug into a git repository. At that point, the next step was to use [Bower](http://bower.io) to add it as dependency in our main application. Our main consumer-site application was already wired up to bring in Bower dependencies. If you need more info doing that, then you can read up on bower _here_. All we had to do was add our style guide as a new dependency.

```js
"dependencies": {
"base-css": "ssh://git@mycompany.com:1234/project/styleguide.git#0.3.26
}
```

Now, whenever a build of GrubHub or Seamless was done, it would automatically get the latest version of our style guide from the git remote repo, and copy it into the codebase. From there, the Grunt build had a job that would copy the output of that repo into a folder for consumption.

<!-- <img src="https://cdn.worldvectorlogo.com/logos/gulp.svg" style="float: left; height: 100px; padding: 0 10px 10px 0;"> -->

### Gulp

We used gulp as our build tool because of its streaming capabilities. We set up our style guide to transpile, optimize, and then populate the distribution folder with assets. We chose to include an uncompressed and compressed version of a single .css file, as well as all necessary fonts. Consumers of the style guide can then choose which files they want to use at any given time.

## Integrating

Now that we had our build process set up and a rough workflow sketched out, we were ready to wire up the style guide into our main consumer site. We knew from the start that this would be no easy task. We did a few test runs by taking our compiled CSS and dumping into our main site and seeing what happenned. The results were promising, though we could infer that the amount of work would tie us up for several weeks.

How did we make this work? We matched up our class names in the style guide to work 1:1 with class names in the main site. In other words, a .btn class in the main site would have the exact same name as a .btn in the style guide. We already had a decent naming convention in our main app that was derived directly from bootstrap. We didn't want to introduce any additional complexity to the process since it was already such a large amount of work, so we stayed with that convention and added upon it.

Because of that decision, our process was indeed time consuming, but still relatively straightforward. It went like this:

1. Isolate an atom for relase
2. Import style guide code
3. See what breaking visual changes were introduced to the application and tend to those first.
4. Find additional elements that needed the new classes and add them.
5. Tweak as necessary.

Once we set up Bower and performed a `bower install`, we had the CSS on our site. At that point, all of the elements of that particular atom were affected. We then went through atom by atom and cleaned up until the site passed visual QA. Again, fairly straightforward, yet as you can imagine, quite time consuming.

### Versioning

We made a decision early on that we were going to tighly control what would be integrated. We accomplished this by doing a few things.

#### Tagging

You'll notice in the previous section on Bower, that there is a hash at the end of the url. This hash is the version number of the current "release" of the style guide. When we push a commit to the repo, there is an option to add a git tag with that commit. That tag essentially becomes the version number in the main site's bower.json. This tagging allows multiple developers to work on the style guide at the same time, and only "releasing" when a version is completely ready.

For more on tagging, see: [Git - tagging](https://git-scm.com/book/en/v2/Git-Basics-Tagging)

#### Isolating for Release

When the designers first organized the project, they did so around the principals of [Pattern Lab](http://patternlab.io/). Coming into code, it was easy then to isolate things for release. We picked one atom at a time, starting with buttons, and isolated it for release. We did this by creating an alternate .scss file with only the bare minimum files included. This file included all of the base utility files (mixins, variables, maps, etc...), and then whatever atoms we wanted to release.

```scss
// Utilities
@import "variables";
@import "flexbox";
@import "mixins";
@import "zindex";

// Atoms
@import "atoms/buttons/buttons";
```

As time went on, we added atom by atom, and then molecules and organisms, until the entire style guide was integrated. Integrating the style guide in this piecemeal fashion allowed us to control the release process and take our time with a thorough visual QA. It also gave us the freedom to clean out unused code as the styles were being replaced by the style guide. If your main application is enterprise level like ours, then I would strongly recommend this approach for you as well.
