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
<pre>
<code class="language-markup">

... Documents % bacon
</code>
</pre>
</key-slot>
<key-slot>
<pre class="push-up">
<code class="language-markup">

[ bacon new]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Create a new item
[ bacon alias ]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adds aliases to .baconrc file
[ bacon perks ]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Adds to the goto and showme ...
[ bacon set ]&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Re-sources .baconrc file, making ...
<br />
Features Available Within Each Utility:
...
</code>
</pre>
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

... Documents % bacon new
</code>
</pre>
</key-slot>
<key-slot>
<pre>
<code class="language-markup">

Give your tool a name [Eg: BaconUtil]: QuickGit
</code>
</pre>
</key-slot>
<key-slot>
<pre>
<code class="language-markup">

Give your tool a name [Eg: BaconUtil]: QuickGit
<br />
What would you like the alias to be? qit
</code>
</pre>
</key-slot>
<key-slot>
<pre>
<code class="language-markup">

NAME:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;QuickGit
ALIAS:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;qit
LOCATION:&nbsp;&nbsp;&nbsp;&nbsp;.../Documents/bacon-bits/QuickGit
</code>
</pre>
</key-slot>
<key-slot>
<pre>
<code class="language-markup">

... Documents % bacon set
</code>
</pre>
</key-slot>
<key-slot>
<pre>
<code class="language-markup">

... Documents % qit
<br />
QuickGit is working successfully!
<br />
... Documents % 
</code>
</pre>
</key-slot>
</key-group>
`
}
,{
"set" : 2,
"idLabel" : "Adding-an-action",
"content" : `
## Adding Actions ##

<key-group>
<key-slot>
<pre>
<code class="language-markup">

... Documents % qit -action
</code>
</pre>
</key-slot>
<key-slot>
<pre>
<code class="language-markup">

-- New Action --
Please give your new action a name [Eg: OpenFile]: CommitAll
</code>
</pre>
</key-slot>
<key-slot>
<pre>
<code class="language-markup">

-- New Action --
Please give your new action a name [Eg: OpenFile]: CommitAll

What would you like to call the action? all
</code>
</pre>
</key-slot>
<key-slot>
<pre>
<code class="language-markup">

NAME:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;QuickGit
NEW MODULE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;CommitAll
NEW ACTION:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;all
LOCATION:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.../Documents/bacon-bits/Test2/CommitAll.py
</code>
</pre>
</key-slot>
<key-slot>
<div class="demo-action-file">

CommitAll.py

</div>

<pre>
<code class="language-markup">

import messages as msg
import helpers
<br />
&#35; settings = helpers.get_settings()

def execute():
&nbsp;&nbsp;&nbsp;&nbsp;msg.example()
</code>
</pre>
</key-slot>
<key-slot>
<pre>
<code class="language-markup">

... Documents % qit all
<br />
process working!
<br />
... Documents % 
</code>
</pre>
</key-slot>
</key-group>
`
}
,{
"set" : 2,
"idLabel" : "Editing",
"deck" : 2,
"content" : `
## Adding Stuff ##

<key-group>
<key-slot>

- stage all
- commit w/ message
- push

</key-slot>
<key-slot>
<div class="demo-action-file">

CommitAll.py

</div>

<pre>
<code class="language-markup">

def execute():
&nbsp;&nbsp;&nbsp;&nbsp;helpers.run_command('git add -A')
</code>
</pre>
</key-slot>
<key-slot>
<div class="demo-action-file">

CommitAll.py

</div>

<pre>
<code class="language-markup">

def execute():
&nbsp;&nbsp;&nbsp;&nbsp;helpers.run_command('git add -A')
&nbsp;&nbsp;&nbsp;&nbsp;commitMessage = helpers.user_input('Commit Message: ')
</code>
</pre>
</key-slot>
<key-slot>
<div class="demo-action-file">

CommitAll.py

</div>

<pre>
<code class="language-markup">

def execute():
&nbsp;&nbsp;&nbsp;&nbsp;helpers.run_command('git add -A')
&nbsp;&nbsp;&nbsp;&nbsp;commitMessage = helpers.user_input('Commit Message: ')
&nbsp;&nbsp;&nbsp;&nbsp;helpers.run_command('git commit -m {}'.format(commitMessage))
</code>
</pre>
</key-slot>
<key-slot>
<div class="demo-action-file">

CommitAll.py

</div>

<pre>
<code class="language-markup">

def execute():
&nbsp;&nbsp;&nbsp;&nbsp;helpers.run_command('git add -A')
&nbsp;&nbsp;&nbsp;&nbsp;commitMessage = helpers.user_input('Commit Message: ')
&nbsp;&nbsp;&nbsp;&nbsp;helpers.run_command('git commit -m {}'.format(commitMessage))
&nbsp;&nbsp;&nbsp;&nbsp;commitMessage = helpers.run_command('git push')
</code>
</pre>
</key-slot>
</key-group>
`
}
,{
"set" : 2,
"idLabel" : "Helpers",
"content" : `
## Helpers ##

<div class="slide-sequence">

- run_command()
- run_command_output()
- user_input()
- user_selection()
- and More!
- Add your own

</div>
`
}
,{
"set" : 2,
"idLabel" : "Helpers-Examples",
"content" : `
## Examples ##

<div class="examples-placement">
<key-group wipe>
<key-slot>

### >>helpers.run_command()<< ###

</key-slot>
<key-slot>
<div class="key-features">

helpers.run_command('cd ~/Documents && mkdir Example')

</div>
</key-slot>
<key-slot>
<div class="key-features up-high medium">

>>![](images/file-folder-filled-blue.svg)<<
#### >>__Example__<< ####

</div>
</key-slot>
<key-slot>

### >>helpers.user_input()<< ###

</key-slot>
<key-slot>
<div class="key-features">

compName = helpers.user_input('Name your component: ')

</div>
</key-slot>
<key-slot>

### >>helpers.user_selection()<< ###

</key-slot>
<key-slot>
<div class="key-features">

selection = helpers.user_selection("Selection: ", branchList)

</div>
</key-slot>
<key-slot>
<pre class="push-up">
<code class="language-markup">

[1] feature/sidebar
[2] feature/breadcrumbs
[3] feature/navigation
[4] feature/modals
[5] feature/buttons
<br />
Selection: 
</code>
</pre>
</key-slot>
</key-group>
</div>
`
}
,{
"set" : 2,
"idLabel" : "Utility-Commands",
"content" : `
## Utility Commands ##

<div class="key-features bigger">
<div class="slide-sequence">

-action

-profile

-helpers

</div>
</div>

`
}
,{
"set" : 2,
"idLabel" : "Commands-In-Detail",
"deck" : 2,
"content" : `
## Commands In Detail ##

<div class="examples-placement">
<key-group wipe>
<key-slot>

### >>__-action__<< ###

</key-slot>
<key-slot>
<div class="key-features up-high">

This adds a new action to your utility.  Doing <code>triggerWord -action args:true</code> adds an action that will accept key:value pairs as additional arguments, such as <code>qit branch goto:6</code>

</div>
</key-slot>
<key-slot>

### >>__-profile__<< ###

</key-slot>
<key-slot>
<div class="key-features up-high">

This adds a profile file to your utility.  More specifically, it first creates a profiles folder, then adds a profile file to it.  This gives the ability to set local settings.  More on this later.

</div>
</key-slot>
<key-slot>

### >>__-helpers__<< ###

</key-slot>
<key-slot>
<div class="key-features up-high">

Refreshes your default helpers with the latest pulled from the __bacon__ repo. Requires the __bacon__ repo be up to date. This is an added reason to clone the __bacon__ repo, rather than download the zip file.

</div>
</key-slot>
</key-group>
</div>
`
}
,{
"set" : 3,
"idLabel" : "Settings",
"type" : "section",
"content" : `
# Settings #

`
}
,{
"set" : 3,
"idLabel" : "Default-Settings",
"content" : `
## Default Settings ##

<div class="push-down larger-text">
<div class="wipe-sequence">

>>__settings.py__<<

>>__profile.py__<<

</div>
</div>
`
}
,{
"set" : 3,
"idLabel" : "General-setting",
"deck" : 2,
"content" : `
## General Settings ##

<key-group wipe>
<key-slot>

### >>__settings.py__<< ###

<div class="key-features">

- general settings
- shared universally
- generally untouched

</div>
</key-slot>
<key-slot>

### >>__profile.py__<< ###

<div class="key-features">

- located at <code>profiles/profile.py</code>
- overrides <code>settings.py</code>
- generally used the most

</div>
</key-slot>
</key-group>
</div>
</div>
`
}
,{
"set" : 3,
"idLabel" : "Settings-Configuration",
"content" : `
## Configuration ##

<key-group>
<key-slot>
<pre>
<code class="language-markup">

{
&nbsp;&nbsp;&nbsp;&nbsp;"settings" : {
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"perks" : "True"
&nbsp;&nbsp;&nbsp;&nbsp;{
}
</code>
</pre>
</key-slot>
<key-slot>
<pre>
<code class="language-markup">

{
&nbsp;&nbsp;&nbsp;&nbsp;"settings" : {

&nbsp;&nbsp;&nbsp;&nbsp;{
}
</code>
</pre>
</key-slot>
<key-group>
`
}
]
