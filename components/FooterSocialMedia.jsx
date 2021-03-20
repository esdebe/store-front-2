import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

const socialMediaContainerSX = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap',
  '& > p': {
    width: '100%',
    textAlign: 'center',
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: '100%',
    marginBottom: '10px',
  },
  paddingTop: '30px',
  paddingBottom: '30px',
}
const socialMediaSX = {
  flexGrow: 0,
  flexShrink: 0,
  flexBasis: 'auto',
  height: '32px',
  width: '32px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  '&:not(:last-of-type)': {
    marginRight: '10px',
  },
}

function FooterSocialMedia(props) {
  const { socialMedia: socialMedias } = props
  return (
    <Box sx={socialMediaContainerSX}>
      <Typography component="p" variant="socialMediaTitle">
        Ikuti Kami
      </Typography>
      {socialMedias.map((socialMedia) => (
        <Box
          key={socialMedia.id}
          component="a"
          sx={socialMediaSX}
          href={socialMedia.href}
        >
          <img src={socialMedia.image} alt={socialMedia.alt} />
        </Box>
      ))}
    </Box>
  )
}

export default FooterSocialMedia
