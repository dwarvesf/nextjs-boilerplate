# Code style

The vast majority of base code style is enforced by
[ESLint](https://eslint.org/) and [Prettier](https://prettier.io/). The linter
runs in a pre-commit hook on staged files with an auto-fix flag set to address
any trivial issues.

In addition to the lint rules, please also where possible, stick to the
contribution guidelines below. These rules should be kept in mind when reviewing
Pull Requests.

## Contribution guidelines

- Code should be functional in style rather than Object Orientated or Imperitive
  unless there are no clean alternatives.

  - Use pure functions where possible to make them testable and modular.
  - Avoid mutating varibles and the `let` keyword.
  - React Components should be stateless functional components where possible.
  - Avoid classes and stateful modules where possible.
  - Don't Repeat Yourself. Make extensive use of the constants and utils files
    for re-usable strings and methods.
  - The above rules can be relaxed for test scripts.

- React components should be simple and composible and cater to real life UI
  design problems:

  - **Simplicity**: Strive to keep the component API fairly simple and show real
    world scenarios of using the component.
  - **Representational**: React components should be templates, free of logic
    and purely presentational. It aims to make our components shareable and easy
    to test.

  - **Composition**: Break down components into smaller parts with minimal props
    to keep complexity low, and compose them together. This will ensure that the
    styles and functionality are flexible and extensible.

  - **Accessibility**: When creating a component, keep accessibility top of
    mind. This includes keyboard navigation, focus management, color contrast,
    voice over, and the correct aria-\* attributes.

  - **Naming Props**: We all know naming is the hardest thing in this industry.
    Generally, ensure a prop name is indicative of what it does. Boolean props
    should be named using auxilliary verbs such as does, has, is and should. For
    example, Button uses `isDisabled`, `isLoading`, etc.

- When doing styling, strive to use `tailwindcss` classes for consitentcy and
  painless maintenance.

  - Avoid hard coding colors. All colors from the design guideline should be
    pre-defined in [`tailwind.js`](../tailwind.config.js). Please use them with
    respect.

  - Try to avoid injecting styles via `style` attribute because it's impossible
    to build responsiveness with inline styles. Strive to only use Tailwind
    classes for sizing, spacing and building grid layouts.

    ```jsx
    // Don't
    <div style={{marginLeft: '8px'}}></div

    // Do
    <div className="ml-2"></div

    // Grid layout
    <div className="grid grid-cols-3 gap-5">
      <div className="col-span-2"></div>
      <div className="col-span-1"></div>
    </div>
    ```

- Maintain the separation of concerns in the folder structure laid out in the
  initial scaffold:

  - `constants/` contains shared variables using across the app.
  - `components/` contains shared ui components using across the app.
  - `utils/` contains shared functions using across the app.
  - `hooks/` contains shared hooks using across the app.
  - `types/` contains common `TypeScript` types or interfaces.

- When adding third party libraries to the project consider carefully the
  following;

  - Is this a trivial package we can easily write in house? If so, take the time
    to roll your own.
  - Is this library well supported, under active development and widely used in
    the community? If not, do not use.
  - Do we use a similar but different library for the same task elsewhere in the
    company? If so, use this library for developer familiarity and consistency.
  - Will this library impact significantly performance or bundle size eg
    `Lodash` or `Moment`? If so, consider carefully if it is necessary or if
    there is a better alternative.

- TypeScript helps write code better but should be used with care to not lose
  its strengths:

  - Avoid using `any` when possible. Using `any` is sometimes valid, but should
    rearely be used, even if to make quicker progress. Even `Unknown` is better
    than using `any` if you aren't sure of an input parameter.
  - Pay attention when using the non-null assertion operator `!`. Only use if
    you know that a variable cannot be null right now rather than blindly using
    it to pass the validation step.

- File naming should be `PascalCase` for all React components files and
  `kebab-case` for the rest.

- Exports from files can be either as variable or default exports, but please
  stick to naming the object before using `export default` to avoid anonomous
  module names in stack traces and React dev tools.

- Your app should be fast but also remember "Premature optimization is the root
  of all evil". **If you think it’s slow, prove it with a benchmark.**, the
  profiler of
  [React Developer Tools](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi)
  (Chrome extension) is your friend! Once you find the root cause, try to follow
  the suggetions to fix it:
  - Use `useMemo` mostly just for expensive calculations.
  - Use `React.memo`, `useMemo`, and `useCallback` for reducing re-renders, they
    shouldn't have many dependencies and the dependencies should be mostly
    primitive types.
  - Make sure your `React.memo`, `useCallback` or `useMemo` is doing what you
    think it's doing (is it really preventing rerendering?).
  - Stop punching yourself every time you blink (fix slow renders before fixing
    rerenders).
  - Putting your state as close as possible to where it's being used will not
    only make your code so much easier to read but It would also make your app
    faster (state colocation).
  - `Context` should be logically separated, do not add to many values in one
    context provider. If any of the values of your context changes, all
    components consuming that context also rerenders even if those components
    don't use the specific value that was actually changed.
  - You can optimize `context` by separating the `state` and the `dispatch`
    function.
  - Know the terms
    [`lazy loading`](https://nextjs.org/docs/advanced-features/dynamic-import)
    and [`bundle/code splitting`](https://reactjs.org/docs/code-splitting.html)
  - Window large lists (with
    [`tannerlinsley/react-virtual`](https://github.com/tannerlinsley/react-virtual)
    or similar).
  - A smaller bundle size usually also means a faster app. You can visualize the
    code bundles you've generated with
    [`@next/bundle-analyzer`](https://www.npmjs.com/package/@next/bundle-analyzer).

## Read on:

- [Home](../README.md)
- [Getting started](./GETTING_STARTED.md)
- [Tech ecosystem](./TECH_ECOSYSTEM.md)
- [Writting test](./WRITING_TEST.md)
- [Editor](./EDITOR.md)
- [Deployment](./DEPLOYMENT.md)
