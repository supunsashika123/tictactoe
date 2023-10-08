import React from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

const RestartButton = ({ text, onClick }) => {
  return (
    <Box textAlign="center" mt={3} mb={3}>
      <Button variant="outlined" onClick={onClick}>
        {text}
      </Button>
    </Box>
  );
};

export default RestartButton;
