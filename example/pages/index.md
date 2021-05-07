# ${title}

[@magic](https://magic.github.io/core/)-client library:

${description}

<GitBadges>@magic-libraries/prevent-default</GitBadges>

### installation

@magic-libraries/prevent-default is preinstalled in all @magic apps.

For use in other hyperapp apps:

`npm install --save-exact @magic-libraries/prevent-default`

### usage

in a page/component, just use the lib.preventDefault effect

```
&lt;a
  href="/somewhere/"
  onclick="[actions.go, lib.preventDefault]">
&lt;/a>

&lt;form
  name="form-name"
  onsubmit="[actions.form.submit, lib.preventDefault]">
&lt;/form>
```

### source

the source for this page is in the
[example directory](https://github.com/magic-libraries/prevent-default/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
