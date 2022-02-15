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

<key-group switch>
<key-slot show>

#### >>__Problem:__  We Need Organization To Help Us Find Files!<< ####

</key-slot>
<key-slot>

#### __Proposed Solution:__ Organize it into folders based on: ####

1. Group
2. I &gt; Product
3. II &gt; Project/Bucket
4. III &gt; File Collection

</key-slot>
<key-slot>

### >>__Unreliable Patterns!__<< ###

</key-slot>
<key-slot>

<h3 style="margin-top: 60px;" class="center-justify">Besides reliability, there is another problem!</h3>

</key-slot>
</key-group>

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
<div class="folder-quandry folder-list fade-set" style="font-size: 2.8rem;">

- Angel = __UX__
- Jon = __Web__
- Oliver = __Booth__

</div>
</div>
<div class="cell">
<img style="left: 0; right: 0; width: 430px; margin: -50px auto 0; display: block" src="images/file-blue-gradient.svg" />
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
<div class="cell folder-list fade-set">

![](images/file-folder-filled-blue-thumb.svg)__PL - UI/UX__

![](images/file-folder-filled-blue-thumb.svg)__Copy to Web__

![](images/file-folder-filled-blue-thumb.svg)__Oliver__ &mdash; __Jon's__

  </div>
<div class="cell">
<img style="left: 0; right: 0; width: 430px; margin: -50px auto 0; display: block" src="images/file-blue-gradient.svg" />
</div>
</div>
`}
,{
"set" : 1,
"idLabel" : "What-about-metadata",
"content" : `
## ... Question? ##

<key-group switch>
<key-slot>

### >>__What about Metadata?__<< ###

</key-slot>
</key-group>

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

<key-group switch>
<key-slot>

> Structured information that describes, explains, locates, or otherwise makes it easier to retrieve, use or manage an information resource.
<cite>&mdash; Wikipedia</cite>

In short, it is data about a file regarding its author, date, and other useful information.

</key-slot>
<key-slot>

<div class="wrap">

Often times, we rely on file names and folder structure to organize our files, and consider metadata "extra work".  

But in reality, metadata can be even more valuable in maintaining and retrieving files than the folder structure that we contain them in.

</div>

</key-slot>
<key-slot>

- Most files contain metadata
- Metadata varies from file type to file type
- PSDs contain metadata
- Word docs do, as well

</key-slot>
</key-group>
`
}
,{
"set" : 2,
"idLabel" : "Metadata-Our-Main-Focus",
"content" : `
## Metadata: Our Main Focus ##

<key-group>
<key-slot>

Though metadata varies from file type to file type, they typically <br />include the following:

<div class="segment half">
<div class="cell">

- Creation Date
- Modified Date
- Author

</div>
<div class="cell">

- Subject
- Keywords
- Comments

</div>
</div>
</key-slot>
<key-slot>

<div class="key-premise center-justify">4</div>
    
#### >>Most Important Metadata To Us:<< ####

<div class="key-features">

1. Creation Date
2. Modified Date
3. Author
4. Keywords

</div>

</key-slot>
<key-slot>

- __Creation Date__ &mdash; Gives us the first view into the creation timeline
- __Modified Date__ &mdash; Gives a sense of relevancy
- __Author__ &mdash; Ownership: Who to ask questions
- __*Keywords__ &mdash; Useful for "more" intelligent searches; unlike folders, files can be shared across multiple domains, besides just it's location

</key-slot>
</key-group>
`
}
,{
"set" : 2,
"idLabel" : "Metadata-Kewords",
"content" : `
## Metadata: Keywords ##

<key-group>
<key-slot>

- A more robust indexing system
- Better reflection of reality
- Like categories, only better!
- General to Specific
- Keep specific and succinct, but use as many as are helpful
- Convention (more on that later)

</key-slot>
<key-slot>

1. __Brand__ &mdash; SeroVital, GF-9, etc
2. __Product__ &mdash; Neck Cream, etc
3. __Campaign__ &mdash; Memorial Day, etc
	- __Subcategory__ &mdash; a) Sale, b) Special, c) Limited Time
4. __Classification__ &mdash; a) Landing Page, b) Microsite, c) Full site, d) Kyno site, e) Email

</key-slot>
<key-slot>

We can continue to refine our conventions, as we see fit.

__Our main goal is retrieving assets without any wasted time whatsoever: To be able to get what we want, and go to work!__

</key-slot>
</key-group>
`
}
,{
"set" : 2,
"idLabel" : "Just-one-problem",
"deck" : 2,
"content" : `
## Metadata: Just One Problem! ##

<key-group switch>
<key-slot show>

- Metadata is not handled the same way by all file types.
- Nor is it indexed for search &ndash; for all file types &ndash; on Macs.

</key-slot>
<key-slot>

### >>Apple wants you to use __TAGS__<< ###

</key-slot>
</key-group>
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

<key-group switch>
<key-slot>
  
### >>Reiterate: Apple wants you to use Tags<< ###
  
</key-slot>
<key-slot>

<img style="width: 530px; margin-top: -70px;" class="image-sample" src="images/tags-on-desktop.svg" />
<h3 class="center-justify tags-title"><strong>Desktop</strong></h3>
  
</key-slot>
<key-slot>
  
<img class="image-sample" src="images/tags-on-ipad.svg" />
<h3 style="margin-top: 30px;" class="center-justify tags-title"><strong>Mobile</strong></h3>

</key-slot>
</key-group>
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

<key-group>
<key-slot>

- Creator
- Author (Contributor)
- Creation Date
- Modified Date
- Keywords

</key-slot>
<key-slot>

- creator:Name
- author:Name
- [Creation Date]
- [Modified Date]
- keywords = other tags

</key-slot>
<key-slot>

<div class="segment half">
<div class="cell">

- creator/Jade
- author/Angel
- [Creation Date]
- [Modified Date]
- AHR, QC, QE, Marketing, etc

</div>
<div class="cell">
<img src="images/iPad.svg" />
</div>
</div>

</key-slot>
</key-group>
`
}
,{
"set" : 3,
"idLabel" : "Tag-techniques",
"deck" : 3,
"content" : `
## Techniques ##

<key-group wipe>
<key-slot>

<h3 class="center-justify aspect-high">Ctrl + Numkey</h3>
<div class="center-justify">
<img width="200" src="images/ctrl-key.svg" />
<strong class="key-combo-add">+</strong>
<img width="200" src="images/num-1-key.svg" />
</div>

</key-slot>
<key-slot>

<h3 class="center-justify aspect-high">Set Hotkey</h3>
<div class="center-justify">
<img width="200" src="images/opt-key.svg" />
<strong class="key-combo-add">+</strong>
<img width="200" src="images/cmd-key.svg" />
<strong class="key-combo-add">+</strong>
<img width="200" src="images/t-key.svg" />
</div>

</key-slot>
<key-slot>

<h3 class="aspect-up-high center-justify">Finder Bar</h3>
<div class="center-justify">
<img width="580" src="images/tags-in-finder-bar.png" />
</div>

</key-slot>
<key-slot>

<h3 class="aspect-up-high center-justify">Save As</h3>
<div class="center-justify">
<img width="580" src="images/tags-in-save-as.png" />
</div>

</key-slot>
<key-slot>

<h3 class="aspect-up-high center-justify">Finder Details</h3>

>><img width="300" src="images/tags-in-details.png" /><<

</key-slot>
</key-group>
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

>>__&mdash; Example:__ email, web, ahr ...<<

</div>

`
}
,{
"set" : 4,
"idLabel" : "To-do",
"content" : `
# ToDo #

<key-group switch>
<key-slot>

<div class="key-features">

- Explore Folder conventions
  - continue discussion

</div>

</key-slot>
<key-slot>

<div class="key-features">

- Establish keyword conventions
- Utilize Creators/Authors

</div>

</key-slot>
<key-slot>

<div class="key-features">

### Finally, let's demo ... ###

</div>

</key-slot>
</key-group>
`
}
]
