import React from "react";
import Typography from "@mui/material/Typography";

const Title = ({ text }) => {
  return (
    <Typography variant="h4" align="center" gutterBottom>
      {text}
    </Typography>
  );
};

export default Title;
