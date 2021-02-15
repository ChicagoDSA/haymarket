---
lang-ref: homepage
title: Sample site
subhead: Add a custom subhead.
---

Text can be **bold**, _italic_, or ~~strikethrough~~.

[Link to another page](another-page) and [set up a custom 404](non-existent).

There should be whitespace between paragraphs. We recommend including a README, or a file with information about your project.

# Header 1

This is a normal paragraph following a header. GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere.

## Header 2

> This is a blockquote following a header.
>
> We're not going to fight capitalism with Black capitalism, but we're going to fight it with socialism.

### Header 3

Use tiles to style your collections. Add an optional limit.

{% include list-tiles.html collection="tiles" limit=4 %}

#### Header 4

- This is an unordered list following a header.
- This is an unordered list following a header.
- This is an unordered list following a header.

##### Header 5

1. This is an ordered list following a header.
2. This is an ordered list following a header.
3. This is an ordered list following a header.

###### Header 6

| head1        | head two            | three |
| :----------- | :------------------ | :---- |
| ok           | good social justice | nice  |
| out of stock | good and plenty     | nice  |
| ok           | good `oreos`        | hmm   |
| ok           | good `zoute` drop   | yumm  |

### There's a horizontal rule below this.

---

### Here is an unordered list:

- Item foo
- Item bar
- Item baz
- Item zip

### And an ordered list:

1. Item one
2. Item two
3. Item three
4. Item four

### And a nested list:

- level 1 item
  - level 2 item
  - level 2 item
    - level 3 item
    - level 3 item
- level 1 item
  - level 2 item
  - level 2 item
  - level 2 item
- level 1 item
  - level 2 item
  - level 2 item
- level 1 item

### Small image

{% if site.jekyll_webp_installed %}
{% include comp-sm-image.html image="assets/images/theme-WEB-DuBois.png" alt="Side profile of W.E.B. DuBois" %}
{% else %}
![Side profile of W.E.B. DuBois](assets/images/theme-WEB-DuBois.png)
{% endif %}

### Large image with a caption

{% include comp-full-width-image.html image="assets/images/theme-Haymarket-flyer.png" description="A flyer announces the Haymarket rally." credit="[Credit your source and link to their website!](another-page)" %}

### Definition lists can be used with HTML syntax.

<dl>
<dt>Name</dt>
<dd>William</dd>
<dt>Born</dt>
<dd>1868</dd>
<dt>Birthplace</dt>
<dd>Massachusetts</dd>
<dt>Color</dt>
<dd>Red</dd>
</dl>

### Load events from a public Teamup calendar.

{% include list-events.html calendar="ksc3uaa38o41o2vz8o" limit=2 %}

### Buttons are more prominent than links.

{% include comp-button.html text="I want to contact the EC" link="another-page" %}

{% capture note %}

#### Use a note to highlight supporting information.

Add Markdown content here.

[All types, including links, are supported!](another-page)
{% endcapture %}
{% include comp-note.html content=note %}
