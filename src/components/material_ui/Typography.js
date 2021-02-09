import React from "react";
import Typography from '@material-ui/core/Typography';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  titleText: {
    width: "100%",
    padding: "8px 8px",
    lineHeight: "1.4",
  },
  inline: {
    display: "inline",
  },
  content: {
    width: "80%",
  },
  uppercase: {
    textTransform: "uppercase",
  }
});

export default ({ children, center, content, uppercase, variant, inline, white, card, ...rest }) => {
  const classes = useStyles();
  return (
    <Typography 
      {...rest}    
      color={white ? "inherit" : "primary"}
      className={card ? classes.titleText : uppercase ? classes.uppercase : inline ? classes.inline : content && classes.content}
      variant={card ? "overline": variant} 
      style={{textAlign: center && "center"}}
    >
      {children}
    </Typography>
  )
}
