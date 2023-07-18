'use strict'

var EditorialModel = require('../models/Editorial-model'),
    EditorialController = () => {}

     EditorialController.getAll = (req, res, netx) => {
      
        EditorialModel.getAll((err, rows) => {
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
              title : 'Listado de editoriales',
              data : rows
            }
  
          }
  
          res.status(200).send(rows.rows)
  
        }) 
  
      } 


      EditorialController.getOne = (req, res, netx) => 
      {
        let numeroeditorial = req.body.numeroeditorial
        console.log(numeroeditorial)
  
        EditorialModel.getOne(numeroeditorial, (err, rows) => {
          console.log(err, '---', rows)
          if(err)
          {
            let locals = {
              title : `Error al buscar el registro con el id: ${editorial.numeroeditorial}`,
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

      EditorialController.post = (req, res,next) => {
        let editorial = {
          numeroeditorial: req.body.numeroeditorial,
          nombreeditorial: req.body.nombreeditorial,
          direccion: req.body.direccion,
          pais: req.body.pais,
          fechadefundacion: req.body.fechadefundacion,
          cantidaddelibrosimpresos: req.body.cantidaddelibrosimpresos,
          numerodetelefono: req.body.numerodetelefono
        }
  
        console.log(editorial)
  
        editorialModel.post(editorial, (err) => {
          if(err)
          {
            let locals = {
              title : `Error al salvar el registro con el id: ${editorial.numeroeditorial}`,
              description : "Error de Sintaxis SQL",
              error : err
            }
  
            request.status(520).json(err);
  
          }
          else
          {
            res.send('Editorial Ingresado Exitosamente')
          }
        })
  
      }


      EditorialController.put = (req, res,next) => {
        let editorial = {
            numeroeditorial: req.body.numeroeditorial,
            nombreeditorial: req.body.nombreeditorial,
            direccion: req.body.direccion,
            pais: req.body.pais,
            fechadefundacion: req.body.fechadefundacion,
            cantidaddelibrosimpresos: req.body.cantidaddelibrosimpresos,
            numerodetelefono: req.body.numerodetelefono
        }
  
        console.log(editorial)
  
        EditorialModel.put(editorial, (err) => {
          if(err)
          {
            let locals = {
              title : `Error al buscar el registro con el id: ${editorial.numeroeditorial}`,
              description : "Error de Sintaxis SQL",
              error : err
            }
  
            request.status(520).json(err);
  
          }
          else
          {
            res.send('Editorial Actualizado Exitosamente')
          }
        })
        
      }


      EditorialController.delete = (req, res, netx) => {
        let numeroeditorial= req.body.numeroeditorial
        console.log(numeroeditorial)
  
        EditorialModel.delete(numeroeditorial, (err, rows) =>{
          console.log(err, '---', rows)
            if(err)
            {
              let locals = {
                  title : `Error al Buscar el Registro con el id: ${editorial.numeroeditorial}`,
                  description : "Error de Sisntaxis SQL",
                  error : err
              }
  
              res.render('error', locals)
  
            }
            else
            {
              res.send('Libro Eliminado Exitosamente')
            }
  
          })
             
      }


          EditorialController.addForm = (req, res, netx) => 
        res.render('add-editorial', { title : 'Agregar editorial' })


    EditorialController.error404 = (req, res, netx) => {
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
    
    module.exports = EditorialController;