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

//RUTA ESCRITOR
var EscritorController = require("../controllers/escritor-controller"),
  express = require("express"),
  router = express.Router();

router
  //*** ESCRITOR ***
  .get("/escritor/getall", EscritorController.getAll)
  .get("/escritor/getone/:numero_escritor", EscritorController.getOne)
  .post("/escritor/insertar/:numero_escritor", EscritorController.post)
  .put("/escritor/actualizar/:numero_escritor", EscritorController.put)
  .delete("/escritor/eliminar/:numero_escritor", EscritorController.delete)
  .use(EscritorController.error404);

module.exports = router;

