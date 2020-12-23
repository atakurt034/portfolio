import React, { useState, useEffect } from 'react'

import Typewriter from 'typewriter-effect'
import { setImage } from '../../actions/aboutActions'
import { useDispatch } from 'react-redux'

import './twStyles.css'

export const TypeWriter = ({ exit, enter }) => {
  const dispatch = useDispatch()
  const [change, setChange] = useState(0)

  useEffect(() => {
    if (change === 1) {
      dispatch(setImage('/images/profile2.jpg'))
    } else if (change === 2) {
      dispatch(setImage('/images/profile3.jpg'))
    } else {
      dispatch(setImage('/images/profile.jpg'))
    }
  }, [dispatch, change])

  return (
    <>
      <Typewriter
        options={{ loop: true, cursorClassName: 'cursor' }}
        onInit={(typewriter) => {
          typewriter
            .pauseFor(500)
            .callFunction(() => setChange(0))
            .pauseFor(300)
            .callFunction(() => enter())
            .typeString(
              '<span class="string">Hi my name is <span class="name">Kurt Anthony Golingay</span></span>'
            )
            .pauseFor(1500)
            .deleteAll()
            .typeString(
              '<span class="string">I am a fullstack developer</span>'
            )
            .pauseFor(1500)
            .callFunction(() => exit())
            .pauseFor(500)
            .deleteChars(20)
            .callFunction(() => setChange(1))
            .callFunction(() => enter())
            .typeString(
              '<span class="string">lso a <span class="blue">nurse</span> but my passion is</span>'
            )
            .deleteAll()
            .pauseFor(100)
            .typeString('<span class="string">.</span>')
            .pauseFor(100)
            .typeString('<span class="string">.</span>')
            .pauseFor(100)
            .typeString('<span class="string">.</span>')
            .typeString('<span class="red string">CODING</span>')
            .pauseFor(1000)
            .deleteAll()
            .pauseFor(500)
            .typeString(
              '<span class="string"> <span class="red">LEARNING</span></span>'
            )
            .pauseFor(500)
            .callFunction(() => exit())
            .pauseFor(500)
            .deleteChars(8)
            .callFunction(() => setChange(2))
            .pauseFor(300)
            .callFunction(() => enter())
            .typeString(
              '<span class="string">and <strong class="red">EATING</strong></span>'
            )
            .pauseFor(2000)
            .callFunction(() => exit())
            .start()
        }}
      />
    </>
  )
}
