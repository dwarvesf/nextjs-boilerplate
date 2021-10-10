import React from 'react'

export type WithChildren<T = any> = T & { children: React.ReactNode }
