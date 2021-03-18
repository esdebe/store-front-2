import { Fragment } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

function Base(props) {
  const { children } = props
  return (
    <Fragment>
      <CssBaseline />
      {
        children
      }
    </Fragment>
  )
}

export default Base
