import React, { useEffect, useState } from 'react'
import { makeStyles, CardMedia, Grid, Container, Box } from '@material-ui/core'
import { TypeWriter } from '../../components/typewriter/Typewriter'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import './aStyles.css'
import { Fade } from '../../components/Transitions'

const useStyles = makeStyles((theme) => ({
  about: {
    height: '100%',
  },
  imagewrapper: {
    height: '55vh',
    margin: 'auto',
    position: 'relative',
    padding: 20,
  },
  typewriter: {
    textAlign: 'center',
    margin: 'auto',
    padding: 10,
    [theme.breakpoints.down('xs')]: {
      margin: '0 auto',
    },
  },
  image: {
    height: '100%',
    borderRadius: '100%',
  },
}))

export const About = () => {
  const classes = useStyles()
  const [img, setImg] = useState('/images/profile.jpg')
  const [load, setLoad] = useState(false)

  const setImage = useSelector((state) => state.setImage)
  const { image, loading, error } = setImage

  useEffect(() => {
    if (image) {
      setImg(image)
    }
  }, [image])

  return (
    <div id='about'>
      <Container maxWidth='md'>
        <div id='page' className={classes.about}>
          <Grid container>
            <Grid item xs={12} md={6} className={classes.imagewrapper}>
              <Fade in={load}>
                <CardMedia
                  className={clsx(classes.image, 'image')}
                  image={img}
                  component='img'
                />
              </Fade>
            </Grid>
            <Grid item xs={12} md={6} className={classes.typewriter}>
              <Container>
                <TypeWriter
                  enter={() => setLoad(true)}
                  exit={() => setLoad(false)}
                />
              </Container>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}
