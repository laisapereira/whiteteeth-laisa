const express = require('express')
const nodemailer = require('nodemailer')


require("dotenv").config();

const app = express()

app.use(express.json())

app.get('/', (req, res) => res.send("Hello world") )

const user = process.env.EMAIL_USER
const pass = process.env.EMAIL_PASSWORD

app.post("/email", async (req, res) => {

  const { userEmail } = req.body
  console.log(userEmail)
  const config = {
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {user, pass}
  }

    const transporter = nodemailer.createTransport(config)
    
    transporter.sendMail({
      from: user,  
      to: "laisadsilva.pereira@gmail.com",   
      subject: "WhiteTooth",
      text: "Obrigada por entrar em contato conosco, como podemos te ajudar?",

    }).then(info => {
      res.send(info)

      console.log("oi")
    }).catch(error => {
      res.send(error)
      console.log("deu erro : ", error)
    })
     
})

app.listen(3000, () => {
  console.log('Listening to port 3000...')
})








