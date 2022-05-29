# Setting up your editor

You can edit the Project using any editor or IDE, but there are a few extra
steps that you can take to make sure your coding experience is as good as it can
be.

## VS Code

There are a couple of plugins that we recommend you install to speed up your
development workflow:

- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode):
  Opinionated code formatter enforces a consistent styles.
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint):
  Statically analyzes JavaScript code to quickly find problems.
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss):
  Intelligent [Tailwind CSS](https://tailwindcss.com/) tooling.

### ESLint + Prettier integration

You can also get VSCode to understand your project's static code analysis setup.
If you do this:

- You'll see any warnings or errors directly within VSCode
- VSCode can also automatically fix or format your code for you

To make this happen, install both the ESLint and Prettier extensions for VSCode
and add the following to either your User or Workspace Settings:

```json
{
  "editor.formatOnSave": true,
  "prettier.eslintIntegration": false,
  "javascript.validate.enable": false,
  "eslint.run": "onSave"
}
```

Otherwise, you can use the comment to tell eslint to skip the fix
`// eslint-disable-line`

## Read on:

- [Home](../README.md)
- [Getting started](./GETTING_STARTED.md)
- [Tech ecosystem](./TECH_ECOSYSTEM.md)
- [Code style](./CODE_STYLE.md)
- [Writting test](./WRITING_TEST.md)
- [Deployment](./DEPLOYMENT.md)
