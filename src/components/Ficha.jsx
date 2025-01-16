import "../App.css";
import React from "react";
import { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import { Stack, Typography } from "@mui/material";
import AppGrid from "../AppGrid";

import { CustomButton } from "milibreria";

function Ficha() {
  const dato = {
    animal: "Perro",
    imageUrl: "perro.jpg",
  };

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    alert("¡Me picaste!");
  }

  const theme = createTheme({
    palette: {
      ochre: {
        main: "#ff0000",        
        contrastText: "#ffffff", 
      },
    },
  });
  

  return (
    <Stack
      direction="column"
      spacing={2}
      alignItems="center"
      justifyContent="space-evenly"
    >
      <Typography variant="h2">Soy un {dato.animal} y vivo feliz</Typography>
      <Avatar
        className="imagen"
        src={dato.imageUrl}
        alt="img"
        sx={{ width: 400, height: 350 }}
      />
      <ThemeProvider theme={theme}>
        <CustomButton
          text={`Me picaste ${count} veces`}
          txtcolor="white"
          bgcolor="purple"
          size="large"
          onClick={handleClick}
        />
      </ThemeProvider>
      <AppGrid />
    </Stack>
  );
}

export default Ficha;
