/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 * OpenAPI spec version: 1.0.6
 */

export interface User {
  id?: number
  username?: string
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  phone?: string
  /** User Status */
  userStatus?: number
}
