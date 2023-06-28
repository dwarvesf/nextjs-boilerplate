# Deployment

We use [https://netlify.com](Netlify) for Continuous Deployment at the moment
but you can choose another service for deployment. Just make sure you set up the
right build command and the correct path to app bundles.

## Main App

- Build command: `pnpm build`
- Publish directory: `out`

## Document UI

- Build command: `pnpm build-storybook`
- Pulish directory: `storybook-static`

## Read on:

- [Home](../README.md)
- [Getting started](./GETTING_STARTED.md)
- [Tech ecosystem](./TECH_ECOSYSTEM.md)
- [Code style](./CODE_STYLE.md)
- [Writting test](./WRITING_TEST.md)
- [Editor](./EDITOR.md)
