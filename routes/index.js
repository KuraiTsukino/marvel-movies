// Importaciones

const express = require("express")
const router = express.Router()

const indexController = require("./../controllers/indexController")

// Rutas.

router.get("/", indexController.home)

// Exportación
module.exports = router