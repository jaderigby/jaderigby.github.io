const title = "Bacon Walkthrough";

const date = "2/19/2022";

const slides = [
{
"set" : 1,
"idLabel" : "Installation",
"type" : "section",
"content" : `
# Installation #
`
}
,{
"set" : 1,
"idLabel" : "Documents-Folder",
"content" : `
## Install ##

<div class="fade-sequence">
<div class="documents-folder">

>>![](images/file-folder-filled-blue.svg)<<

>>__Documents__<<

</div>
<div class="zip-file">

![](images/file-blue.svg)

</div>
<div class="repo">

![](images/file-blue.svg)

</div>
</div>
`
}
,{
"set" : 1,
"idLabel" : "Setup_Command",
"content" : `
## Setup ##

<pre>
<code class="language-markup">

python ~/Documents/bacon/setup.py --exec && cd ~/Documents/bacon && setup.py && source ~/.zshrc

</code>
</pre>


- Install
  - Documents folder
  - Zip/Clone
  - Setup Command
  - Verify

- Use
  - \`bacon new\`
  - open file
  - do your edits
  - helpers
    - run_command
    - user_input
    - user_selection
    - and More!
    - add your own
  - demo: qit all
  - utility commands:
    - triggerWord -action
    - triggerWord -profile
    - triggerWord -helpers

- Settings
  - default settings
  - Profile settings
  - bacon -profile

- Perks
  - goto and showme
  - goto bacon
  - goto qit
  - showme bits

- Speed!
  - demo qit, all the way through
  - adding a bacon utility
    - add the alias
    - add the perks
`
}
,{
"set" : 1,
"idLabel" : "Verify",
"content" : `
## Verify ##

<key-group>
<key-slot>

<div class="key-features">
<pre>
<code class="language-markup">

bacon

</code>
</pre>
</div>m

</key-slot>
<key-slot>
<div class="key-features">

<pre>
<code class="language-markup">

[ bacon new]
[ bacon set ]

</code>
</pre>

</div>
</key-slot>
</key-group>
`
}
,{
"set" : 2,
"idLabel" : "Usage",
"type" : "section",
"content" : `
# Bacon: Using It! #
`
}
,{
"set" : 2,
"idLabel" : "Using-It",
"content" : `
## How To Use It ##

<key-group>
<key-slot>
<pre>
<code class="language-markup">

bacon new

</code>
</pre>
</key-slot>
</key-group>
`
}
]
