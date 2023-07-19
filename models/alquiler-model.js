"use strict"


var conn = require("../config/db-connection"),
AlquilerModel = () => {};

AlquilerModel.getAll = (cb) => conn.query("SELECT * FROM ALQUILER",cb);

AlquilerModel.getOne = (codigo_libro,cb) => 
        conn.query(
            "SELECT * FROM ALQUILER WHERE CODIGO_LIBRO = $1", [codigo_libro], cb);
         
AlquilerModel.post = (data, cb) =>
         conn.query("call public.sp_alquiler_insert ($1,$2,$3,$4,$5,$6,$7)",
        [
            data.codigo_libro,
            data.nombre_libro,
            data.fecha_alquiler,
            data.nombre_cliente,
            data.direccion,
            data.dias_alquilar,
            data.precio_alquiler
        ],
        cb);
AlquilerModel.put = (data, cb) =>
         conn.query( "call public.sp_alquiler_update ($1,$2,$3,$4,$5,$6,$7)",
        [
            data.codigo_libro,
            data.nombre_libro,
            data.fecha_alquiler,
            data.nombre_cliente,
            data.direccion,
            data.dias_alquilar,
            data.precio_alquiler
        ],
        cb);             

AlquilerModel.delete = (codigo_libro, cb) =>
         conn.query( "call public.sp_alquiler_delete ($1)", [codigo_libro], cb);
        
module.exports = AlquilerModel;