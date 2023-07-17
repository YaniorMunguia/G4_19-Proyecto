"use strict"


var conn = require("../config/db-connection"),
LibrosModel = () => {};

LibrosModel.getAll = (cb) => conn.query("SELECT * FROM LIBROS",cb);

LibrosModel.getOne = (codigo_libro,cb) => 
        conn.query(
            "SELECT * FROM LIBROS WHERE CODIGO_LIBRO = $1", [codigo_libro], cb);
         
LibrosModel.post = (data, cb) =>
         conn.query("call public.sp_libros_insert ($1,$2,$3,$4,$5,$6,$7)",
        [
            data.codigo_libro,
            data.nombre_libro,
            data.nombre_escritor,
            data.fecha_publicacion,
            data.isbn,
            data.precio,
            data.editorial
        ],
        cb);
LibrosModel.put = (data, cb) =>
         conn.query( "call public.sp_libros_update ($1,$2,$3,$4,$5,$6,$7)",
        [
            data.codigo_libro,
            data.nombre_libro,
            data.nombre_escritor,
            data.fecha_publicacion,
            data.isbn,
            data.precio,
            data.editorial
        ],
        cb);             

LibrosModel.delete = (codigo_libro, cb) =>
         conn.query( "call public.sp_libros_delete ($1)", [codigo_libro], cb);
        
module.exports = LibrosModel;