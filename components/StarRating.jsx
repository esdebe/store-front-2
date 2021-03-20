import * as React from 'react'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import Rating from '@material-ui/core/Rating'
import Typography from '@material-ui/core/Typography'
import Star from '@components/icons/Star'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > legend': {
      marginTop: theme.spacing(2),
    },
  },
}))

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating)

export default function CustomizedRating() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <Typography component="legend">Custom icon and color</Typography>
      <StyledRating
        name="customized-color"
        defaultValue={2}
        getLabelText={(value) => `${value} Heart${value !== 1 ? 's' : ''}`}
        icon={<Star color="#24E09B" fontSize="inherit" />}
        emptyIcon={<Star color="#B7C1DA" fontSize="inherit" />}
      />
    </div>
  )
}
