const express = require("express") //Libreria de node para crear un servidor web
const createError = require("http-errors") //Libreria de errores, se requiere donde vayamos a mostrar los errores 200-500

// Creamos la aplicación servidor ejecutando express como una función
const app = express()

app.set("views", __dirname + "/views")
app.set("view engine", "hbs")

app.use(express.static(`${__dirname}/public`))
app.use(express.urlencoded({ extended: false })) //coge la peticion del formulario y la carga en el req.body

//Requerimos los archivos hbs y mongodb de la carpeta config
require("./config/db.config")
require("./config/hbs.config")

const { session, loadUser } = require('./config/session.config')
app.use(session)
app.use(loadUser)

const routes = require("./config/routes.config");
app.use("/", routes)

// Errores 400
app.use((req, res, next) => {
    next(createError(404, 'Page not found'))
  });
  
// Errores 500
app.use((error, req, res, next) => {
    console.error(error);
    const message = error.message;
    const metadata = (app.get('env') === 'development') ? error : {};
    const status = error.status || 500;
    res.status(status)
      .render(`errors/500`, { message, metadata })
});

//LLamada a puerto de escucha 3000
const port = 3000;
app.listen(port, () => console.log(`App listening port ${port}, verified`))