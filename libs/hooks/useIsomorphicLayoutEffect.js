import { useEffect, useLayoutEffect } from 'react'
import isServer from '@libs/common/isServer'

const useIsomorphicLayoutEffect = isServer ? useEffect : useLayoutEffect

export default useIsomorphicLayoutEffect
