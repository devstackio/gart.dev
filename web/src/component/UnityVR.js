import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexShrink: 0,
  },
  code: {
    fontFamily: "Verdana, Geneva, Tahoma, sans-serif",
    fontSize: "10px",
    color: "white",
    background: "#333",
    padding: "10px 10px 10px 10px"
  }
}));

export default function UnityVR() {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>

      <h2>Highlighting an Object with a shader</h2>
      
      
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>Create new Material and attach Shader to it</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          On new material select "Custom/Outline Shader" or wherever your 'Shader' property points to from Outline Shader.shader
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Control when Shader is displayed</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <p className={classes.code}>
            bool someFlag = true;<br />
            GetComponent&lt;Renderer&gt;().material.SetFloat("_Outline", someFlag ? 0.008f : 0);<br /><br />
            "Outline" is taken from Outline Shader.shader line "uniform float _Outline;" 
            </p>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

    </div>
  );
}