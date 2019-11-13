import React from 'react';
import { Redirect } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'

const nav = ['/','/android','/react','/spring']

class Header extends React.Component {

  state = {
    redirect: false
  }
  
  render() {
    return (
      <>
        {this.state.redirect && <Redirect to={this.state.redirect} />}
        <nav>
          <AppBar position="static">
            <Tabs onChange={(event, newValue) => { this.setState( { redirect: nav[newValue]})}} aria-label="simple tabs example">
              <Tab label="About"  />
              <Tab label="Android" />
              <Tab label="React" />
              <Tab label="Spring" />
            </Tabs>
          </AppBar>
        </nav>
      </>
    );
  }
}

export default Header;