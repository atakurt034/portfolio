import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Kurt Anthony V. Golingay',
    email: 'atakurt034@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
]

export default users
