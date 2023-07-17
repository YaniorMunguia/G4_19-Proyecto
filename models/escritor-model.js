"use strict"

var conn = require("../config/db-connection"),
EscritorModel = () => {};

EscritorModel.getAll = (cb) => conn.query("SELECT * FROM ESCRITOR",cb);

EscritorModel.getOne = (numero_escritor,cb) => 
        conn.query(
            "SELECT * FROM ESCRITOR WHERE NUMERO_ESCRITOR = $1", [numero_escritor], cb);
         
EscritorModel.post = (data, cb) =>
         conn.query("call public.insertar_escritor ($1,$2,$3,$4,$5,$6,$7)",
        [
            data.numero_escritor,
            data.nombre_escritor,
            data.apellidos_escritor,
            data.fecha_nacimiento,
            data.nacionalidad,
            data.cantidad_libros_escritos,
            data.email
        ],
        cb);
EscritorModel.put = (data, cb) =>
         conn.query( "call public.actualizar_escritor ($1,$2,$3,$4,$5,$6,$7)",
        [
            data.numero_escritor,
            data.nombre_escritor,
            data.apellidos_escritor,
            data.fecha_nacimiento,
            data.nacionalidad,
            data.cantidad_libros_escritos,
            data.email
        ],
        cb);             

EscritorModel.delete = (numero_escritor, cb) =>
         conn.query( "call public.eliminar_escritor ($1)", [numero_escritor], cb);
        
module.exports = EscritorModel;