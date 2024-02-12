import React from 'react';
import {
  Checkbox,
  Grid,
  TextField,
  FormControlLabel,
  Paper,
  Button,Typography
} from '@material-ui/core';
import {  useNavigate } from 'react-router-dom';
const Login = () => {
  const [checked, setChecked] = React.useState(true);
  const navigate=useNavigate()
  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{ padding: 30 }}>
      <Paper>
        <Grid
          container
          spacing={3}
          direction={'column'}
         
          alignItems={'center'}
        >
          <Grid item xs={12}>
            <TextField label="Username"></TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField label="Password" type={'password'}></TextField>
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked}
                  onChange={handleChange}
                  label={'Keep me logged in'}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              }
              label="Keep me logged in"
            />
          </Grid>
          <Grid item xs={12}>
            <Button  color="default" onClick={()=>navigate("/")}> Login </Button>
          </Grid>
          <Grid item xs={12}>
          <Typography variant="subtitle1" align="center">
            Don't have an account? <a href="/signup">Sign up</a>
          </Typography>
        </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default Login;
