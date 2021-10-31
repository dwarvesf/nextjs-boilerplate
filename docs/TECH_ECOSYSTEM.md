# Tech Ecosystem

The [GETTING_STARTED.md](./GETTING_STARTED.md) gives you adequate information on
how to install dependencies and launch the app. Once you've done that, this
document is intended to give you a taste of how an app works, and more
important, why we choose the technology. It still assumes basic knowledge of
React and [Next.js](https://nextjs.org/docs/getting-started). **If you're
completely new to React, please refer to https://github.com/petehunt/react-howto
instead!**

## Tech stack

### Core

- [x] [React](https://reactjs.org/)
- [x] [Next.js](https://nextjs.org/)
- [x] [SWR](https://swr.vercel.app/)
- [x] [React Hook Form](https://github.com/react-hook-form/react-hook-form)
- [x] [Dwarves React Toolkit](https://github.com/dwarvesf/react-toolkit)

### UI & styling

- [x] [Tailwindcss](https://github.com/tailwindcss/tailwindcss)
- [x] [Headless UI](https://github.com/tailwindlabs/headlessui)

### Static type checking & linting

- [x] [TypeScript](https://www.typescriptlang.org)
- [x] [ESLint](http://eslint.org/)
- [x] [Prettier](https://prettier.io/)

### Testing

- [x] [Jest](http://facebook.github.io/jest/)
- [x] [react-testing-library](https://github.com/kentcdodds/react-testing-library)
- [x] [Cypress](https://github.com/cypress-io/cypress)

## Basic Building Blocks

## Next.js

Production grade React applications that scale, we list
[Next.js](https://nextjs.org/) to be the first candidate when we decide to setup
a React app. The opinionated framework gives you the best developer experience
with all the features you need for production: hybrid static & server rendering,
TypeScript support, smart bundling, route pre-fetching.

## SWR

We use [SWR](https://swr.vercel.app/) to be the main way of retrieving data in
React apps. The strategy is to first return the data from cache (stale), then
send the fetch request (revalidate), and finally come with the up-to-date data.
With SWR, components will get a stream of data updates constantly and
automatically. And the UI will be always fast and reactive. It features:

- [x] Transport and protocol agnostic data fetching
- [x] Fast page navigation
- [x] Revalidation on focus
- [x] Interval polling
- [x] Request deduplication
- [x] Local mutation

### TypeScript

We are adopting TypeScript to our code base. Forcing to write strongly-typed
syntax while you are familiar with dynamic/multi-paradigm scripting language
like JavaScript is sometimes annoying, even for experienced developers. However,
the drawback can be outweighted by following benefits when coming to write a
medium to large sized applications:

- [x] Catching your bugs at compile-time as you type them.
- [x] Coding confidently with autocompletion, definition jumping and source
      documentation.
- [x] Syncing API Interfaces between backend and frontend via Swagger json doc.
- [x] Relieve the pain of refactoring/renaming .

## Styling

We are using `tailwind` to do styling. The choice was made because it Avoid
common CSS frustrations to keep a neat codebase and moving quickly, regardless
of experience levels.

- [x] **Separation of concern**: build completely custom designs without ever
      leaving your JSX.
- [x] **Naming is hard**: you don't even need to use complicated namespacing
      techniques like BEM.
- [x] **Composable**: extending one block of style from another or mixing
      tailwind classes with styled-components via macro.
- [x] **Load on demand**: combined with code-splitting, styles will only be
      injected in use.
- [x] **Simple dynamic styling**: adapting the styling of a component based on
      its props is simple and intuitive without having to manually manage dozens
      of classes.
- [x] **No dead code**: add, change and delete CSS without any unexpected
      consequences and avoid dead code.

## Code splitting

Modern sites often combine all of their JavaScript into a single, large bundle.
When JavaScript is served this way, loading performance suffers. Large amounts
of JavaScript can also tie up the main thread, delaying interactivity. This is
especially true of devices with less memory and processing power especially in
routing rich applications like ours. To address the issue, we adopt
code-splitting in order to split one large bundle into smaller chunks. While the
main is loaded upfront, the rest can be loaded on demand. If you are unsure
where to begin to applying code-splitting to our applications, follow these
steps:

- Begin at route level. Routes are the simplest way to identify points of your
  application that can be split. Use React
  [`suspend`](https://reactjs.org/docs/code-splitting.html#route-based-code-splitting)
  to load the page chunk when needed.
- Use
  [`dynamic import`](https://webpack.js.org/guides/code-splitting/#dynamic-imports)
  to split any large module if that is offscreen and not critical for the user
  (like parts only rendered on certain user interactions like clicking a
  button).
- When using large libary like `lodash` or `validator`, use
  [`babel-plugin-import`](https://github.com/ant-design/babel-plugin-import) to
  avoid pulling in unused modules while maintaining best Developer Experience.

## Linting

This monorepo includes a complete static code analysis setup. It's composed of
[ESLint](http://eslint.org/) and [Prettier](https://prettier.io/).

We recommend that you install the relevant IDE extensions for each one of these
tools. Once you do, every time you'll press save, all your code will be
formatted and reviewed for quality automatically. (Read more at
[EDITOR.md](./EDITOR.md).)

We've also set up a git hook to automatically analyze and fix linting errors
before your code is committed. If you'd like to disable it or modify its
behavior, take a look at the `lint-staged` section in `package.json`.

## Read on:

- [Home](../README.md)
- [Getting started](./GETTING_STARTED.md)
- [Code style](./CODE_STYLE.md)
- [Editor](./EDITOR.md)
- [Writting test](./WRITING_TEST.md)
- [Deployment](./DEPLOYMENT.md)
