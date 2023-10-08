import React from "react";
import Typography from "@mui/material/Typography";

const Title = ({ text }) => {
  return (
    <Typography variant="h4" align="center" mt={4} gutterBottom>
      {text}
    </Typography>
  );
};

export default Title;
