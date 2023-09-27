# Getting started

Install dependencies with `pnpm`:

```bash
pnpm install
```

Then, you can run locally in development mode with live reload:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your favorite browser
to see your project.

## Code organization

```
.
├── README.md                    # README file
├── next.config.js               # Next JS configuration
├── public                       # Public folder
│   └── img                      # Images used by the app
├── types                        # Shared TypeScript interfaces
├── api                          # Generated API interfaces from Swagger
├── components                   # Shared components
│   └── X
│       └── X.tsx
│       └── index.ts
│       └── X.stories.tsx
│       └── X.test.tsx
│── pages                        # Next JS pages
├── context                      # Shared context state
├── constants                    # Shared constants
├── hooks                        # Shared hooks
│   └── tests
│── styles                       # PostCSS style folder with Tailwind
│   └── vendor                   # Third-party CSS
│── utils                        # Utility folder
│   └── tests
│── cypress                      # Cypress configuration and tests
├── tailwind.config.js           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
├── .spectral.js                 # IBM OpenAPI Ruleset for Orval used on validating the rules for Swagger
└── orval.config.js              # Orval api generator configuration
```

### Develop UI components

The project integrates [Storybook](https://storybook.js.org/) to streamline UI
development.

```bash
pnpm storybook
```

The UI document then should be live at
[http://localhost:6006](http://localhost:6006).

### TypeScript API generator

If your team use Swagger to document APIs, we support a node script to generate
TypeScript interfaces via your Swagger scheme. In
[orval.config.js](../orval.config.js), change the default path to the location
of your Swagger JSON doc.

```diff
input: {
-  target: 'https://demo-api.dwarvesf.com/swagger/doc.json',
+  target: 'your-api-swagger-json',
  ...
}
```

Then, you can run the script locally to generate TypeScript definitions for the
APIs:

```bash
pnpm generate:api
```

The generated models and api clients will be located at [api](../src/api)
folder.

## Read on:

- [Home](../README.md)
- [Tech ecosystem](./TECH_ECOSYSTEM.md)
- [Code style](./CODE_STYLE.md)
- [Version control](./VERSION_CONTROL.md)
- [Editor](./EDITOR.md)
- [Writting test](./WRITING_TEST.md)
- [Deployment](./DEPLOYMENT.md)
