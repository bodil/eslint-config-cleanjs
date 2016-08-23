# eslint-config-cleanjs

This is an ESLint configuration which aims to restrict you to a subset
of JavaScript which would be as close to an idealised pure functional
language as possible. The idea is to see if it's possible to banish
all the Bad Parts (well, except for the single numeric type being IEEE
754 floating point) and leave a language without the design flaws
which have plagued JS from the start, and which aren't easy to design
out of the language without becoming a subset of itself.

Highlights:

* no `this` and no classes
* no `null` and `undefined` (implying that all functions must `return`)
* no mutation of any kind
* no variable reassignment
* no statements, only expressions (including no `if`)

This is all based on two ESLint plugins, which you'll have to install
to use these presets:

* [eslint-plugin-better](https://github.com/idmitriev/eslint-plugin-better)
* [eslint-plugin-immutable](https://github.com/jhusain/eslint-plugin-immutable)

## Usage

Just install this package somewhere your eslint can find it (`npm
install -g eslint-config-cleanjs` if your eslint is installed with
`-g` too), along with the two above mentioned plugins (`npm install -g
eslint-plugin-better eslint-plugin-immutable`), and put this in your
`.eslintrc` or wherever you keep your project's eslint config:

```
{
  "extends": "cleanjs"
}
```
