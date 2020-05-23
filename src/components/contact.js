import React from 'react';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import twitter from '../icons/twitter.png';
import github from '../icons/github.png';
import linkedin from '../icons/linkedin.png';
import email from '../icons/letter.png';
import Grid from '@material-ui/core/Grid';

export default function Contact() {
  return (
    <Paper style={{ backgroundColor: '#010101', paddingLeft: 50, paddingRight: 50 }}>
      <Typography gutterBottom variant="h4" component="h2" style={{ color: '#fafafa', paddingBottom: 20 }}>
        Let's Connect
          </Typography>
      <Grid container spacing={6}>
        <Grid item xs>
          <Typography>
            <a href='https://twitter.com/mousumsaikia3'>
              <img src={twitter} width='50px' alt="Twitter" />
              <p style={{ color: '#fafafa' }}>Twitter</p>
            </a>
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography>
            <a href='https://github.com/mausom98'>
              <img src={github} width='50px' alt="Github" />
              <p style={{ color: '#fafafa' }}>Github</p></a>
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography>
            <a href='https://www.linkedin.com/in/mausom-saikia'>
              <img src={linkedin} width='50px' alt="LinkedIn" />
              <p style={{ color: '#fafafa' }}>LinkedIn</p>
            </a>
          </Typography>
        </Grid>
        <Grid item xs>
          <Typography>
            <img src={email} width='50px' alt="Email" />
            <p style={{ color: '#fafafa' }}>Email : uccmausom@gmail.com</p>

          </Typography>
        </Grid>
      </Grid>
    </Paper >


  );
}
