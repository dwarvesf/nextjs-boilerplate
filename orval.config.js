module.exports = {
  petstore: {
    output: {
      mode: 'tags-split',
      workspace: './src/api',
      target: './petstore.ts',
      schemas: './model',
      client: 'swr',
      mock: true,
      prettier: true,
      override: {
        mutator: {
          path: './mutator/requester.ts',
          name: 'requester',
        },
      },
    },
    input: {
      target: 'https://petstore.swagger.io/v2/swagger.json',
      validation: true,
    },
    hooks: {
      afterAllFilesWrite: 'eslint ./src/api --ext .ts,.tsx,.js --fix', // run lint fix after all files are written
    },
  },
}
