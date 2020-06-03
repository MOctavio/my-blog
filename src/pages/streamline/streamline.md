---
path: "/streamline"
date: "2019-07-14"
title: "How to streamline your Pull Request process" 
tags: ['git', 'pr']
excerpt: "A common issue all through enterprise software development projects is the pull-requests bottleneck, and while many had been there and suffered the pain, not many, actually know what’s best to do about it." 
---

![](https://cdn-images-1.medium.com/max/800/0*0hecRVr48dhRUE4M.jpg)

*By Mario Octavio Jimenez, VP of Engineering for Kleeen Software*

A common issue all through enterprise software development projects is the
pull-requests bottleneck, and while many had been there and suffered the pain,
not many, actually know what’s best to do about it.

Here is an abstract representation of a process where all the developers deliver
their PRs at the same time and proceed to test and provide feedback, usually
this iterations extend for at least two cycles before a PR is approved and ready
to be merged:

![](https://cdn-images-1.medium.com/max/800/0*F5M3By7dPHk8tCur.png)

Project managers, team leads and developers, on a desperate attempt to get the
project back on track might decide to make pull-requests (PRs) “optional,”
defeating the sole purpose of PRs and code review. A not so intuitive approach
to this problem that we can leverage from Agile methodologies is to limit the
work in progress (WIP) in favor of an increased delivery, rather than a “bulk”
delivery.

Usually, a good practice is to set the limit of WIP right below the number of
team members; this will encourage collaboration and pair programming practices,
allowing room for team members to focus on collaboration rather than developing
on silos.

Another good recommendation will be to use draft PRs announced this year by
GitHub. Draft PRs allows the developer to leverage on continuous integration
(CI) hooks for testing with every new commit, to validate interactions, clarify
requirements, and receive technical feedback at early stages of development.

On the following scenario, and as mentioned, the developer can execute feedback,
testing, and validation at early stages of the development cycle, avoiding
bottlenecks during the approval process:

![](https://cdn-images-1.medium.com/max/800/1*WCKGRtxfleHvuldLR2O6Xg.png)

As a bottom line, PRs bottleneck problem can be solved or avoided through agile
practices that focus on team collaboration, continuous integration, and fast
delivery.

Cover Image Photo by [Yancy
Min](https://unsplash.com/@yancymin?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
on
[Unsplash](https://unsplash.com/search/photos/git?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)
