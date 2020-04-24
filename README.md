# Haymarket
A GitHub Pages theme to easily launch Chicago DSA websites.

[Cayman](https://github.com/pages-themes/cayman) provided the source templates, and David Darnes wrote an immensely helpful [tutorial on setting up your own Jekyll themes](https://www.siteleaf.com/blog/making-your-first-jekyll-theme-part-1/). Color palettes and typography are from the [DSA National Design Committee](https://design.dsausa.org/).

### Getting started

1. Create your new repository, `my-new-site`.
2. Navigate to the **Settings** tab of `my-new-site` and scroll down to **GitHub Pages**.
3. Under **Source**, select `master`. Under **Theme Chooser**, select any theme.
4. Go to the root directory of `my-new-site` and open `_config.yml`. Clear it out and add `remote-theme: ChicagoDSA/Haymarket`.
5. Give it a few moments to build and refresh `my-username.github.io/my-new-site/`.
6. Woohoo, your theme is working!

### Configuration

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
