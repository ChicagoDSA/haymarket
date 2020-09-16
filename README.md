# Haymarket theme

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
chapter:
  url: # your-chapter-website.org
  facebook: # Facebook URL
  instagram: # Instagram URL
  twitter: # Twitter URL
  # Override DSA national logos
  header-logo-svg:
  header-logo-png-fallback: # 360px square recommended
  background-logo-svg:
  background-logo-png-fallback: # 1440px square recommended
custom-join: # Add custom join URL here
google_analytics: # Tracking ID
teamup: # Calendar API key
permalink: pretty
remote_theme: ChicagoDSA/haymarket

# Set default front matter for Markdown files
defaults:
  -
    scope:
      path: "" # All files
    values:
      layout: default
      image: assets/images/og-image.png # Social media preview
      lang: en
  
  # Set URLs and language code for collections
  # English   
  -
    scope:
      path: _homepage/en/index.md
    values:
      permalink: / # Set as index

# Manage lists of content with collections
# https://jekyllrb.com/docs/collections/
collections:
  # Homepage translations
  homepage:
    output: true
```

#### Custom values
- When a social media URL is added, the icon will appear in your header.
- Set a custom join URL to override the default national page.

## Set default text values

1. Go to the root directory of `my-new-site`. Click on the **Create new file** button.
2. Set your file's name as `_data/translations.yml` and add the following content:

```yaml
en: English
title:
  en: Haymarket theme
description:
  en: A GitHub Pages theme to easily launch Chicago DSA websites.
chapter-name:
  en: Your DSA Chapter
logo-description: # Alt text for screen readers
  en: Two hands holding each other. A rose is behind them.
join:
  en: Join DSA
```

## Adding a homepage

1. Go to the root directory of `my-new-site` and create a file named `_homepage/en/index.md`. Add this to it:

```markdown
---
lang-ref: homepage
title: <!-- optional metadata -->
description: <!-- optional metadata -->
headline: <!-- optional display text -->
subhead: <!-- optional display text -->
---

Hello, world!
```

2. Commit your change. You now have a new homepage!

## Adding more content

1. To add a single page, go to the root directory of `my-new-site` and create a file named `_pages/en/another-page.md`.
2. The content we added before is called Front Matter. Add it to this page, too:

```markdown
---
lang-ref: another-page
title: <!-- optional metadata -->
description: <!-- optional metadata -->
headline: <!-- optional display text -->
subhead: <!-- optional display text -->
---

This is another page.
```

## Adding navigation

1. In the root directory of `my-new-site`, create a file named `_data/nav.yml`.
2. Inside this new file, paste the following:

```yaml
elements:
  - group: 
    en: Add navigation
    items:
      - page:
          en: Link to a page
          url: 
            en: another-page
      - page:
          en: Another link
          url:
            en: another-page
  - group:
    en: Another group
    items:
      - page:
          en: Use Markdown *styling*
          url:
            en: another-page
```

3. Rebuild your site. You have a nav!

## Local development

1. Open your terminal window and run `gem install github-pages`.
2. Clone your repository and `cd` into the local directory.
3. Run `bundle init` to create a Gemfile. Replace the Gemfile's contents with:

```ruby
source "https://rubygems.org"
gem "github-pages"
```

4. Run `bundle exec jekyll serve --watch` and open your local URL!

#### Keep your repository tidy
Building your site locally will add a lot of files. Don't commit them. 

Create a `.gitignore` file in your root directory and add this:

```
_site
.jekyll-cache
.sass-cache
Gemfile.lock
```
