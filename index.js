// 1. Importaciones.

const express = require("express")
const app = express()
const hbs = require ("hbs")

const connectDB = require("./config/db")

require("dotenv").config()

// 2. Middlewares.

connectDB()

// Archivos estáticos.
app.use(express.static("public"))

// Vistas con hbs.
app.set("views", __dirname +"/views")
app.set("view engine", "hbs")

// Partials.
hbs.registerPartials(__dirname + "/views/partials")

// Gestión de los datos de los formularios.
app.use(express.urlencoded ({extended: true}))

// 3. Rutas.

// Ruta de home.
app.use("/", require("./routes/index"))

// 4. Servidor.
app.listen(process.env.PORT, () => {
    console.log(
        `Servidor conectado en puerto http://localhost:${process.env.PORT}`,
    );
})
