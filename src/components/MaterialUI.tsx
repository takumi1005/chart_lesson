import React from 'react'
import { Button, makeStyles, Typography, Grid, Paper } from '@material-ui/core'

const useStyles = makeStyles ({
  btnStyle: {
    background: "green",
    padding: "3px 50px"
  },
  typoStyle: {
    color: "blue",
  },
  paperStyle: {
    background: "orange",
    height: "50px",
  },
});

const MaterialUI: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Typography
        className={classes.typoStyle}
        color="secondary"
        variant="h1"
        align="left"
        gutterBottom
        noWrap
      >
        Hello UI Hello UIHello UIHello UIHello UIHello UIHello UIHello UI
      </Typography>

      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Paper className={classes.paperStyle}>xs=12</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paperStyle}>xs=6</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
        <Grid item xs={6} md={3}>
          <Paper className={classes.paperStyle}>xs=3</Paper>
        </Grid>
      </Grid>

      <Button className={classes.btnStyle} variant="contained" color="primary">
        Test Button
      </Button>

      {/* Grid(Flexbox) */}
      <Grid
        container
        spacing={1}
        direction="column"
        justify="center"
        alignItems="flex-end"
      >
        <Grid item xs={1}>
            <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
            <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
        <Grid item xs={1}>
            <Paper className={classes.paperStyle}>xs=1</Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default MaterialUI
