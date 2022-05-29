# Tech ecosystem

The [GETTING_STARTED.md](./GETTING_STARTED.md) gives you adequate information on
how to install dependencies and launch the app. Once you've done that, this
document is intended to give you a taste of how an app works, and more
importantly, why we choose the technology. It still assumes basic knowledge of
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

### Next.js

Production grade React applications that scale, we list
[Next.js](https://nextjs.org/) to be the first candidate when we decide to setup
a React app. The opinionated framework gives you the best developer experience
with all the features you need for production: hybrid static & server rendering,
TypeScript support, smart bundling, route pre-fetching.

### TypeScript

We are adopting TypeScript to our codebase. Forcing to write strongly-typed
syntax while you are familiar with dynamic/multi-paradigm scripting language
like JavaScript is sometimes annoying, even for experienced developers. However,
the drawback can be outweighed by the following benefits when coming to write a
medium to large sized applications:

- [x] Catching your bugs at compile-time as you type them.
- [x] Coding confidently with autocompletion, definition jumping and source
      documentation.
- [x] Syncing API Interfaces between backend and frontend via Swagger json doc.
- [x] Relieve the pain of refactoring/renaming .

### SWR

We use [SWR](https://swr.vercel.app/) to be the main way of retrieving data in
React apps. The strategy is to first return the data from cache (stale), then
send the fetch request (revalidate), and finally, come with the up-to-date data.
With SWR, components will get a stream of data updates constantly and
automatically. And the UI will be always fast and reactive. It features:

- [x] Transport and protocol agnostic data fetching
- [x] Fast page navigation
- [x] Revalidation on focus
- [x] Interval polling
- [x] Request deduplication
- [x] Local mutation

### React Hook Forms

If you are going to use a package for your forms, we recommend
[react-hook-forms](https://github.com/react-hook-form/react-hook-form). It is a
great balance of good performance and good developer experience.

### Tailwind

We are using `tailwind` to do styling and it scales pretty well when combining
headless components and hooks to build the presentation layer. The choice was
made because it helps avoid common CSS frustrations to keep a neat codebase and
moving quickly, regardless of experience levels:

- [x] **Consistency**: utility classes help you work within the constraints of a
      system instead of littering your stylesheets with arbitrary values.
- [x] **Naming is hard**: you don't even need to use complicated namespacing
      techniques like BEM.
- [x] **Tiny production build**: automatically removes all unused CSS when
      building for production, which means your final CSS bundle is the smallest
      it could possibly be.
- [x] **Mobile-first**: throw a screen size in front of literally any utility
      class and watch it magically apply at a specific breakpoint.
- [x] **Customization**: although Tailwind includes an expertly crafted set of
      defaults out-of-the-box, but literally everything can be customized via
      JIT or `tailwind.config.js`.

## Architecture

Most of the frontend applications consist of four layers: Service connector,
State management, Logic and UI. We opinionate about the technology for each
layer with a guarantee of production readiness.

<div align="center">
    <img src="./img/architecture.png"  align="center" />
</div>

## Linting

This repo includes a complete static code analysis setup. It's composed of
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
