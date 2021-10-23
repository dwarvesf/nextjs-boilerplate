/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface ApiResponse {
  /** @format int32 */
  code?: number
  type?: string
  message?: string
}

export interface Category {
  /** @format int64 */
  id?: number
  name?: string
}

export interface Pet {
  /** @format int64 */
  id?: number
  category?: Category

  /** @example doggie */
  name: string
  photoUrls: string[]
  tags?: Tag[]

  /** pet status in the store */
  status?: 'available' | 'pending' | 'sold'
}

export interface Tag {
  /** @format int64 */
  id?: number
  name?: string
}

export interface Order {
  /** @format int64 */
  id?: number

  /** @format int64 */
  petId?: number

  /** @format int32 */
  quantity?: number

  /** @format date-time */
  shipDate?: string

  /** Order Status */
  status?: 'placed' | 'approved' | 'delivered'
  complete?: boolean
}

export interface User {
  /** @format int64 */
  id?: number
  username?: string
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  phone?: string

  /**
   * User Status
   * @format int32
   */
  userStatus?: number
}
