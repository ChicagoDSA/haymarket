# Haymarket

[![Latest release](https://img.shields.io/github/v/release/ChicagoDSA/haymarket)](https://github.com/ChicagoDSA/haymarket/releases/latest)

A GitHub Pages theme to easily launch Chicago DSA websites.

[Cayman](https://github.com/pages-themes/cayman) provided the source templates, and David Darnes wrote an immensely helpful [tutorial on setting up your own Jekyll themes](https://www.siteleaf.com/blog/making-your-first-jekyll-theme-part-1/). Color palettes and typography are from the [DSA National Design Committee](https://design.dsausa.org/).

## Getting started

1. Create your new repository, `my-new-site`.
2. Navigate to the **Settings** tab of `my-new-site` and scroll down to **GitHub Pages**.
3. Under **Source**, select `master`. Under **Theme Chooser**, select any theme.
4. Go to the root directory of `my-new-site` and open `_config.yml`. Clear it out and add `remote-theme: ChicagoDSA/haymarket`.
    - Optional: You can specify a specific release to use by setting `remote-theme: ChicagoDSA/haymarket@v1.0.0`. Replace `v1.0.0` with the version you want.
5. Give it a few moments to build and refresh `my-username.github.io/my-new-site/`.
6. Woohoo, your theme is working!

## Configuration

In order to fully use your site, open `_config.yml` again. Replace your content with:

```yaml
title: My New Site
description: A description of my new site.
chapter:
  name: # Public name of your chapter
  url: # your-chapter-website.org
  facebook: # Facebook URL
  instagram: # Instagram URL
  twitter: # Twitter URL
  # Override DSA national logos
  header-logo-svg:
  header-logo-png-fallback: # 360px square recommended
  background-logo-svg:
  background-logo-png-fallback: # 1440px square recommended
  # Alt text for screen readers
  logo-description: A CTA train and the Sears Tower are in front of a rose.
custom-join: # Add custom join URL here
google_analytics: # Tracking ID
teamup: # Calendar API key
permalink: pretty
remote_theme: ChicagoDSA/haymarket

# Leave empty to disable
banner:
  text: "Banner text"
  link: linked-page
  
defaults:
  -
    scope:
      path: "" # All files
    values:
      layout: default
      image: "assets/images/og-image.png"
  
# Add collections here
# https://jekyllrb.com/docs/collections/
collections:
```

You need to set `title`, `description`, `name`, and `url`. 
#### Other values
- When a social media URL is added, the icon will appear in your header.
- Set a custom join URL to override the default national page.
 
## Adding content
 
1. Go to the root directory of `my-new-site`. Click on the **Create new file** button.
2. Set your file's name as `index.md` and add the following content:

```markdown
---
layout: default
title: <!-- optional metadata -->
description: <!-- optional metadata -->
headline: <!-- optional display text -->
subhead: <!-- optional display text -->
---

Hello, world!
```
3. Commit your change. You now have a new homepage!

For more information on GitHub Pages content, check out the [documentation](https://help.github.com/en/github/working-with-github-pages/adding-content-to-your-github-pages-site-using-jekyll).

## Adding navigation

1. In the root directory of `my-new-site`, create a folder called `_data`.
2. Inside `_data`, create `nav.yml` and paste this code:

```yaml
elements:
  - group: "Add navigation"
    items:
      - page: "Link to a page"
        url: another-page
      - page: "Another link"
        url: another-page
  - group: "Another group"
    items:
      - page: "Use Markdown *styling*"
        url: another-page
```

3. Rebuild your site. You have a nav!

## Local development

1. Open your terminal window and run `gem install github-pages`.
2. Clone your repository and `cd` into the local directory.
3. Run `bundle init` to create a Gemfile. Replace the Gemfile's contents with:

```ruby
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
```

4. Run `bundle exec jekyll serve --watch` and open your local URL!

#### Keep your repository tidy
Building your site locally will add a lot of files. Don't commit them. 

Create a `.gitignore` file in your root directory and add this:

```
_site
Gemfile.lock
```
