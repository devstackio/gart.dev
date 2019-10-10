import React from 'React';

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class Accordion extends React.Component {

  render() {
    return(
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Create new Shader</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          create new Shader (Outline Shader) and take code from <a href="https://wiki.unity3d.com/index.php/Silhouette-Outlined_Diffuse">from here</a>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    )
  }

}