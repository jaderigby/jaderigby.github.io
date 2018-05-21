const title = "UX Guidelines: Vol. 3";

const date = "5/22/2018";

const slides = [
{
"set" : 1,
"idLabel" : "Metadata",
"type" : "section",
"content" : `
# Metadata #
`
}
,{
"set" : 1,
"idLabel" : "Metadata-Intro",
"content" : `
## Metadata: What Is It? ##

<div class="swap-wrap">

  <div class="swap">

> Structured information that describes, explains, locates, or otherwise makes it easier to retrieve, use or manage an information resource.
<cite>&mdash; Wikipedia</cite>

In short, it is data about a file regarding its author, date, and other useful information.

  </div>

  <div class="swap">

> Often times, we rely on file names and folder structure to organize our files, and consider metadata "extra work".  But in reality, metadata can be even more valuable in maintaining and retrieving files than the folder structure that we contain them in.

  </div>
  <div class="swap">

- Most files contain metadata
- Metadata varies from file type to file type
- PSDs contain metadata
- Word docs do, as well

  </div>

</div>
`
}
,{
"set" : 1,
"idLabel" : "Metadata-Where",
"content" : `
## Metadata: Where? ##

- Metadata is usually listed under "File > Properties" on Macs.
- In Photoshop, it is found under "File > File Info"
`
}
,{
"set" : 1,
"idLabel" : "Metadata-Our-Main-Focus",
"content" : `
## Metadata: Our Main Focus ##

<div class="swap-wrap">

  <div class="swap">

#### Though metadata varies from file type to file type, they typically include the following: ####

<section class="half">
  <article>
    <ul>
      <li>Creation Date</li>
      <li>Modified Date</li>
      <li>Author</li>
    </ul>
  </article>
  <article>
    <ul>
      <li>Subject</li>
      <li>Keywords</li>
      <li>Comments</li>
    </ul>
  </article>

  </div>

  <div class="swap">

#### __4__ Most Important Metadata Elements To Us: ####

1. Creation Date
2. Modified Date
3. Author
4. Keywords

  </div>

  <div class="swap">

- __Creation Date__ &mdash; Gives us the first view into the creation timeline
- __Modified Date__ &mdash; Gives a sense of relevancy
- __Author__ &mdash; Ownership: Who to ask questions
- __*Keywords__ &mdash; For intelligent searches and linking different assets to the same project (will be covered coming up)

  </div>

</div>
`
}
,{
"set" : 1,
"idLabel" : "Metadata-Kewords",
"content" : `
## Metadata: Keywords ##

<div class="swap-wrap">

  <div class="swap">

- Kewords serve as a robust indexing feature
- Like categories, only better!
- Start from general and go to specific, leaving out the generic, such as "file type" &mdash; These are already part of the file's definition.
- Keep specific and succinct, but use as many as seem logical

  </div>

  <div class="swap">

#### Example: ####

- SeroVital
- Neck Cream
- New Years
- Sale
- Landing Page

  </div>

  <div class="swap">

1. __Brand__ &mdash; SeroVital, GF-9, etc
2. __Product__ &mdash; Neck Cream, etc
3. __Campaign__ &mdash; Memorial Day, etc
	- can also break down to: a) Sale, b) Special, c) Limited Time 
4. __Classification__
	- Landing Page
	- Microsite
	- Full site
	- Kyno site
	- email

__Note:__ Reserve Multiple authors for comments section.

  </div>

  <div class="swap">

We can continue to refine our conventions, as we see fit.

__Our main goal is retrieving assets without any wasted time whatsoever: To be able to get what we want, and go to work!__

  </div>

</div>
`
}
,{
"set" : 1,
"idLabel" : "Metadata-Then-What",
"deck" : 2,
"content" : `
## Metadata: Then What? ##

<div class="swap-wrap">

  <div class="swap">

### How To Search: ###

- Keyword Combinations
  - "this __AND__ that"
  - "SeroVital __AND__ Memorial Day __AND__ Sale __AND__ Email"
- File type
  - "__kind__:word"

  </div>

  <div class="swap">

#### Other Possible: ####

- word
- psd
- pdf
- image
- movie

  </div>

  <div class="swap">

### All Together: ###

"SeroVital __AND__ Memorial Day __AND__ Sale __AND__ Email __kind__:word"

  </div>

</div>
`
}
,{
"set" : 1,
"idLabel" : "Metadata-Search-Demonstration",
"deck" : 3,
"content" : `
## Metadata: Search Demo ##

<div class="swap-wrap">

  <div class="swap show">
    <h3 class="center-justify">Goal:</h3>
    <h4 class="center-justify">Find original document for = SeroVital Neck Cream Content, Memorial Day Sale Email</h4>
  </div>

  <div class="swap">
    <div class="main-image large">
      <img src="images/files.png" />
    </div>
  </div>

  <div class="swap">
    <h4 class="center-justify">Search by title: <span class="red"><strong>test</strong></span></h4>
  </div>

  <div class="swap">
    <div class="main-image large">
      <img src="images/title.png" />
    </div>
  </div>

  <div class="swap">
    <h4 class="center-justify">Search by title and doctype: <span class="red"><strong>test.doc</strong></span></h4>
  </div>

  <div class="swap">
    <div class="main-image large">
      <img src="images/title-and-doctype.png" />
    </div>
  </div>

  <div class="swap">
    <h4 class="center-justify">Let's use keywords!</h4>
    <p class="center-justify">Search: <span class="red"><strong>SeroVital AND Memorial Day kind:doc</strong></span></p>
  </div>

  <div class="swap">
    <div class="main-image large">
      <img src="images/keywords.png" />
    </div>
  </div>

  <div class="swap">
    <p class="center-justify">Refined: <strong>SeroVital AND Memorial Day <span class="red">AND email</span> kind:doc</strong></p>
  </div>

  <div class="swap">
    <div class="main-image large">
      <img src="images/keywords-refined.png" />
    </div>
  </div>

  <div class="swap">
    <h4 class="center-justify">Now just give me the word document!</h4>
    <p class="center-justify">Only Word Doc: <strong>SeroVital AND Memorial Day AND email <span class="red">kind:word</span></strong></p>
  </div>

  <div class="swap">
    <div class="main-image large">
      <img src="images/just-word-doc.png" />
    </div>
  </div>

</div>
`
}
]
