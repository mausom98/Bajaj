import React, { useState, useEffect } from 'react';
import { makeStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import pic from '../ktm1.webp';
import pic2 from '../bike2.webp';
import pic3 from '../bike3.webp';
import logo from '../KTM-logo.png';
import { Paper } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import ColorBar from 'react-color-bar';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    color: 'white',
    borderColor: 'white'
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    fontFamily: '"Balsamiq Sans", cursive,"Oswald", sans- serif'
  },
})

export default function MediaCard() {
  const classes = useStyles();
  const [page, setPage] = useState(0);
  const to1 = [
    {
      value: 300,
      color: '#fc5a03'
    },
    {
      value: 100,
      color: '#010101'
    }
  ];
  const to2 = [
    {
      value: 100,
      color: '#fc5a03'
    },
    {
      value: 200,
      color: '#010101'
    }
  ];
  const to3 = [
    {
      value: 300,
      color: '#fc5a03'
    },
    {
      value: 0,
      color: '#010101'
    }
  ];
  const tr1 = [
    {
      value: 300,
      color: '#fc5a03'
    },
    {
      value: 100,
      color: '#010101'
    }
  ];
  const tr2 = [
    {
      value: 300,
      color: '#fc5a03'
    },
    {
      value: 100,
      color: '#010101'
    }
  ];
  const tr3 = [
    {
      value: 300,
      color: '#fc5a03'
    },
    {
      value: 100,
      color: '#010101'
    }
  ];
  const s1 = [
    {
      value: 300,
      color: '#fc5a03'
    },
    {
      value: 120,
      color: '#010101'
    }
  ];
  const s2 = [
    {
      value: 300,
      color: '#fc5a03'
    },
    {
      value: 160,
      color: '#010101'
    }
  ];
  const s3 = [
    {
      value: 300,
      color: '#fc5a03'
    },
    {
      value: 0,
      color: '#010101'
    }
  ];
  const b1 = [
    {
      value: 300,
      color: '#fc5a03'
    },
    {
      value: 100,
      color: '#010101'
    }
  ];
  const b2 = [
    {
      value: 300,
      color: '#fc5a03'
    },
    {
      value: 180,
      color: '#010101'
    }
  ];
  const b3 = [
    {
      value: 300,
      color: '#fc5a03'
    },
    {
      value: 100,
      color: '#010101'
    }
  ];

  const change = () => {
    switch (page) {
      case 0:
        return <Grid container spacing={20} >
          <Grid item xs>
            <img src={logo} height="50px" />
            <img src={pic} height="430px" />
          </Grid>
          <Grid item xs>
            <Paper elevation={0} style={{ paddingLeft: 20, paddingBottom: 20, paddingTop: 10, margin: 0, backgroundColor: '#010101' }}>
              <Typography gutterBottom variant="h4" component="h2" style={{ color: '#fc5a03' }}>
                KTM 390 Adventure
          </Typography>
              <Typography style={{ color: '#fafafa' }}>
                <p><strong>TORQUE     :</strong><ColorBar data={to1} />          37 Nm</p>
                <p><strong>TRANSMISSION       :</strong><ColorBar data={tr1} />     6-speed</p>
                <p><strong>STROKE       :</strong><ColorBar data={s1} />         60 mm</p>
                <p><strong>BORE       :</strong><ColorBar data={b1} />        89 mm</p>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <div style={{ paddingTop: 200, paddingLeft: 200 }}>

              <Button onClick={() => { setPage(page + 1) }} variant="outlined" size="medium" className={classes.margin}>
                Next
        </Button>
            </div>

          </Grid>
        </Grid>;
      case 1:
        return <Grid container spacing={20} >
          <Grid item xs>
            <img src={logo} height="50px" />
            <img src={pic2} height="430px" />
          </Grid>
          <Grid item xs>
            <Paper elevation={0} style={{ paddingLeft: 20, paddingBottom: 20, paddingTop: 10, margin: 0, backgroundColor: '#010101' }}>
              <Typography gutterBottom variant="h4" component="h2" style={{ color: '#fc5a03' }}>
                KTM 790 Duke
          </Typography>
              <Typography style={{ color: '#fafafa' }}>
                <p><strong>TORQUE     :</strong><ColorBar data={to2} />         12 Nm</p>
                <p><strong>TRANSMISSION       :</strong><ColorBar data={tr2} />     6-speed</p>
                <p><strong>STROKE       :</strong><ColorBar data={s2} />         47.2 mm</p>
                <p><strong>BORE       :</strong><ColorBar data={b2} />        58 mm</p>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <div style={{ paddingTop: 200, paddingLeft: 200 }}>

              <Button onClick={() => { setPage(page + 1) }} variant="outlined" size="medium" className={classes.margin}>
                Next
        </Button>
            </div>

          </Grid>

        </Grid>;
      case 2:
        return <Grid container spacing={20} >
          <Grid item xs>
            <img src={logo} height="50px" />
            <img src={pic3} height="430px" />
          </Grid>
          <Grid item xs>
            <Paper elevation={0} style={{ paddingLeft: 20, paddingBottom: 20, paddingTop: 10, margin: 0, backgroundColor: '#010101' }}>
              <Typography gutterBottom variant="h4" component="h2" style={{ color: '#fc5a03' }}>
                KTM 125 Duke
          </Typography>
              <Typography style={{ color: '#fafafa' }}>
                <p><strong>TORQUE     :</strong><ColorBar data={to3} />        87 Nm</p>
                <p><strong>TRANSMISSION       :</strong><ColorBar data={tr3} />     6-speed</p>
                <p><strong>STROKE       :</strong><ColorBar data={s3} />         65.7 mm</p>
                <p><strong>BORE       :</strong><ColorBar data={b3} />        88 mm</p>
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs>
            <div style={{ paddingTop: 200, paddingLeft: 200 }}>

              <Button onClick={() => { setPage(page + 1) }} variant="outlined" size="medium" className={classes.margin}>
                Next
        </Button>
            </div>

          </Grid>
        </Grid>;
      default:
        setPage(0);
    }
  }
  return (
    <div>
      <MuiThemeProvider theme={theme}>
        {change()}
      </MuiThemeProvider>
    </div>

  );
}
