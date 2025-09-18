'use client'
import { useState } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Paper from "@mui/material/Paper";
import BackspaceIcon from '@mui/icons-material/Backspace';


export default function Home() {
  const [result, setResult] = useState("0");

  const handleButtonClick = value => {
    let newResult = result + value;
    if (newResult.startsWith("0") && newResult.length > 1) {
        setResult(newResult.substring(1));
    } else {
      setResult(newResult);
}
  }
  return (
<Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh' }}
    >

        <Stack
          direction="column"
          spacing={2}
        >
          <Paper
            elevation={3}
            sx={{
              padding: 2,
              textAlign: 'right',
              backgroundColor: '#696969',
              color: '#f000000',
              overflow: 'hidden',
              minHeight: 50,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}
          >
            <Box sx={{justifyContent: "flex-end", width: '100%'}}>
              <Typography variant="h4" align="right" fontFamily= 'monospace' fontWeight='bold' > {result} </Typography>
            </Box>
           </Paper>
          <Stack direction="row" spacing={2}>
            <Button 
            variant="outlined" 
            sx={{backgroundColor: '#ff5810', color: '#000', '&:hover': {
            backgroundColor: '#f57c00', },}}
            onClick={() => setResult('0')}>AC</Button>
            <Button variant="outlined" sx={{backgroundColor: '#ff9810', color: '#000', '&:hover': {
            backgroundColor: '#f57c00', },}}
                        onClick={() => {
              setResult(prevResult => prevResult + "/");
            }}
            >/</Button>
            <Button variant="outlined" sx={{backgroundColor: '#ff9800', color: '#000', '&:hover': {
            backgroundColor: '#f57c00', },}}
                        onClick={() => {
              setResult(prevResult => prevResult + "*");
            }}
            >*</Button>
            <Button variant="outlined" sx={{backgroundColor: '#ff9800', color: '#000', '&:hover': {
            backgroundColor: '#f57c00', },}}
                        onClick={() => {
              setResult(prevResult => prevResult + "C");
            }}
            >C</Button>
          </Stack>

          <Stack direction="row" spacing={2} sx={{justifyContent: "center"}}>
            <Button variant="outlined"
            onClick={() => handleButtonClick('1')}
            >1</Button>
            <Button variant="outlined"
              onClick={() => handleButtonClick('2')}
            >2</Button>
            <Button variant="outlined"
             onClick={() => handleButtonClick('3')}
            >3</Button>
            <Button variant="outlined" sx={{backgroundColor: '#ff9800', color: '#000', '&:hover': {
            backgroundColor: '#f57c00', },}}>%</Button>
          </Stack>

          <Stack direction="row" spacing={2} sx={{justifyContent: "center"}}>
            <Button variant="outlined"
             onClick={() => handleButtonClick('4')}
            >4</Button>
            <Button variant="outlined"
             onClick={() => handleButtonClick('5')}
            >5</Button>
            <Button variant="outlined"
            onClick={() => handleButtonClick('6')}
            >6</Button>
            <Button variant="outlined" sx={{backgroundColor: '#ff9800', color: '#000', '&:hover': {
            backgroundColor: '#f57c00', },}}
                        onClick={() => {
              setResult(prevResult => prevResult + "-");
            }}
            >-</Button>
          </Stack>

          <Stack direction="row" spacing={2} sx={{justifyContent: "center"}}>
            <Button variant="outlined"
              onClick={() => handleButtonClick('7')}
            >7</Button>
            <Button variant="outlined"
               onClick={() => handleButtonClick('8')}
            >8</Button>
            <Button variant="outlined"
               onClick={() => handleButtonClick('9')}
            >9</Button>
            <Button variant="outlined" sx={{backgroundColor: '#ff9800', color: '#000', '&:hover': {
            backgroundColor: '#f57c00', },}}
                        onClick={() => {
              setResult(prevResult => prevResult + "+");
            }}
            >+</Button>
          </Stack>

          <Stack direction="row" spacing={2} sx={{justifyContent: "center"}}>
            <Button variant="outlined"
               onClick={() => handleButtonClick('0')}
            >0</Button>
            <Button variant="outlined"
               onClick={() => handleButtonClick('.')}
            >.</Button>
            <Button variant="outlined" sx={{backgroundColor: '#ff9800', color: '#000', '&:hover': {
            backgroundColor: '#f57c00', },}}
            onClick={() => handleButtonClick('=')}>DEL</Button>
            <Button variant="outlined" sx={{backgroundColor: '#ff9800', color: '#000', '&:hover': {
            backgroundColor: '#f57c00', },}}>=</Button>
          </Stack>

          </Stack>
</Box>
  );
}
