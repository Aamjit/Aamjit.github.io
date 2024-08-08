+++
title = 'VS in Github?'
description = "This blogpost explains few steps on how we can use VS Code remotely in Github"
image = "/images/posts/vs_in_github.png"
date = 2021-08-15T20:08:10+05:30
draft = false
type = "post"
tags = ["github", "vscode"]
+++

## Has everyone been aware of the feature, that GitHub provides developers, where they can open VS Code in GitHub?

If you didn't know it before then I am happy to share this.

I recently found out the fact that we can open VS code editor in a browser's window from a GitHub repository without actually running VS Code from the system. This is cool feature where one can open up any repository and start working on it without the need of cloning as local repo.

There are few ways we can do this:

> Firstly you have to go to the repository page where you want to work on

## Method 1

![Using period](https://media.licdn.com/dms/image/C4E12AQEAIuXxOGBJJg/article-inline_image-shrink_400_744/0/1628968248281?e=1728518400&v=beta&t=lF-6f2MTCDwCo6BoLcSdf-3gB41fNvL1D-_bRIVZ1h8)

Once you are in the repository, press the period `.` button on the keyboard, then it will redirect you to a page `https://github.dev/(repository-name)` .

Here It is going to redirect to `https://github.dev/facebook/react`

Here you get almost all the features available in VSCode. Its like a remote version of VSCode. Open source communities have made it possible for websites to seamlessly integrate VSCode editors onto platforms.

## Method 2

This also requires you to navigate to the repository folder on your github, usually the root folder for your repo.

Then you can go to your URL address bar and edit the link in such a way that you add the letters `1s` aat the end of the `github` domain name.

![vs in github]("../../static/images/posts/vs_in_github.png")

Example:

```
Before: https://github.com/golang/go
After: https://github1s.com/golang/go
```

Very similarly, it will redirect and load up the repo in a VSCode themed web code editor.

## Ending

I hope you found this article useful. Happy to share. 😃
