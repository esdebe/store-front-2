import { Fragment } from 'react'

function GoogleFonts() {
  const fonts = [
    [1, 'Poppins'],
    [2, 'Lora'],
    [3, 'Raleway'],
    [4, 'Changa'],
  ]
  const baseURL = 'https://fonts.googleapis.com/css2?'
  return (
    <Fragment>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      {
        fonts.map(([key, family]) => (
          <link
            key={key}
            rel="stylesheet"
            href={`${baseURL}family=${family}&display=swap`}
          />
        ))
      }
    </Fragment>
  )
}

export default GoogleFonts
