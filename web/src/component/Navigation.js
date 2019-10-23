import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import AboutPage from './AboutPage'
import ReactPage from './ReactPage'
import UnityVR from './UnityVR'

const TabPanel = props => {
  const { children, value, index, ...other } = props

  return(
    <Typography
    component="div"
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
    {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
}

function getNavIndex(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  }
}))

export default function Navigation() {
  const classes = useStyles()
  const [value, setValue] = React.useState(0)

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Home" {...getNavIndex(0)} />
          <Tab label="About" {...getNavIndex(1)} />
          <Tab label="Unity VR" {...getNavIndex(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ReactPage />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AboutPage />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <UnityVR />
      </TabPanel>
    </div>
  )
}