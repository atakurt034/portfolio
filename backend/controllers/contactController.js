import asyncHandler from 'express-async-handler'
import nodemailer from 'nodemailer'

function validateEmail(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

export const sendMail = asyncHandler(async (req, res) => {
  try {
    const { email, name, text, subject } = req.body

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

  ${text}`,
    }

    if (email) {
      if (!validateEmail(email)) {
        res.json({ status: 'invalid email' })
      } else {
        transporter.sendMail(mail, (err, data) => {
          if (err) {
            res.json({
              status: 'fail',
            })
          } else {
            res.json({
              status: 'success',
            })
          }
        })
      }
    }
  } catch (error) {
    console.log(error)
  }
})
