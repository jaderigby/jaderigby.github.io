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
- __*Keywords__ &mdash; Useful for "more" intelligent searches; unlike folders, files can be shared across multiple domains, besides just it's location

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

- A more robust indexing system
- Better reflection of reality
- Like categories, only better!
- General to Specific
- Keep specific and succinct, but use as many as are helpful
- Convention (more on that later)

  </div>
  <div class="swap">

1. __Brand__ &mdash; SeroVital, GF-9, etc
2. __Product__ &mdash; Neck Cream, etc
3. __Campaign__ &mdash; Memorial Day, etc
	- __Subcategory__ &mdash; a) Sale, b) Special, c) Limited Time
4. __Classification__ &mdash; a) Landing Page, b) Microsite, c) Full site, d) Kyno site, e) Email

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
"idLabel" : "Just-one-problem",
"deck" : 2,
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

<img style="width: 530px; margin-top: -70px;" class="image-sample" src="images/tags-on-desktop.svg" />
<h3 class="center-justify tags-title"><strong>Desktop</strong></h3>
  
  </div>
  <div class="swap switch">
  
<img class="image-sample" src="images/tags-on-ipad.svg" />
<h3 style="margin-top: 30px;" class="center-justify tags-title"><strong>Mobile</strong></h3>

  </div>
</div>

`
}
,{
"set" : 3,
"idLabel" : "Tags-metadata",
"content" : `
## Tags: They Are Metadata ##

<h3 class="center-justify fade">Metadata With Better Support!</h3>

<ul>
  <li class="fade">Desktop</li>
  <li class="fade">Mobile</li>
  <li class="fade">Portable across iCloud</li>
  <li class="fade"><strong>? = </strong> Indexing search with other's tags</li>
  <li class="fade"><strong>? = </strong> Works as long as integrity maintained</li>
</ul>
`
}
,{
  "set" : 3,
  "deck" : 2,
  "idLabel" : "Tags-replace-metadata",
  "content" : `
## Tags As Metadata ##

<div class="swap-wrap">
  <div class="swap">

- Creator
- Author (Contributor)
- Creation Date
- Modified Date
- Keywords

  </div>
  <div class="swap">

- creator:Name
- author:Name
- [Creation Date]
- [Modified Date]
- keywords = other tags

  </div>
  <div class="swap switch">

### Mobile ###

- creator/Jade
- author/Angel
- [Creation Date]
- [Modified Date]
- AHR, QC, QE, Marketing, etc

  </div>
</div>
`
}
,{
"set" : 3,
"idLabel" : "Tag-techniques",
"deck" : 3,
"content" : `
## Techniques ##

<div class="swap-wrap">
  <div class="swap wipe start">

<h3 class="center-justify aspect-high">Ctrl + Numkey</h3>
<div class="center-justify">
<img width="200" src="images/ctrl-key.svg" />
<strong class="key-combo-add">+</strong>
<img width="200" src="images/num-1-key.svg" />
</div>

  </div>
  <div class="swap wipe start">

<h3 class="center-justify aspect-high">Set Hotkey</h3>
<div class="center-justify">
<img width="200" src="images/opt-key.svg" />
<strong class="key-combo-add">+</strong>
<img width="200" src="images/cmd-key.svg" />
<strong class="key-combo-add">+</strong>
<img width="200" src="images/t-key.svg" />
</div>

  </div>
  <div class="swap wipe start">

<h3 class="aspect-high center-justify">Finder Bar</h3>
<div class="center-justify">
<img width="580" src="images/tags-in-finder-bar.png" />
</div>

  </div>
  <div class="swap wipe start">

<h3 class="aspect center-justify">Save As</h3>

  </div>
  <div class="swap wipe start">

<h3 class="aspect center-justify">Details View</h3>

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
,{
"set" : 4,
"idLabel" : "Organize-Folders",
"content" : `
# Organize Folders #

Organize folders as we see fit: General to Specific

`
}
,{
"set" : 4,
"idLabel" : "Utilize-Tags",
"content" : `
# Utilize Tags #

Similar method with folders, keywords can be a reflection of folders, but also usage.

<div class="fade">

__Example:__ email, web, ahr ...

</div>

`
}
,{
"set" : 4,
"idLabel" : "To-do",
"content" : `
# ToDo #

<div class="swap-wrap">
  <div class="swap switch">

- Explore Folder conventions
  - continue discussion

</div>
<div class="swap switch">

- Establish keyword conventions
- Utilize Creators/Authors

</div>
<div class="swap switch">

### Finally, let's demo ... ###

</div>
</div>
`
}
]
