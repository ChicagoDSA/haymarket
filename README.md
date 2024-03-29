# Haymarket theme

[![Latest release](https://img.shields.io/github/v/release/ChicagoDSA/haymarket)](https://github.com/ChicagoDSA/haymarket/releases/latest)

A GitHub Pages theme to easily launch Chicago DSA websites.

[Cayman](https://github.com/pages-themes/cayman) provided the source templates, and David Darnes wrote an immensely helpful [tutorial on setting up your own Jekyll themes](https://www.siteleaf.com/blog/making-your-first-jekyll-theme-part-1/). Color palettes and typography are from the [DSA National Design Committee](https://design.dsausa.org/).

## Get started

1. Create your new repository, `my-new-site`.
2. Navigate to the **Settings** tab of `my-new-site` and scroll down to **GitHub Pages**.
3. Under **Source**, select your default branch, and click **Save**.
4. Go to the root directory of `my-new-site`. Click on the **Create new file** button and create a file named `_config.yml`.
5. Open it and add the line: `remote-theme: ChicagoDSA/haymarket`.
   - Optional: You can use a specific release by setting `remote-theme: ChicagoDSA/haymarket@v1.0.0`. Replace `v1.0.0` with the version you want.

### Configuration

In order to use your site, open `_config.yml` again. Replace your content with:

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
google_analytics: # Tracking ID
teamup: # Calendar API key
permalink: pretty
remote_theme: ChicagoDSA/haymarket # Append @vX.X.X to specify a version number
staging_url:
plugins:
  - jekyll-redirect-from
jekyll_webp_installed: false

# Set default front matter for Markdown files
defaults:
  - scope:
      path: "" # All files
    values:
      lang: en
      layout: default
      image: assets/images/og-image.png # Social media preview

  # Set redirects relative to base
  - scope:
      path: _redirect-to
    values:
      permalink: /:path

  # Set URLs and language code for collections
  # English
  - scope:
      path: _homepage/en/index.md
    values:
      permalink: / # Set as index
  - scope:
      path: _pages/en
    values:
      permalink: /:title

# Manage lists of content with collections
# https://jekyllrb.com/docs/collections/
collections:
  # Export redirects
  redirect-to:
    output: true
  # Homepage translations
  homepage:
    output: true
  # Add single pages in the _pages folder
  pages:
    output: true
```

#### Custom values

- When a social media URL is added, the icon will appear in your footer.

### Set default text values

1. Go to the root directory of `my-new-site`. Create a new file named `_data/translations.yml`.
2. Add the following content:

```yaml
# Supported languages
en: English

# Website info
title:
  en: Your Website Title
description:
  en: Describe your website for search engines.
chapter-name:
  en: Your DSA Chapter

# Join DSA button
join:
  text:
    en: Join DSA
  url: # Override DSA national link
    default: # Apply a link to all languages
    en: # Or define specific values

# Footer
follow-us:
  en: Follow us on social media
back-to-top:
  en: Back to top

# Other content
photo:
  en: Photo
```

### Add a homepage

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

2. Commit your change.
3. Give it a few moments to build and refresh `my-username.github.io/my-new-site/`.

_Woohoo, your website is working!_ 🎉

## Advanced features

### Add more content

1. To add a single page, go to the root directory of `my-new-site` and create a file named `_pages/en/another-page.md`.
2. Add this to it:

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

3. Commit your change, and your page will be published at `my-username.github.io/my-new-site/another-page`. Even though this page lives inside `_pages/en`, the `defaults` settings in `_config.yml` moved it to the site's root.

### Adding "updates"

1. Add a markdown file to the `_posts/` subdirectory with the filename format `yyyy-mm-dd-post-title.md`. Jekyll uses the date in the filename to organize the updates, so it is important that they are formatted this way. 

2. Add your update content to the file, and it will appear listed on `your-base-url.com/updates` 

3. If desired, you can control the index page title (if you want something other than "Updates", like "blog" or "announcements") by changing the name of the `updates/` directory and the front matter of `updates/index.html` accordingly. 

Posts are native/baked-in to Jekyll. For more info on how they can be utilized, check out their [documentation](https://jekyllrb.com/docs/posts/).

### Add custom navigation

- Create a file named `_data/nav.yml`. Add this to it:

```yaml
menu:
  en: Menu

elements:
  - page:
      en: Add navigation
      url:
        default: # Apply a link to all languages
        en: another-page
  - group:
    en: With groups
    pages:
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
    pages:
      - page:
          en: Use Markdown *styling*
          url:
            en: another-page
```

### Use collections to manage related content

- In order to use the `list-tiles` component, you need to create a collection folder. Reference and enable it in `_config.yml`.
- This repository's example website has a collection called `tiles`.

### Display a site-wide announcement

- Create a filed named `_data/announcement.yml`. Add this to it:

```yaml
# Add content here to enable a site-wide announcement
text: # Style with markdown
url: # Apply a link
```

- If `_data` contains `announcement.yml`, and `announcement.yml` contains these values, the announcement will be visible.

### Enable a custom 404 page

- Create `_pages/404.md` with the following content:

```
---
permalink: /404
title: Page not found
description: We couldn't find the page you're looking for.
---
```

- This page applies to every subdirectory and language.

### Add a staging url

You may add a `staging_url:` option to your config file in order to apply a `noindex` meta tag to your staging site. This will prevent search engines from crawling your staging instance, ensuring that your search rankings won't be harmed by repetative content.

### Create client-side redirections

This theme uses the [Jekyll Redirect From](https://github.com/jekyll/jekyll-redirect-from) plugin.

To add a `redirect-from` to a page, add the array to the YAML front matter of your existing page or post. For example:

```yaml
title: My amazing post
redirect_from:
  - /post/123456789
  - /post/123456789/my-amazing-post
```

Similarly, users can be redirected away from the site, with `redirect-to`. For example:

```yaml
title: My amazing post
redirect_to: http://www.github.com
```

**Note:** Using `redirect_to` or `redirect_from` with collections will only work with files which are output to HTML, such as .md, .textile, and .html.

### Translate your content into other languages

The example site also has a complete Spanish translation. For everything to work:

1. Go to `_config.yml`. Duplicate the `# English` section of `defaults`, and customize it for your language.
2. `nav.yml` and `translations.yml` have line items for English (`en`). Add additional ones for your language.
3. Within `_homepage`, `_pages`, and any collection directories, create an additional language folder. Put your translated Markdown files there.

### Serve optimized .webP files

Some of the templates use the `<picture>` tag to allow use of optimized .webP images in place of heavier .jpg and .png file types. You can utilize the [Jekyll WebP](https://github.com/sverrirs/jekyll-webp) plugin to generate .webP images from your .jpg and .png assets. Just add `jekyll-webp` to both your gemfile and config.yml file with any additional configuration as specified on the plugin's documentation, and the files will be converted and served on your next build.

Additionally, in order to take advantage of the templates using the `<picture>` tag, you will need to set the `jekyll_webp_installed:` option in your config file to `true`.

See Haymarket's `\_config.yml` for an example of how this can be implemented.

## Local development

1. Open your terminal window and run `gem install github-pages`.
2. Clone your repository and `cd` into the local directory.
3. Run `bundle init` to create a Gemfile. Replace the Gemfile's contents with:

```ruby
source "https://rubygems.org"
gem "github-pages"
```

4. Run `bundle exec jekyll serve --watch` and open `http://127.0.0.1:4000` in your browser!

#### Keep your repository tidy

- Building your site locally will add a lot of files. Don't commit them.
- Create a `.gitignore` file in your root directory and add this:

```
_site
.jekyll-cache
.sass-cache
Gemfile.lock
```
