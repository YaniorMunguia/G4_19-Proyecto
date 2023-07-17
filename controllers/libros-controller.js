'use strict'

var LibrosModel = require('../models/libros-model'),
    LibrosController = () => {}

     LibrosController.getAll = (req, res, netx) => {
      
        LibrosModel.getAll((err, rows) => {
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
              title : 'Listado de Libros',
              data : rows
            }
  
          }
  
          res.status(200).send(rows.rows)
  
        }) 
  
      } 


      LibrosController.getOne = (req, res, netx) => {
        let codigo_libro = req.body.codigo_libro
        console.log(codigo_libro)
  
        LibrosModel.getOne(codigo_libro, (err, rows) => {
          console.log(err, '---', rows)
          if(err){
            let locals = {
              title : `Error al buscar el registro con el id: ${libros.codigo_libro}`,
              description : "Error de Sintaxis SQL",
              error: err
  
            }
  
            res.render('error', locals)
  
          }
          else{
            let locals = {
              title : 'Editar Libro',
              data : rows
            }
            res.status(200).send(rows.rows)
  
          }
  
        }) 
  
      }

      LibrosController.post = (req, res,next) => {
        let libros = {
          codigo_libro :req.body.codigo_libro,
          nombre_libro : req.body.nombre_libro,
          nombre_escritor : req.body.nombre_escritor,
          fecha_publicacion : req.body.fecha_publicacion,
          isbn: req.body.isbn,
          precio : req.body.precio,
          editorial : req.body.editorial
        }
  
        console.log(libros)
  
        LibrosModel.post(libros, (err) => {
          if(err)
          {
            let locals = {
              title : `Error al salvar el registro con el id: ${libros.codigo_libro}`,
              description : "Error de Sintaxis SQL",
              error : err
            }
  
            request.status(520).json(err);
  
          }
          else
          {
            res.send('Libro Ingresado Exitosamente')
          }
        })
  
      }


      LibrosController.put = (req, res,next) => {
        let libros = {
            codigo_libro :req.body.codigo_libro,
            nombre_libro : req.body.nombre_libro,
            nombre_escritor : req.body.nombre_escritor,
            fecha_publicacion : req.body.fecha_publicacion,
            isbn: req.body.isbn,
            precio : req.body.precio,
            editorial : req.body.editorial
        }
  
        console.log(libros)
  
        LibrosModel.put(libros, (err) => {
          if(err)
          {
            let locals = {
              title : `Error al buscar el registro con el id: ${libros.codigo_libro}`,
              description : "Error de Sintaxis SQL",
              error : err
            }
  
            request.status(520).json(err);
  
          }
          else
          {
            res.send('Libro Actualizado Exitosamente')
          }
        })
        
      }


      LibrosController.delete = (req, res, netx) => {
        let codigo_libro= req.body.codigo_libro
        console.log(codigo_libro)
  
        LibrosModel.delete(codigo_libro, (err, rows) =>{
          console.log(err, '---', rows)
            if(err)
            {
              let locals = {
                  title : `Error al Buscar el Registro con el id: ${libros.codigo_libro}`,
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


      LibrosController.addForm = (req, res, netx) => 
    res.render('add-Libro', { title : 'Agregar Libro' })


    LibrosController.error404 = (req, res, netx) => {
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
    
    module.exports = LibrosController;
  



  
  
  
  