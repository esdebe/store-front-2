import Box from '@material-ui/core/Box'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import Search from '@components/icons/Search'

function HeaderSearch() {
  return (
    <Box
      sx={{
        backgroundColor: (theme) => theme.palette.preference.blue4,
        height: '41px',
        padding: '15px',
        paddingLeft: 0,
        borderRadius: '25px',
        '& input': {
          marginLeft: '5px',
        },
      }}
      clone
    >
      <InputBase
        startAdornment={
          <IconButton>
            <Search />
          </IconButton>
        }
        placeholder="cari"
      />
    </Box>
  )
}

export default HeaderSearch
