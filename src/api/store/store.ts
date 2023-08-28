/**
 * Generated by orval v6.17.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * This is a sample server Petstore server.  You can find out more about Swagger at [http://swagger.io](http://swagger.io) or on [irc.freenode.net, #swagger](http://swagger.io/irc/).  For this sample, you can use the api key `special-key` to test the authorization filters.
 * OpenAPI spec version: 1.0.6
 */
import useSwr from 'swr'
import type { SWRConfiguration, Key } from 'swr'
import type { Order, GetInventory200 } from '../model'
import { requester } from '../mutator/requester'

/**
 * @summary Place an order for a pet
 */
export const placeOrder = (order: Order) => {
  return requester<Order>({
    url: `/store/order`,
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    data: order,
  })
}

/**
 * For valid response try integer IDs with value >= 1 and <= 10. Other values will generated exceptions
 * @summary Find purchase order by ID
 */
export const getOrderById = (orderId: number) => {
  return requester<Order>({ url: `/store/order/${orderId}`, method: 'get' })
}

export const getGetOrderByIdKey = (orderId: number) =>
  [`/store/order/${orderId}`] as const

export type GetOrderByIdQueryResult = NonNullable<
  Awaited<ReturnType<typeof getOrderById>>
>
export type GetOrderByIdQueryError = void

/**
 * @summary Find purchase order by ID
 */
export const useGetOrderById = <TError = void>(
  orderId: number,
  options?: {
    swr?: SWRConfiguration<Awaited<ReturnType<typeof getOrderById>>, TError> & {
      swrKey?: Key
      enabled?: boolean
    }
  },
) => {
  const { swr: swrOptions } = options ?? {}

  const isEnabled = swrOptions?.enabled !== false && !!orderId
  const swrKey =
    swrOptions?.swrKey ??
    (() => (isEnabled ? getGetOrderByIdKey(orderId) : null))
  const swrFn = () => getOrderById(orderId)

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
    swrKey,
    swrFn,
    swrOptions,
  )

  return {
    swrKey,
    ...query,
  }
}

/**
 * For valid response try integer IDs with positive integer value. Negative or non-integer values will generate API errors
 * @summary Delete purchase order by ID
 */
export const deleteOrder = (orderId: number) => {
  return requester<unknown>({
    url: `/store/order/${orderId}`,
    method: 'delete',
  })
}

/**
 * Returns a map of status codes to quantities
 * @summary Returns pet inventories by status
 */
export const getInventory = () => {
  return requester<GetInventory200>({ url: `/store/inventory`, method: 'get' })
}

export const getGetInventoryKey = () => [`/store/inventory`] as const

export type GetInventoryQueryResult = NonNullable<
  Awaited<ReturnType<typeof getInventory>>
>
export type GetInventoryQueryError = unknown

/**
 * @summary Returns pet inventories by status
 */
export const useGetInventory = <TError = unknown>(options?: {
  swr?: SWRConfiguration<Awaited<ReturnType<typeof getInventory>>, TError> & {
    swrKey?: Key
    enabled?: boolean
  }
}) => {
  const { swr: swrOptions } = options ?? {}

  const isEnabled = swrOptions?.enabled !== false
  const swrKey =
    swrOptions?.swrKey ?? (() => (isEnabled ? getGetInventoryKey() : null))
  const swrFn = () => getInventory()

  const query = useSwr<Awaited<ReturnType<typeof swrFn>>, TError>(
    swrKey,
    swrFn,
    swrOptions,
  )

  return {
    swrKey,
    ...query,
  }
}
