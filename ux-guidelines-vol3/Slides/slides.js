const title = "UX Guidelines: Vol. 3";

const date = "5/22/2018";

const slides = [
{
"set" : 1,
"idLabel" : "Versioning",
"type" : "section",
"content" : `<h1>Versioning<br /><span class="split-line">Guidelines</span></h1>
`
}
,{
"set" : 1,
"idLabel" : "Bad-examples",
"content" : `
## Have You Ever ... ? ##

<ul>
  <li class="fade">myFile-new.psd</li>
  <li class="fade">myFile-new-new.psd</li>
  <li class="fade">myFile-final.psd</li>
  <li class="fade">myFile-new-final.psd</li>
  <li class="fade">myFile-new-new-final.psd</li>
  <li class="fade">myFile-new-new-final-final.psd</li>
  <li class="fade">myFile-new-new-final-final-revised.psd</li>
</ul>

`
}
,{
"set" : 1,
"idLabel" : "Semantic-Versioning",
"content" : `
## Solution: Semantic Versioning ##

<h3 class="center-justify">Example: __1.2.5__</h3>
<ul>
  <li class="fade">MAJOR = backwards compatible breaking</li>
  <li class="fade">MINOR = new feature</li>
  <li class="fade">PATCH = bug fixes</li>
</ul>
`
}
,{
"set" : 1,
"idLabel" : "Versioning-Design",
"deck" : 2,
"content" : `
## Semantic Versioning: Design ##

<ul>
  <li class="fade">MAJOR = new concept</li>
  <li class="fade">MINOR = revised sections of a cohesive original</li>
  <li class="fade">PATCH = minor tweeks and changes</li>
</ul>
`
}
,{
"set" : 1,
"idLabel" : "Final-Pattern",
"deck" : 3,
"content" : `
## Versioning: Final Result ##

<div class="swap-wrap">
  <h3 class="swap show center-justify">
    [nameOfFile]-[version].[extension]
  </h3>
  <h3 class="swap center-justify">
    myFile-1.0.15.psd
  </h3>
</div>
`
}
,{
"set" : 2,
"idLabel" : "Font-Stacks",
"type" : "section",
"content" : `
# Font Stacks #
`
}
,{
"set" : 2,
"idLabel" : "Our-Font-Stacks",
"content" : `
## Our Stacks ##

<div class="swap-wrap">

<div class="swap show">

- __montserrat__ = Montserrat, "Helvetica Neue", Helvetica, Arial, sans-serif
- __raleway__ = Raleway, "Helvetica Neue", Helvetica, Arial, sans-serif
- __roboto__ = Roboto, Verdana, Helvetica, sans-serif
- __lato__ = Lato, "Helvetica Neue", Helvetica, Arial, sans-serif
- __open-sans__ = "Open Sans", Verdana, Helvetica, sans-serif

</div>

<div class="swap">

- __fira-sans__ ...
- __hind__ ...
- __pt-sans__ ...
- __pt-sans-narrow__ ...
- __helvetica-neue__ ...
- __helvetica__ ...
- __play__ ...

</div>
</div>
`
}
]
