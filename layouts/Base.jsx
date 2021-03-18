import { Fragment } from 'react'

function Base(props) {
  const { children } = props
  return <Fragment>{children}</Fragment>
}

export default Base
