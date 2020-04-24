# Haymarket

[![GitHub version](https://badge.fury.io/gh/ChicagoDSA%2FHaymarket.svg)](https://github.com/ChicagoDSA/Haymarket/releases)

A GitHub Pages theme to easily launch Chicago DSA websites.

[Cayman](https://github.com/pages-themes/cayman) provided the source templates, and David Darnes wrote an immensely helpful [tutorial on setting up your own Jekyll themes](https://www.siteleaf.com/blog/making-your-first-jekyll-theme-part-1/). Color palettes and typography are from the [DSA National Design Committee](https://design.dsausa.org/).

## Getting started

1. Create your new repository, `my-new-site`.
2. Navigate to the **Settings** tab of `my-new-site` and scroll down to **GitHub Pages**.
3. Under **Source**, select `master`. Under **Theme Chooser**, select any theme.
4. Go to the root directory of `my-new-site` and open `_config.yml`. Clear it out and add `remote-theme: ChicagoDSA/Haymarket`.
    - Optional: You can specify a specific release to use by setting `remote-theme: ChicagoDSA/Haymarket@v1.0.0`. Replace `v1.0.0` with the version you want.
5. Give it a few moments to build and refresh `my-username.github.io/my-new-site/`.
6. Woohoo, your theme is working!

## Configuration

In order to fully use your site, open `_config.yaml` again. Replace your content with this:

```
title: My New Site
description: A description of my new site.
chapter:
  name: Public name of my chapter
  location: Where my chapter is located
  url: My chapter's website
google_analytics:
remote_theme: ChicagoDSA/Haymarket
plugins:
  - jekyll-seo-tag
```
 
You need to set `title`, `description`, `name`, `location`, and `url`. 
 
`google_analytics` takes your tracking ID. It's optional.
 
## Adding content
 
1. Go to the root directory of `my-new-site`. Click on the **Create new file** button.
2. Set your file's name as `index.md` and add the following content:

```
---
layout: default
---

Hello, world!
```
3. Commit your change. You now have a new homepage!

For more information on GitHub Pages content, check out the [documentation](https://help.github.com/en/github/working-with-github-pages/adding-content-to-your-github-pages-site-using-jekyll).
