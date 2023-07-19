'use strict'

var AlquilerModel = require('../models/alquiler-model'),
    AlquilerController = () => {}

     AlquilerController.getAll = (req, res, netx) => {
      
        AlquilerModel.getAll((err, rows) => {
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
              title : 'Listado de alquileres',
              data : rows
            }
  
          }
  
          res.status(200).send(rows.rows)
  
        }) 
  
      } 


      AlquilerController.getOne = (req, res, netx) => {
        let codigo_libro = req.body.codigo_libro
        console.log(codigo_libro)
  
        AlquilerModel.getOne(codigo_libro, (err, rows) => {
          console.log(err, '---', rows)
          if(err){
            let locals = {
              title : `Error al buscar el registro con el id: ${alquiler.codigo_libro}`,
              description : "Error de Sintaxis SQL",
              error: err
  
            }
  
            res.render('error', locals)
  
          }
          else{
            let locals = {
              title : 'Editar alquiler',
              data : rows
            }
            res.status(200).send(rows.rows)
  
          }
  
        }) 
  
      }

      AlquilerController.post = (req, res,next) => {
        let alquiler = {
          codigo_libro :req.body.codigo_libro,
          nombre_libro : req.body.nombre_libro,
          fecha_alquiler : req.body.fecha_alquiler,
          nombre_cliente : req.body.nombre_cliente,
          direccion : req.body.direccion,
          dias_alquilar : req.body.dias_alquilar,
          precio_alquiler : req.body.precio_alquiler
        }
  
        console.log(alquiler)
  
     AlquilerModel.post(alquiler, (err) => {
          if(err)
          {
            let locals = {
              title : `Error al salvar el registro con el id: ${alquiler.codigo_libro}`,
              description : "Error de Sintaxis SQL",
              error : err
            }
  
            request.status(520).json(err);
  
          }
          else
          {
            res.send('Alquiler Ingresado Exitosamente')
          }
        })
  
      }


      AlquilerController.put = (req, res,next) => {
        let alquiler = {
            codigo_libro :req.body.codigo_libro,
          nombre_libro : req.body.nombre_libro,
          fecha_alquiler : req.body.fecha_alquiler,
          nombre_cliente : req.body.nombre_cliente,
          direccion : req.body.direccion,
          dias_alquilar : req.body.dias_alquilar,
          precio_alquiler : req.body.precio_alquiler
        }
  
        console.log(alquiler)
  
        AlquilerModel.put(alquiler, (err) => {
          if(err)
          {
            let locals = {
              title : `Error al buscar el registro con el id: ${alquiler.codigo_libro}`,
              description : "Error de Sintaxis SQL",
              error : err
            }
  
            request.status(520).json(err);
  
          }
          else
          {
            res.send('Alquiler Actualizado Exitosamente')
          }
        })
        
      }


      AlquilerController.delete = (req, res, netx) => {
        let codigo_libro= req.body.codigo_libro
        console.log(codigo_libro)
  
        AlquilerModel.delete(codigo_libro, (err, rows) =>{
          console.log(err, '---', rows)
            if(err)
            {
              let locals = {
                  title : `Error al Buscar el Registro con el id: ${alquiler.codigo_libro}`,
                  description : "Error de Sisntaxis SQL",
                  error : err
              }
  
              res.render('error', locals)
  
            }
            else
            {
              res.send('Alquiler Eliminado Exitosamente')
            }
  
          })
             
      }


      AlquilerController.addForm = (req, res, netx) => 
    res.render('add-Alquiler', { title : 'Agregar Alquiler' })


    AlquilerController.error404 = (req, res, netx) => {
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
    
    module.exports = AlquilerController;
  