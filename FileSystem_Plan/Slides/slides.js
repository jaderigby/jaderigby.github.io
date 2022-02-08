const title = "FileSystem Planning";

const date = "2/7/2022";

const slides = [
{
"set" : 1,
"idLabel" : "Structures",
"type" : "section",
"content" : `
# Structures #
`
}
,{
"set" : 1,
"idLabel" : "Folder-Grouping",
"content" : `
## Folder Grouping ##

<div class="swap-wrap">
  <div class="swap switch show">

<div class="center-justify">
  <h4><strong>Problem:</strong>  We Need Organization To Help Us Find Files!</h4>
</div>

  </div>
  <div class="swap switch">

#### __Proposed Solution:__ Organize it into folders based on: ####

1. Group
2. I &gt; Product
3. II &gt; Project/Bucket
4. III &gt; File Collection

  </div>
  <div class="swap switch">

<h3 class="center-justify"><strong>Unreliable Patterns!</strong></h3>

  </div>
  <div class="swap switch">
    <h3 style="margin-top: 60px;" class="center-justify">Besides reliability, there is another problem!</div>
  </div>
</div>

`
}
,{
  "set" : 1,
  "idLabel" : "Filing-Example",
  "deck" : 2,
  "content" : `
  ## Filing Example ##

<div class="segment half">
  <div class="cell">
    <ul style="font-size: 2.8rem;">
      <li class="fade">Angel = <strong>UX</strong></li>
      <li class="fade">Jon = <strong>Web</strong></li>
      <li class="fade">Oliver = <strong>Booth</strong></li>
    </ul>
  </div>
  <div class="cell">
    <img style="left: 0; right: 0; width: 430px; margin: -50px auto 0; display: block" src="images/file-example-blue.svg" />
  </div>
</div>
  `
}
,{
  "set" : 1,
  "idLabel" : "Filing-Example-Dilema",
  "deck" : 3,
  "content" : `
## Filing Dilema ##

<div class="segment half">
  <div class="cell">
    <ul style="font-size: 2.7rem;">
      <li class="fade"><img class="list-folder-image" src="images/file-folder-filled-blue.svg" /><strong>PL - UI/UX</strong></li>
      <li class="fade"><img class="list-folder-image" src="images/file-folder-filled-blue.svg" /><strong>Copy to Web</strong></li>
      <li class="fade"><img class="list-folder-image" src="images/file-folder-filled-blue.svg" /><strong>Oliver</strong> &mdash; <strong>Jon's</strong></li>
    </ul>  
  </div>
  <div class="cell">
    <img style="left: 0; right: 0; width: 430px; margin: -50px auto 0; display: block" src="images/file-example-blue.svg" />
  </div>
</div>
`}
,{
"set" : 1,
"idLabel" : "What-about-metadata",
"content" : `
## ... Question? ##

<h3 class="center-justify fade"><strong>What about Metadata?</strong></h3>

`
}
,{
"set" : 2,
"idLabel" : "Metadata",
"type" : "section",
"content" : `
# Metadata #
`
}
,{
"set" : 2,
"idLabel" : "Metadata-Intro",
"content" : `
## Metadata: What Is It? ##

<div class="swap-wrap">
  <div class="swap switch">

> Structured information that describes, explains, locates, or otherwise makes it easier to retrieve, use or manage an information resource.
<cite>&mdash; Wikipedia</cite>

In short, it is data about a file regarding its author, date, and other useful information.

  </div>
  <div class="swap switch">
<div style="padding: 0 35px">

Often times, we rely on file names and folder structure to organize our files, and consider metadata "extra work".  

But in reality, metadata can be even more valuable in maintaining and retrieving files than the folder structure that we contain them in.

</div>
  </div>
  <div class="swap switch">

- Most files contain metadata
- Metadata varies from file type to file type
- PSDs contain metadata
- Word docs do, as well

  </div>
</div>
`
}
,{
"set" : 2,
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
"set" : 2,
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
	- __Subcategory__ &mdash; a) Sale, b) Special, c) Limited Time
4. __Classification__ &mdash; a) Landing Page, b) Microsite, c) Full site, d) Kyno site, e) Email

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
"set" : 2,
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

#### Other Possible Kinds: ####

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
"set" : 2,
"idLabel" : "Metadata-Search-Demonstration",
"deck" : 3,
"content" : `
## Metadata: Search Demo ##

<div class="swap-wrap">

  <div class="swap switch show">
    <h3 class="center-justify">Goal:</h3>
    <h4 class="center-justify">Find original document for = SeroVital Neck Cream Content, Memorial Day Sale Email</h4>
  </div>

  <div class="swap switch">
    <div class="main-image large">
      <img src="images/files2.png" />
    </div>
  </div>

  <div class="swap switch">
    <h4 class="center-justify">Search by title: <span class="red"><strong>SeroVital</strong></span></h4>
  </div>

  <div class="swap switch">
    <div class="main-image large">
      <img src="images/title2.png" />
    </div>
  </div>

  <div class="swap switch">
    <h4 class="center-justify">Search by title and doctype: <span class="red"><strong>SeroVital.doc</strong></span></h4>
  </div>

  <div class="swap switch">
    <div class="main-image large">
      <img src="images/title-and-doctype2.png" />
    </div>
  </div>

  <div class="swap switch">
    <h4 class="center-justify">Let's use keywords!</h4>
    <p class="center-justify">Search: <span class="red"><strong>SeroVital AND Memorial Day kind:doc</strong></span></p>
  </div>

  <div class="swap switch">
    <div class="main-image large">
      <img src="images/keywords2.png" />
    </div>
  </div>

  <div class="swap switch">
    <p class="center-justify">Refined: <strong>SeroVital AND Memorial Day <span class="red">AND email</span> kind:doc</strong></p>
  </div>

  <div class="swap switch">
    <div class="main-image large">
      <img src="images/keywords-refined2.png" />
    </div>
  </div>

  <div class="swap switch">
    <h4 class="center-justify">Now just give me the word document!</h4>
    <p class="center-justify">Only Word Doc: <strong>SeroVital AND Memorial Day AND email <span class="red">kind:word</span></strong></p>
  </div>

  <div class="swap switch">
    <div class="main-image large">
      <img src="images/just-word-doc2.png" />
    </div>
  </div>

</div>
`
}
,{
"set" : 2,
"idLabel" : "Just-one-problem",
"deck" : 4,
"content" : `
## Metadata: Just One Problem! ##

<div class="swap-wrap">
  <div class="swap switch show">

- Metadata is not handled the same way by all file types.
- Nor is it indexed for search &ndash; for all file types &ndash; on Macs.

  </div>
  <div class="swap switch">

<h3 class="center-justify">Apple wants you to use <strong>TAGS</strong></h3>

  </div>
</div>
`
}
,{
"set" : 3,
"idLabel" : "Tags",
"type" : "section",
"content" : `
# Tagalicious #
`
}
,{
"set" : 3,
"idLabel" : "Tags-use-them",
"content" : `
## Tag: You're It! ##

<div class="swap-wrap">
  <div class="swap switch">
  
<h3 class="center-justify">Reiterate: Apple wants you to use Tags</h3>
  
  </div>
  <div class="swap switch">

<img src="images/tags-on-desktop.svg" />
  
  </div>
  <div class="swap switch">
  
<img src="images/tags-on-ipad.svg" />

  </div>
</div>

`
}
,{
"set" : 3,
"idLabel" : "Tags-metadata",
"content" : `
## Tags: They Are Metadata ##

<div class="swap-wrap">
  <div class="swap switch">
  
<h3 class="center-justify">Extended Attributes, or "xattr"</h3>
  
  </div>
  <div class="swap switch"> 

<h3 class="center-justify">Better Support</h3>

<ul>
  <li class="fade">iCloud</li>
  <li class="fade">Mobile</li>
</ul>
  
  </div>
</div>
`
}
,{
"set" : 4,
"idLabel" : "Conclusion",
"type" : "section",
"content" : `
# Conclusion #
`
}
]
