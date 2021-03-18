import { Fragment } from 'react'
import googleFontConfig from '@styles/google-font.config'

function GoogleFonts() {
  const fonts = googleFontConfig
  const baseURL = 'https://fonts.googleapis.com/css2?'
  return (
    <Fragment>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      {fonts.map(([key, family]) => (
        <link
          key={key}
          rel="stylesheet"
          href={`${baseURL}family=${family}&display=swap`}
        />
      ))}
    </Fragment>
  )
}

export default GoogleFonts
