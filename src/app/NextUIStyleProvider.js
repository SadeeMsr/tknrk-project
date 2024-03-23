'use client'

import {NextUIProvider} from '@nextui-org/react'

export function NextUIStyleProviders({children}) {
  return (
    <NextUIProvider>
      {children}
    </NextUIProvider>
  )
}