"use strict";
//RUTA LIBROS
var  LibrosController = require("../controllers/libros-controller"),
  express = require("express"),
  router = express.Router();

router
  //**** LIBROS****
  .get("/libros/getall", LibrosController.getAll)
  .get("/libros/getone/:codigo_libro", LibrosController.getOne)
  .post("/libros/insertar/:codigo_libro", LibrosController.post)
  .put("/libros/actualizar/:codigo_libro", LibrosController.put)
  .delete("/libros/eliminar/:codigo_libro", LibrosController.delete)
  .use(LibrosController.error404);

module.exports = router;

