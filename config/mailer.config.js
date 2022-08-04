const nodemailer = require("nodemailer"); //Libreria de correo

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: 'mallorcaymadridinironhack@gmail.com',
      pass: 'agyukezmheqngyar', 
      //Cambiar2006
    },
  })

module.exports.sendBuyEmail = (user) => {
    transporter
        .sendMail({
          from: 'FiverIronhack<mallorcaymadridinironhack@gmail.com>',
          to: user.userId.email,
          subject: 'Realizada compra FivverIronhack',
          text: `Enhorabuena ${user.userId.name}, ha finalizado su compra`,
        }, console.log(user, "config"))
        .then(() => {
            console.log('Email enviado')
        })
        .catch(err => {
            console.log('Error al enviar email, ', err)
        }) 
}