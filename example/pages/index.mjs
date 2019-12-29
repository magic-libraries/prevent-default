export const View = state => [
  h2(state.title),

  p([
    Link({ to: 'https://magic.github.io/core' }, '@magic'),
    '-client library:',
    ' effect that calls event.preventDefault.',
  ]),

  GitBadges('magic-libraries/prevent-default'),

  h3({ id: 'installation' }, 'installation'),
  p('@magic-libraries/prevent-default is preinstalled in all @magic apps.'),

  p('For use in other hyperapp apps:'),
  Pre('npm install --save-exact @magic-libraries/prevent-default'),

  h3({ id: 'usage' }, 'usage'),
  p('in a page/component, just use the lib.preventDefault effect'),

  Pre(`
a({
  to: '/somewhere',
  onclick: [actions.component.click, lib.preventDefault],
})

form({
  name: 'form-name',
  onsubmit: [actions.form.submit, lib.preventDefault],
})
`),

  h3({ id: 'source' }, 'source'),
  p([
    'the source for this page is in the ',
    Link(
      { to: 'https://github.com/magic-libraries/prevent-default/tree/master/example' },
      'example directory',
    ),
    ' and gets built and published to github using ',
    Link({ to: 'https://github.com/magic/core' }, '@magic/core'),
  ]),

  LightSwitch(state),
]
