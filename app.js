import express, { json } from 'express';
import { createTransport } from 'nodemailer';
import cors from 'cors';

import path from 'path'
import { fileURLToPath } from 'url';

import 'dotenv/config'

const app = express();

app.use(cors());
app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'));
});

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

    const transporter = createTransport(config)
    
    transporter.sendMail({
      from: user,  
      to: userEmail,   
      subject: "WhiteTooth",
      text: "Obrigada por entrar em contato conosco, como podemos te ajudar?",

    }).then(info => {
      res.send(info)

    }).catch(error => {
      res.send(error)
      console.log("Erro ", error)
    })
     
})

app.listen(3000, () => {
  console.log('Listening to port 3000...')
})








