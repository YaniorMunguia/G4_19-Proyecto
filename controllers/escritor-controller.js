'use strict'

var EscritorModel = require('../models/escritor-model'),
    EscritorController = () => {}

     EscritorController.getAll = (req, res, netx) => {
      
        EscritorModel.getAll((err, rows) => {
          if (err) 
          {
            let locals ={
              title : 'Error al consultar la base de datos',
              description : 'Error de Sintaxis SQL',
              error : err
            }
  
            res.render('error', locals)
          }
          else 
          {
            let locals = {
              title : 'Listado de escritores',
              data : rows
            }
  
          }
  
          res.status(200).send(rows.rows)
  
        }) 
  
      } 


      EscritorController.getOne = (req, res, netx) => 
      {
        let numero_escritor = req.body.numero_escritor
        console.log(numero_escritor)
  
        EscritorModel.getOne(numero_escritor, (err, rows) => {
          console.log(err, '---', rows)
          if(err)
          {
            let locals = {
              title : `Error al buscar el registro con el id: ${escritor.numero_escritor}`,
              description : "Error de Sintaxis SQL",
              error: err
  
            }
  
            res.render('error', locals)
  
          }
          else
          {
            let locals = {
              title : 'Editar Editorial',
              data : rows
            }
            res.status(200).send(rows.rows)
  
          }
  
        }) 
  
      }

      EscritorController.post = (req, res,next) => {
        let escritor = {
          numero_escritor :req.body.numero_escritor,
          nombre_escritor : req.body.nombre_escritor,
          apellidos_escritor : req.body.apellidos_escritor,
          fecha_nacimiento : req.body.fecha_nacimiento,
          nacionalidad : req.body.nacionalidad,
          cantidad_libros_escritos : req.body.cantidad_libros_escritos,
          email : req.body.email
        }
  
        console.log(escritor)
  
        EscritorModel.post(escritor, (err) => {
          if(err)
          {
            let locals = {
              title : `Error al salvar el registro con el id: ${escritor.numero_escritor}`,
              description : "Error de Sintaxis SQL",
              error : err
            }
  
            request.status(520).json(err);
  
          }
          else
          {
            res.send('Escritor Ingresado Exitosamente')
          }
        })
  
      }


      EscritorController.put = (req, res,next) => {
        let escritor = {
            numero_escritor :req.body.numero_escritor,
            nombre_escritor : req.body.nombre_escritor,
            apellidos_escritor : req.body.apellidos_escritor,
            fecha_nacimiento : req.body.fecha_nacimiento,
            nacionalidad : req.body.nacionalidad,
            cantidad_libros_escritos : req.body.cantidad_libros_escritos,
            email : req.body.email
        }
  
        console.log(escritor)
  
        EscritorModel.put(escritor, (err) => {
          if(err)
          {
            let locals = {
              title : `Error al buscar el registro con el id: ${escritor.numero_escritor}`,
              description : "Error de Sintaxis SQL",
              error : err
            }
  
            request.status(520).json(err);
  
          }
          else
          {
            res.send('Escritor Actualizado Exitosamente')
          }
        })
        
      }


      EscritorController.delete = (req, res, netx) => {
        let numero_escritor= req.body.numero_escritor
        console.log(numero_escritor)
  
        EscritorModel.delete(numero_escritor, (err, rows) =>{
          console.log(err, '---', rows)
            if(err)
            {
              let locals = {
                  title : `Error al Buscar el Registro con el id: ${escritor.numero_escritor}`,
                  description : "Error de Sisntaxis SQL",
                  error : err
              }
  
              res.render('error', locals)
  
            }
            else
            {
              res.send('Escritor Eliminado Exitosamente')
            }
  
          })
             
      }


        EscritorController.addForm = (req, res, netx) => 
    res.render('add-escritor', { title : 'Agregar escritor' })


    EscritorController.error404 = (req, res, netx) => {
        let error = new Error(),
        locals = { 
          title : 'Error 404',
          description : 'Recurso no encontrado...',
          error : error
        }
        error.status = 404
        res.render('error404', locals)
    
        netx()
    
    }
    
    module.exports = EscritorController;