"use client";
import { useRef, useEffect } from "react";
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
  const displayRef = useRef(null);

  useEffect(() => {
    if (displayRef.current) {
      displayRef.current.scrollTop = displayRef.current.scrollHeight;
    }
  }, [result]);

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
  // try {
  //     const calculationString = result.replaceAll('\n', '');
  //     const evalResult = new Function('return ' + calculationString)();
  //     setResult(evalResult.toString());
  //   } catch (error) {
  //     setResult("Error");
  //   }
  // };

  const handleOperandClick = (value) => {
  if (result === '0' && value === '-') {
    setResult('-');
    return;
  }
  if (result === '0') {
    return;
  }

  setResult((prevResult) => {
    const trimmedResult = prevResult.trim();
    const lastChar = trimmedResult.slice(-1);

    if (['+', '-', '*', '/'].includes(lastChar)) {
      return trimmedResult.slice(0, -1)+ '\n' + value ;
    } else {
      return trimmedResult + '\n' + value;
    }
  });
};

  const handleBackspace = () => {
    let newResult = result;
    if (newResult.length>1) {
      setResult (newResult.slice(0, -1));
  } else {
     setResult (0);
  }
}

const handleClearClick = () => {
    setResult((prevResult) => {
      const lastNewlineIndex = prevResult.lastIndexOf('\n');

      if (lastNewlineIndex !== -1) {
        const newResult = prevResult.slice(0, lastNewlineIndex);
        return newResult === '' ? '0' : newResult;
      } else {
        return '0';
      }
    });
  };

const handlePercentClick = () => {
  try {
    const currentValue = eval(result);
    const percentValue = currentValue / 100;
    setResult(percentValue.toString());
  } catch (error) {
    setResult("Error");
  }
};

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh"}}
    >
      <Stack direction="column" spacing={2} sx={{ width: 300 }}>
        <Paper
          ref={displayRef}
          elevation={3}
          sx={{
            padding: 2,
            textAlign: "right",
            backgroundColor: "#696969",
            color: "#f000000",
            overflow: "hidden",
            overflowY: "auto",
            minHeight: 50,
            display: "flex",
            alignItems: "center",
            textAlign: "flex-end",
            justifyContent: "flex-end",
            height: '7rem', 
          }}
        >
          <Box sx={{ justifyContent: "flex-end", width: "100%" }}>
            <Typography
              variant="h4"
              align="right"
              fontFamily="monospace"
              fontWeight="bold"
              overflow-wrap= "break-word"
              width= "100%"
              whiteSpace= 'pre-wrap'
              sx={{
                overflowWrap: "break-word",
                width: "100%",
                whiteSpace: "pre-wrap"
              }}
            >
              {" "}{result}{" "}
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
            onClick={() => handleOperandClick("/")}
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
            onClick={() => handleOperandClick("*")}
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
            onClick={() => handleClearClick()}
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
              onClick={() => handlePercentClick("%")}
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
