const mongoose = require('mongoose');
 
const MONGODB_URI = 'mongodb+srv://fivverIronhack:Cambiar2006@cluster0.pcyfi2s.mongodb.net/fivverironhack?retryWrites=true&w=majority'

mongoose.connect(MONGODB_URI);
 
// Cuando estemos conectados
mongoose.connection.on('connected', () => 
    console.log('Mongoose default connection open'));
 
// Si la conexcion arroja un error
mongoose.connection.on('error', err => 
    console.log(`Mongoose default connection error: ${err}`));
 
// Cuando estemos desconectados
mongoose.connection.on('disconnected', () => 
    console.log('Mongoose default connection disconnected'));
 
// Si finalizamos la conexion
process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});