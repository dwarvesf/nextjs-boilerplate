import { faker } from '@faker-js/faker'
import { defineConfig } from 'orval'

const MOCK_PROPERTIES = {
  'data.email': () => faker.internet.email(),
  'data.[].email': () => faker.internet.email(),
  'data.avatar': () => faker.image.avatar(),
  'data.[].avatar': () => faker.image.avatar(),
  'data.role': () => faker.helpers.arrayElement(['User', 'Admin', 'Moderator']),
  'data.[].role': () =>
    faker.helpers.arrayElement(['User', 'Admin', 'Moderator']),
  'data.fullName': () => faker.person.fullName(),
  'data.[].fullName': () => faker.person.fullName(),
  'data.department': () => faker.person.jobArea(),
  'data.[].department': () => faker.person.jobArea(),
  'data.title': () => faker.person.jobTitle(),
  'data.[].title': () => faker.person.jobTitle(),
  'data.status': () => faker.helpers.arrayElement(['Active', 'Inactive']),
  'data.[].status': () => faker.helpers.arrayElement(['Active', 'Inactive']),
  'metadata.page': () => faker.number.int({ min: 1, max: 10 }),
  'metadata.pageSize': () => faker.number.int({ min: 1, max: 20 }),
  'metadata.totalPages': () => faker.number.int({ min: 1, max: 10 }),
  'metadata.totalRecords': () => faker.number.int({ min: 1, max: 100 }),
}

const MOCK_LOGIN = {
  'data.id': () => 2,
  'data.accessToken': () => faker.string.nanoid(),
  'data.email': () => 'demo@dwarves.foundation',
}

const MOCK_ME = {
  'data.id': 2,
  'data.email': 'demo@dwarves.foundation',
  'data.avatar':
    'https://avatars.githubusercontent.com/u/10388449?s=200\u0026v=4',
  'data.role': 'user',
  'data.status': 'active',
  'data.fullName': 'Dwarvesf Demo',
  'data.title': 'Demo',
  'data.department': 'Dev',
}

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
          properties: MOCK_PROPERTIES,
          required: true,
        },
        operations: {
          login: {
            mock: {
              properties: () => MOCK_LOGIN,
            },
          },
          getMe: {
            mock: {
              properties: () => MOCK_ME,
            },
          },
        },
      },
    },
    input: {
      target: 'https://openrouter-api.dwarvesf.com/api/v1/openapi.json',
      validation: false,
    },
    hooks: {
      afterAllFilesWrite: 'eslint ./src/api --ext .ts,.tsx,.js --fix', // run lint fix after all files are written
    },
  },
})
