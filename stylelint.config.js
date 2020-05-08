'use strict'

module.exports = {
  'extends': 'stylelint-config-standard',
  'plugins': ['stylelint-order'],
  'rules': {
    'at-rule-no-unknown': [
      true, {
        'ignoreAtRules': [
          'each',
          'for',
          'function',
          'if',
          'include',
          'mixin',
          'return',
          'warn',
        ]
      }
    ],
    'no-descending-specificity': null,
    'number-leading-zero': 'never',
    'order/properties-alphabetical-order': true,
    'selector-class-pattern': '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',  // Kebab-case.
    'selector-max-id': 0,
    'selector-type-no-unknown': [true, {'ignore': ['custom-elements']}],
  },
}
