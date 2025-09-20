"use client";
import { useState } from "react";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import BackspaceIcon from "@mui/icons-material/Backspace";

export default function Home() {
  const [result, setResult] = useState("0");

  const handleDigitClick = value => {
    let newResult = result + value;
    if (newResult.startsWith("0") && newResult.length > 1) {
      setResult(newResult.substring(1));
    } else {
      setResult(newResult);
    }
  }

  const handleEqualClick = () => {
    setResult(eval(result).toString(10));
  }

  const handleOperandClick = value => {
    if (result == '0') {
      return;
    } 

    const lastChar = result.slice(-1);
    if (lastChar >= '0' && lastChar <= '9') {
      setResult(result + value);
    } else {
      setResult(result.slice(0, -1) + value);
    }
  }

  const handleBackspace = () => {
    let newResult = result;
    if (newResult.length>1) {
      setResult (newResult.slice(0, -1));
  } else {
     setResult (0);
  }
}

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh" }}
    >
      <Stack direction="column" spacing={2}>
        <Paper
          elevation={3}
          sx={{
            padding: 2,
            textAlign: "right",
            backgroundColor: "#696969",
            color: "#f000000",
            overflow: "hidden",
            minHeight: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          <Box sx={{ justifyContent: "flex-end", width: "100%" }}>
            <Typography
              variant="h4"
              align="right"
              fontFamily="monospace"
              fontWeight="bold"
            >
              {" "}
              {result}{" "}
            </Typography>
          </Box>
        </Paper>
        <Stack direction="row" spacing={2}>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#ff5810",
              color: "#000",
              "&:hover": {
                backgroundColor: "#f57c00",
              },
            }}
            onClick={() => setResult("0")}
          >
            AC
          </Button>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#ff9810",
              color: "#000",
              "&:hover": {
                backgroundColor: "#f57c00",
              },
            }}
            onClick={() => setResult("/")}
          >
            /
          </Button>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#ff9800",
              color: "#000",
              "&:hover": {
                backgroundColor: "#f57c00",
              },
            }}
            onClick={() => setResult("*")}
          >
            *
          </Button>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#ff9800",
              color: "#000",
              "&:hover": {
                backgroundColor: "#f57c00",
              },
            }}
            onClick={() => setResult("C")}
          >
            C
          </Button>
        </Stack>

        <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
          <Button variant="outlined" onClick={() => handleDigitClick("1")}>
            1
          </Button>
          <Button variant="outlined" onClick={() => handleDigitClick("2")}>
            2
          </Button>
          <Button variant="outlined" onClick={() => handleDigitClick("3")}>
            3
          </Button>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#ff9800",
              color: "#000",
              "&:hover": {
                backgroundColor: "#f57c00",
              },
            }}
              onClick={() => setResult("%")}
          >
            %
          </Button>
        </Stack>

        <Stack direction="row" spacing={2} sx={{ justifyContent: "center" }}>
          <Button variant="outlined" onClick={() => handleDigitClick("4")}>
            4
          </Button>
          <Button variant="outlined" onClick={() => handleDigitClick("5")}>
            5
          </Button>
          <Button variant="outlined" onClick={() => handleDigitClick("6")}>
            6
          </Button>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#ff9800",
              color: "#000",
              "&:hover": {
                backgroundColor: "#f57c00",
              },
            }}
            onClick={() => handleOperandClick("-")}
          >-
          </Button>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "space-between" }}
        >
          <Button variant="outlined" onClick={() => handleDigitClick("7")}>
            7
          </Button>
          <Button variant="outlined" onClick={() => handleDigitClick("8")}>
            8
          </Button>
          <Button variant="outlined" onClick={() => handleDigitClick("9")}>
            9
          </Button>
          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#ff9800",
              color: "#000",
              "&:hover": {
                backgroundColor: "#f57c00",
              },
            }}
            onClick={() => handleOperandClick("+")}>
            +
          </Button>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "space-between" }}
        >
          <Button variant="outlined" onClick={() => handleDigitClick("0")}>
            0
          </Button>
          <Button variant="outlined" onClick={() => handleDigitClick(".")}>
            .
          </Button>

          <IconButton color="primary" onClick={handleBackspace} >
            <BackspaceIcon />
          </IconButton>

          <Button
            variant="outlined"
            sx={{
              backgroundColor: "#ff9800",
              color: "#000",
              "&:hover": {
                backgroundColor: "#f57c00",
              },
            }}
            onClick={handleEqualClick}

          >
            =
          </Button>
        </Stack>
      </Stack>
    </Box>
  );
}
