# ${state.title}

[@magic](https://magic.github.io/core)-client library:
effect that calls event.preventDefault

<GitBadges>magic-libraries/prevent-default</GitBadges>

<h3 id="installation">installation</h3>

@magic-libraries/prevent-default is preinstalled in all @magic apps.

For use in other hyperapp apps:

<Pre>npm install --save-exact @magic-libraries/prevent-default</Pre>

<h3 id="usage">usage</h3>

in a page/component, just use the lib.preventDefault effect

<Pre>
&lt;a
  href="/somewhere/"
  onclick="[actions.go, lib.preventDefault]">
&lt;/a>

&lt;form
  name="form-name"
  onsubmit="[actions.form.submit, lib.preventDefault]">
&lt;/form>
</Pre>

<h3 id="source">source</h3>

the source for this page is in the
[example directory](https://github.com/magic-libraries/prevent-default/tree/master/example)
and gets built and published to github using
[@magic/core](https://github.com/magic/core)
