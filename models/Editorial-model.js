"use strict"


var conn = require("../config/db-connection"),
EditorialModel = () => {};

EditorialModel.getAll = (cb) => conn.query("SELECT * FROM EDITORIAL",cb);

EditorialModel.getOne = (numeroeditorial,cb) => 
        conn.query(
            "SELECT * FROM EDITORIAL WHERE NUMEROEDITORIAL = $1", [numeroeditorial], cb);
         
EditorialModel.post = (data, cb) =>
         conn.query("call public.editorial_insert ($1,$2,$3,$4,$5,$6,$7)",
        [
            data.numeroeditorial,
            data.nombreeditorial,
            data.direccion,
            data.pais,
            data.fechadefundacion,
            data.cantidaddelibrosimpresos,
            data.numerodetelefono
        ],
        cb);
EditorialModel.put = (data, cb) =>
         conn.query( "call public.editorial_update ($1,$2,$3,$4,$5,$6,$7)",
        [
            data.numeroeditorial,
            data.nombreeditorial,
            data.direccion,
            data.pais,
            data.fechadefundacion,
            data.cantidaddelibrosimpresos,
            data.numerodetelefono
        ],
        cb);             

EditorialModel.delete = (numeroeditorial, cb) =>
         conn.query( "call public.editorial_delete ($1)", [numeroeditorial], cb);
        
module.exports = EditorialModel;