import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import SpeedDial from '@material-ui/lab/SpeedDial'
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon'
import SpeedDialAction from '@material-ui/lab/SpeedDialAction'
import FileCopyIcon from '@material-ui/icons/FileCopyOutlined'
import SaveIcon from '@material-ui/icons/Save'
import PrintIcon from '@material-ui/icons/Print'
import MenuIcon from '@material-ui/icons/Menu'
import MenuOpenIcon from '@material-ui/icons/MenuOpen'

import { withRouter } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 100,
    backgroundColor: 'red',
  },
  speedDial: {
    position: 'fixed',
    '&.MuiSpeedDial-directionUp, &.MuiSpeedDial-directionLeft': {
      bottom: theme.spacing(8),
      right: theme.spacing(3),
    },
    '&.MuiSpeedDial-directionDown, &.MuiSpeedDial-directionRight': {
      top: theme.spacing(2),
      left: theme.spacing(2),
    },
  },
  color: {
    backgroundColor: theme.palette.action.active,
  },
  close: {
    backgroundColor: theme.palette.error.main,
  },
}))

const SpeedDials = ({ history }) => {
  const classes = useStyles()
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleOpen = () => {
    setOpen(true)
  }
  const clickHandler = (type) => {
    handleClose()
    window.location.href = `/#${type}`
  }

  return (
    <div className={classes.root}>
      <SpeedDial
        ariaLabel='SpeedDial MenuIcon'
        className={classes.speedDial}
        icon={!open ? <MenuIcon /> : <MenuOpenIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        FabProps={{ className: open ? classes.color : classes.close }}
        open={open}
      >
        <SpeedDialAction
          icon={<PrintIcon />}
          tooltipTitle={'Contact Me'}
          onClick={() => clickHandler('contact')}
        />

        <SpeedDialAction
          icon={<SaveIcon />}
          tooltipTitle={'Stacks'}
          onClick={() => clickHandler('stacks')}
        />

        <SpeedDialAction
          icon={<FileCopyIcon />}
          tooltipTitle={'About'}
          onClick={() => clickHandler('about')}
        />
      </SpeedDial>
    </div>
  )
}

export default withRouter(SpeedDials)
