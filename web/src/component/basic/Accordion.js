import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ReactHtmlParser from 'react-html-parser'; 
var MarkdownIt = require('markdown-it'),
    md = new MarkdownIt();

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

export default function Accordion(props) {

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = panel => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const panel = `panel${props.id}`
  const content = md.render(props.content);

  return (
    <ExpansionPanel expanded={expanded === panel} onChange={handleChange(panel)}>
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls={`panel${props.id}bh-content`}
        id={`panel${props.id}bh-header`}
      >
        <Typography className={classes.heading}>{props.header}</Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        { ReactHtmlParser (content) }
      </ExpansionPanelDetails>
    </ExpansionPanel>
  )

}