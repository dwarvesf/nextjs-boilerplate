import { faker } from '@faker-js/faker'
import { defineConfig } from 'orval'

export default defineConfig({
  app: {
    output: {
      mode: 'tags-split',
      workspace: './src/api',
      target: './app.ts',
      schemas: './model',
      client: 'swr',
      mock: true,
      prettier: true,
      override: {
        mutator: {
          path: './mutator/requester.ts',
          name: 'requester',
        },
        mock: {
          properties: {
            email: () => faker.internet.email(),
            'data.email': () => faker.internet.email(),
            'data.[].email': () => faker.internet.email(),
            avatar: () => faker.image.avatar(),
            'data.avatar': () => faker.image.avatar(),
            'data.[].avatar': () => faker.image.avatar(),
          },
        },
      },
    },
    input: {
      target: 'https://demo-api.dwarvesf.com/swagger/doc.json',
      validation: false,
    },
    hooks: {
      afterAllFilesWrite: 'eslint ./src/api --ext .ts,.tsx,.js --fix', // run lint fix after all files are written
    },
  },
})
