import asyncHandler from 'express-async-handler'
import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import Server from '../models/serverStats.js'
import User from '../models/users.js'
import mongoose from 'mongoose'
dotenv.config()

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export const sendMail = asyncHandler(async (req, res) => {
  try {
    const ttl = 3600000
    const { email, name, message, subject } = req.body

    const transport = {
      //all of the configuration for making a site send an email.

      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    }
    const transporter = nodemailer.createTransport(transport)
    transporter.verify((error, success) => {
      if (error) {
        //if error happened code ends here
        console.error(error)
      } else {
        //this means success
        console.log('users ready to mail myself')
      }
    })

    const mail = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: subject,
      text: `
  from:
  ${name} 

  contact: ${email}

  message: 

  ${message}`,
    }

    const now = new Date()
    let user = await User.findOne({ email: email })

    if (email) {
      if (!validateEmail(email)) {
        res.json({ status: 'invalid email' })
      } else {
        if (user) {
          if (user.time < now.getTime()) {
            user.name = name
            user.email = email
            user.message = message
            user.time = now.getTime() + ttl

            const updated = await user.save()
            transporter.sendMail(mail, (err, data) => {
              if (err) {
                res.json({
                  status: 'fail',
                  valid: false,
                  data: updated,
                })
              } else {
                res.json({ status: 'success', valid: true, data: updated })
              }
            })
          } else {
            res.json({ valid: false, data: user })
          }
        } else {
          const createdUser = await User.create({
            name: name,
            email: email,
            message: message,
            time: now.getTime(),
          })
          if (createdUser) {
            transporter.sendMail(mail, (err, data) => {
              if (err) {
                res.json({
                  status: 'fail',
                  valid: false,
                  data: createdUser,
                })
              } else {
                res.json({ status: 'success', valid: true, data: createdUser })
              }
            })
          }
        }

        await Server.findByIdAndUpdate(
          process.env.SERVER_ID,
          { $inc: { emailsSentCount: 1 } },
          { new: true }
        )
      }
    }
  } catch (error) {
    console.log(error)
  }
})

export const addEmailTime = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body
  const now = new Date()
  let user = await User.find({
    email: email,
  })

  if (user.length > 0) {
    if (user.time < now.getTime()) {
      user = { time: now.getTime() + ttl, email, message }
      updateUser = user.save()
      res.json({ status: 'success', data: updateUser })
    } else {
      res.json({ status: 'fail', data: user })
    }
  } else {
    const createdUser = await User.create({
      name: name,
      email: email,
      message: message,
      time: now.getTime(),
    })
    if (createdUser) {
      res.status(201).json({ status: 'success', data: createdUser })
    }
  }
})
