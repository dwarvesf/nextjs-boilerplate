const ibmCloudValidationRules = require('@ibm-cloud/openapi-ruleset') // Note 1
const {
  pathSegmentCaseConvention,
  propertyCaseConvention,
  enumCaseConvention,
  operationIdCaseConvention,
  parameterCaseConvention,
} = require('@ibm-cloud/openapi-ruleset/src/functions')
const {
  schemas,
  paths,
  operations,
  parameters,
} = require('@ibm-cloud/openapi-ruleset-utilities/src/collections')

module.exports = {
  extends: ibmCloudValidationRules,
  rules: {
    'response-example-provided': 'off',
    'operation-description': 'off',
    'property-description': 'off',
    'request-body-name': 'off',
    'response-status-codes': 'off',
    'string-boundary': 'off',
    'content-entry-provided': 'off',
    'array-responses': 'off',
    'request-body-object': 'off',
    'schema-description': 'off',
    'property-case-convention': {
      description: 'Property names must follow camel case convention',
      message: '{{error}}',
      given: schemas,
      resolved: true,
      severity: 'error',
      then: {
        function: propertyCaseConvention,
        functionOptions: {
          type: 'camel',
        },
      },
    },
    'path-segment-case-convention': {
      description: 'Path segments must follow camel case convention',
      message: '{{error}}',
      given: paths,
      severity: 'error',
      then: {
        function: pathSegmentCaseConvention,
        functionOptions: {
          type: 'camel',
        },
      },
    },
    'enum-case-convention': {
      description: 'Enum values must follow a specified case convention',
      message: '{{error}}',
      given: schemas,
      severity: 'error',
      then: {
        function: enumCaseConvention,
        functionOptions: {
          type: 'camel',
        },
      },
    },
    'operation-id-case-convention': {
      description: 'Operation ids must follow a specified case convention',
      message: '{{error}}',
      given: operations,
      severity: 'error',
      then: {
        function: operationIdCaseConvention,
        functionOptions: {
          type: 'camel',
        },
      },
    },
    'parameter-case-convention': {
      description: 'Parameter names must follow case conventions',
      message: '{{error}}',
      given: parameters,
      severity: 'error',
      resolved: true,
      then: {
        function: parameterCaseConvention,
        functionOptions: {
          query: {
            type: 'camel',
          },

          path: {
            type: 'camel',
          },
          header: {
            type: 'pascal',
            separator: {
              char: '-',
            },
          },
        },
      },
    },
  },
}
