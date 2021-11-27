import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';


const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={4}>
        <Box id="lista de usuarios"
      sx={{        
        height: 300,
        border: 1,
        //backgroundColor: 'primary.light',        
    }}
    >
      lista de usuarios
    </Box>

    
    
        </Grid>
        <Grid item xs={8}>
        <Box id="lista de mensajes"
      sx={{        
        height: 300,
        border: 1,
        //backgroundColor: 'primary.light',        
    }}
    >
      lista de mensajes
    </Box>
        </Grid>
        <Grid item xs={10}>
          <TextField fullWidth label="escriba un mensaje" id="text_chat" />
        </Grid>
        <Grid item xs={2}>
        <Button variant="contained" endIcon={<SendIcon />}>
  Send
</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
