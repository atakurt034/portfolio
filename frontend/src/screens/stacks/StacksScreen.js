import React from 'react'
import {
  CardMedia,
  makeStyles,
  Avatar,
  Grid,
  Chip,
  Typography,
  Paper,
  Container,
  Box,
} from '@material-ui/core'
import { Fade } from 'react-reveal'
import clsx from 'clsx'

import './sStyles.css'

const useStyles = makeStyles((theme) => ({
  stacks: {
    minHeight: '100vh',
    backgroundColor: '#eee',
    padding: 0,
    margin: 0,
  },
  title_container: {
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontWeight: 900,
    marginBottom: 20,
  },
  item: {
    padding: 10,
    margin: 5,
  },
  list: {
    padding: 5,
    [theme.breakpoints.up('sm')]: {
      padding: 20,
    },
    margin: 5,
    backgroundColor: 'transparent',
  },
  paper: {
    borderRadius: 10,
    padding: 20,
  },
  loading: {
    marginLeft: '25vw',
    [theme.breakpoints.up('md')]: {
      marginLeft: '27vw',
    },
    fontWeight: 900,
    marginBottom: 20,
  },
}))

const frontend = [
  { image: 'js', name: 'Javascript' },
  { image: 'bootstrap', name: 'Bootstrap' },
  { image: 'css', name: 'Css' },
  { image: 'git', name: 'Git' },
  { image: 'html5', name: 'Html 5' },
  { image: 'maui', name: 'Material UI' },
  { image: 'react', name: 'React' },
  { image: 'ejs', name: 'Ejs' },
]
const backend = [
  { image: 'js', name: 'Javascript' },
  { image: 'express', name: 'Express' },
  { image: 'git', name: 'Git' },
  { image: 'mongo', name: 'Mongodb' },
  { image: 'node', name: 'Node Js' },
]

export const Stacks = () => {
  const classes = useStyles()

  return (
    <div id='stacks'>
      <Grid container className={classes.stacks}>
        <Container maxWidth='md' className={classes.title_container}>
          <Typography variant='h4' component='h1' className={classes.title}>
            Stacks I've learned
          </Typography>
          <Fade left>
            <Grid container className={classes.title}>
              <Grid item xs={12} className={classes.item}>
                <Paper elevation={12} className={classes.paper}>
                  <Typography variant='h5' className={classes.title}>
                    {' '}
                    Frontend{' '}
                  </Typography>
                  {frontend.map((i) => (
                    <Chip
                      key={i.name}
                      variant='outlined'
                      className={classes.list}
                      label={i.name}
                      avatar={
                        <Avatar
                          variant='rounded'
                          style={{
                            backgroundColor: 'transparent',
                          }}
                        >
                          <CardMedia
                            image={`/icons/` + i.image + `.ico`}
                            component='img'
                          />
                        </Avatar>
                      }
                    />
                  ))}
                </Paper>
              </Grid>
            </Grid>
          </Fade>
          <Fade right>
            <Grid container className={classes.title}>
              <Grid item xs={12} className={classes.item}>
                <Paper elevation={12} className={classes.paper}>
                  <Typography variant='h5' className={classes.title}>
                    {' '}
                    Backend{' '}
                  </Typography>
                  {backend.map((i) => (
                    <Chip
                      variant='outlined'
                      className={classes.list}
                      key={i.name}
                      label={i.name}
                      avatar={
                        <Avatar
                          variant='rounded'
                          style={{ backgroundColor: 'transparent' }}
                        >
                          <CardMedia
                            image={`/icons/` + i.image + `.ico`}
                            component='img'
                          />
                        </Avatar>
                      }
                    />
                  ))}
                </Paper>
              </Grid>
            </Grid>
          </Fade>
          <Fade left>
            <Grid container>
              <Grid item xs={12} className={classes.item}>
                <Paper elevation={12} className={classes.paper}>
                  <Typography
                    variant='h5'
                    component='span'
                    className={clsx(classes.loading, 'loading')}
                  >
                    Ongoing
                  </Typography>
                  <Box mt={3} style={{ textAlign: 'center' }}>
                    {backend.map((i) => (
                      <Chip
                        variant='outlined'
                        className={classes.list}
                        key={i.name}
                        label={i.name}
                        avatar={
                          <Avatar
                            variant='rounded'
                            style={{ backgroundColor: 'transparent' }}
                          >
                            <CardMedia
                              image={`/icons/` + i.image + `.ico`}
                              component='img'
                            />
                          </Avatar>
                        }
                      />
                    ))}
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Fade>
        </Container>
      </Grid>
    </div>
  )
}
