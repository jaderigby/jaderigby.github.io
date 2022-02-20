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

<div class="lang-html">

python ~/Documents/bacon/setup.py --exec && cd ~/Documents/bacon && setup.py && source ~/.zshrc

</div>


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

<div class="lang-html">

bacon

</div>

</key-slot>
<key-slot>



</key-slot>
</key-group>
`
}
]
