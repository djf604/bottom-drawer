A [Polymer][1] component for a resizable fixed bottom drawer, inspired by the reply composer from [Discourse][2].

```
<bottom-drawer>
  <some-form></some-form>
</bottom-drawer>
```

Demo: [http://shmay.github.io/bottom-drawer/](http://shmay.github.io/bottom-drawer/)

Calling `open(300)` will open the drawer with a height of 300px; if height is not passed in, then it will open to the size of the content

Call `close()` to close it.

Need to set up a component page for this...

To run locally:

* clone the repo in an empty directory (see next bullet for reasons) & cd into it
* run `bower install` (will install all packages in the parent directory!)
* ` cd ..` then `python -m SimpleHTTPServer` and navigate to dir

[1]: https://www.polymer-project.org/
[2]: http://try.discourse.org/
