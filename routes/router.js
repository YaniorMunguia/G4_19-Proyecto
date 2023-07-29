"use strict";
//RUTA LIBROS
var  LibrosController = require("../controllers/libros-controller"),
EscritorController = require("../controllers/escritor-controller"),
EditorialController = require("../controllers/Editorial-controller"),
AlquilerController = require("../controllers/alquiler-controller"),
  express = require("express"),
  router = express.Router();

router
  //**** LIBROS****
  .get("/libros/getall", LibrosController.getAll)
  .post("/libros/getone/:codigo_libro", LibrosController.getOne)
  .post("/libros/insertar/:codigo_libro", LibrosController.post)
  .put("/libros/actualizar/:codigo_libro", LibrosController.put)
  .delete("/libros/eliminar/:codigo_libro", LibrosController.delete)
  




  //*** ESCRITOR ***
  .get("/escritor/getall", EscritorController.getAll)
  .post("/escritor/getone/:numero_escritor", EscritorController.getOne)
  .post("/escritor/insertar/:numero_escritor", EscritorController.post)
  .put("/escritor/actualizar/:numero_escritor", EscritorController.put)
  .delete("/escritor/eliminar/:numero_escritor", EscritorController.delete)
  
//**** ALQUILER****
.get("/alquiler/getall", AlquilerController.getAll)
.post("/alquiler/getone/:codigo_libro", AlquilerController.getOne)
.post("/alquiler/insertar/:codigo_libro", AlquilerController.post)
.put("/alquiler/actualizar/:codigo_libro", AlquilerController.put)
.delete("/alquiler/eliminar/:codigo_libro", AlquilerController.delete)


  //*** EDITORIAL ***
  .get("/editorial/getall", EditorialController.getAll)
  .post("/editorial/getone/:numeroeditorial", EditorialController.getOne)
  .post("/editorial/insertar/:numeroeditorial", EditorialController.post)
  .put("/editorial/actualizar/:numeroeditorial", EditorialController.put)
  .delete("/editorial/eliminar/:numeroeditorial", EditorialController.delete)
  .use(EscritorController.error404)
  .use(AlquilerController.error404)
  .use(LibrosController.error404)
  .use(EditorialController.error404);

module.exports = router;


