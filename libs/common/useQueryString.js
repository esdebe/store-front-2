import { useRouter } from 'next/router'
import {
  useState,
  useCallback,
  useMemo,
} from 'react'
import { parse, stringify } from 'qs'

const defaultConfig = {
  key: {
    orderBy: 'order_by',
    sortBy: 'sort_by',
    page: 'page',
    perPage: 'per',
  },
  parse: {
    ignoreQueryPrefix: true,
  },
  stringify: {
    arrayFormat: 'brackets',
    encodeValuesOnly: true,
    format: 'RFC1738',
  },
}

function useQueryString(config = defaultConfig) {
  const router = useRouter()
  const { query: search, push } = router
  const urlParams = useMemo(() => parse(search, config.parse), [search, config])
  const getUrlParams = useCallback((key) => urlParams[key], [urlParams])
  const [params, setParams] = useState(urlParams)
  const clearable = useMemo(
    () => {
      const clears = Object.entries(urlParams)
        .reduce(
          (prev, [key, value]) => (
            !Object.values(config.key).includes(key)
              ? { ...prev, [key]: value }
              : prev
          ),
          {}
        )
      return clears
    },
    [urlParams, config.key]
  )

  const applyQueryParams = useCallback((object, options) => {
    const next = `?${stringify(object, config.stringify)}`
    const prev = `?${stringify(params, config.stringify)}`
    if (prev !== next) {
      setParams(object)
      if (next === '?') push('', undefined, options)
      else push(next, undefined, options)
    }
  }, [config.stringify, push, params])

  // ORDER
  const getOrderBy = useMemo(
    () => getUrlParams(config.key.orderBy),
    [getUrlParams, config.key.orderBy]
  )

  const setOrderBy = useCallback((orderBy, options) => {
    const next = { ...urlParams, [config.key.orderBy]: orderBy }
    applyQueryParams(next, options)
  }, [urlParams, applyQueryParams, config.key.orderBy])

  // SORT
  const getSortBy = useMemo(
    () => getUrlParams(config.key.sortBy),
    [getUrlParams, config.key.sortBy]
  )

  const setSortBy = useCallback((sortBy, options) => {
    const next = { ...urlParams, [config.key.sortBy]: sortBy }
    applyQueryParams(next, options)
  }, [urlParams, applyQueryParams, config.key.sortBy])

  // PAGE
  const getPage = useMemo(
    () => getUrlParams(config.key.page) || 1,
    [getUrlParams, config.key.page]
  )

  const setPage = useCallback((page, options) => {
    const nextPage = page === 1 ? undefined : page
    const next = { ...urlParams, [config.key.page]: nextPage }
    applyQueryParams(next, options)
  }, [urlParams, applyQueryParams, config.key.page])

  // PERPAGE
  const getPerPage = useMemo(
    () => getUrlParams(config.key.perPage),
    [getUrlParams, config.key.perPage]
  )

  // FILTER
  const setPerPage = useCallback((perPage, options) => {
    const next = { ...urlParams, [config.key.perPage]: perPage }
    applyQueryParams(next, options)
  }, [urlParams, applyQueryParams, config.key.perPage])

  // FILTER
  const setQuery = useCallback((key, value, options) => {
    const next = { ...urlParams, [key]: value }
    applyQueryParams(next, options)
  }, [urlParams, applyQueryParams])

  const setQueries = useCallback((filters, options) => {
    const next = { ...urlParams, ...filters }
    applyQueryParams(next, options)
  }, [urlParams, applyQueryParams])

  const clearQuery = useCallback((keys = [], options) => {
    const next = Object.entries(urlParams)
      .reduce(
        (prev, [key, value]) => (keys.includes(key)
          ? { ...prev, [key]: value }
          : prev),
        {}
      )
    applyQueryParams(next, options)
  }, [urlParams, applyQueryParams])

  const clearQueries = useCallback((options) => {
    const next = Object.entries(urlParams)
      .reduce(
        (prev, [key, value]) => (
          Object.values(config.key).includes(key)
            ? { ...prev, [key]: value }
            : prev
        ),
        {}
      )
    applyQueryParams(next, options)
  }, [urlParams, applyQueryParams, config.key])

  return {
    params: urlParams,
    getUrlParams,
    setPage,
    page: getPage,
    setPerPage,
    perPage: getPerPage,
    setOrderBy,
    orderBy: getOrderBy,
    setSortBy,
    sortBy: getSortBy,
    setQuery,
    clearQuery,
    setQueries,
    clearQueries,
    clearable,
  }
}

export default useQueryString
