/**Queremos saber que libros tienen el formato eBook */
db.libros.aggregate([
    {
        $unwind: "$formato"
    },
    {
        $lookup:{
            from: "autores",
            localField:"codautor",
            foreignField:"codautor",
            as: "autor"
        }
    },
    {
        $match: {
            $and: [
                {$expr:{$gte:[{$year: "$fecha"},2016]}},
                {formato:"eBook"}
            ]
        }
    },
    {
        $project: {
            _id:0,
            autor:1,
            nombre:1,
            fecha:1,
            ISBN:1,
            formato:1,
            "precio.ebook":1,
        }
    },
    {
        $sort: {
            "nombre":1
        }
    }
])

/**Queremos saber el valor de la venta total de cada libro si se vendiesen todas las existencias disponibles    */

db.libros.aggregate([
    {
        $lookup: {
            from: "almacen",
            localField:"ISBN",
            foreignField:"ISBN",
            as: "idalmacen"
        }   
    },
    {
        $set:{
            existblanda:"$idalmacen.existencia.tblanda",
            existdura:"$idalmacen.existencia.tdura",
        }
    },
    {
        $addFields: {
            Totaltblanda: {$sum:{$multiply:["$precio.tapablanda", {$arrayElemAt:["$existblanda",0]} ]}},
            Totaltdura: {$sum:{$multiply:["$precio.tapadura", {$arrayElemAt:["$existdura",0]}]}},
        }
      },
    {
        $project:{
            _id:0,
            nombre:1,
            codautor:1,
            Total:{$round:[ {$sum:["$Totaltblanda","$Totaltdura"]},2]},
        }
          
    },
    {
        $lookup:{
            from: "autores",
            localField:"codautor",
            foreignField:"codautor",
            as: "idautor"
        }
    },
    {
        $project:{
            codautor:"$codautor",
            autor:"$idautor.nombreAutor",
            nombre:1,
            Total:1
        }
    },
    {  
        $sort: {
            "autor":1
        }
    }   
]).pretty()

/**Cantidad de libros dependiendo del año */
db.libros.aggregate([
    {
        $lookup:{
            from: "autores",
            localField:"codautor",
            foreignField:"codautor",
            as: "idautor"
        }
    },
    {
        $group: {
            _id:{
               año:{$year:"$fecha"},
               editorial:"$editorial"
            },
            "ISBN":{$sum:1}
        }
    } ,
    {
        $project:{
            _id:1,
            libros:"$ISBN"
        }
    },
    {
        $sort:{año:1}
    }
]).pretty()

/**Omitimos los 6 primeros ficheros y consultamos entre los 6 siguientes*/

db.libros.aggregate([
    {
        $skip:6
    },
    {
        $limit:12
    },
    {
        $unwind:"$formato"
    },
    {
        $match:{
            $and:[
            {$expr: {$eq: ["$editorial", "DEBOLSILLO"]}},
            {$expr: {$ne: ["$formato", "Tapa blanda"]}}
            ]}
    },
    {
        $project:{
            "nombre":1,
            "editorial":1,
            "formato":1,
            "fecha":1

        }
    }
])