db.libros.drop()
db.libros.insertMany([
/** Estructura de los documentos de la colección libros */

	{
	_id:1,
	nombre:"Cronica de una muerte anunciada",
	codautor:100,
	editorial:"DEBOLSILLO", 
	fecha: new Date("2020-10-01"),
	ISBN:"9788497592437",
	precio:{tapadura:16.05, tapablanda:9.95},
	formato: ["Tapa dura", "Tapa blanda"]
	},

	{
	_id:2,
	nombre:"Cien años de soledad",
	codautor:100,
	editorial:"DEBOLSILLO",
	fecha: new Date("2020-10-01"),
	ISBN:"9788497592208",
	precio:{tapadura:13.2, tapablanda:9.45},
	formato: ["Tapa dura", "Tapa blanda"]
	},

	{
	_id:3,
	nombre:"Todos los cuentos",
	codautor:100,
	editorial:"SALAMANCA",
	fecha: new Date("2020-10-01"),
	ISBN:"9788490322765",
	precio:{tapadura:20.8, tapablanda:10.4, ebook:6.9},
	formato: ["Tapa dura", "Tapa blanda", "eBook"]
	},

	{
	_id:4,
	nombre:"Noticia de un secuestro",
	codautor:100,
	editorial:"LITERATURA RANDOM HOUSE",
	fecha: new Date("2002-10-10"),
	ISBN:"9788439701095",
	precio:{tapadura:16},
	formato: ["Tapa dura"]
	},

	{
	_id:5,
	nombre:"1984",
	codautor:101,
	editorial:"DEBOLSILLO",
	fecha: new Date("2020-12-26"),
	ISBN:"9788499890944",
	precio:{tapadura:12.3, tapablanda:9.5, ebook:5.7},
	formato: ["Tapa dura", "Tapa blanda", "eBook"]
	},

	{
	_id:6,
	nombre:"Rebelión en la granja",
	codautor:101,
	editorial:"DEBOLSILLO",
	fecha: new Date("2020-10-01"),
	ISBN:"9788499890951",
	precio:{tapadura:12.3, tapablanda:9.8, ebook:4.7},
	formato: ["Tapa dura", "Tapa blanda", "eBook"]
	},

	{
	_id:7,
	nombre:"IT",
	codautor:102,
	editorial:"DEBOLSILLO",
	fecha: new Date("2016-02-25"),
	ISBN:"9788497593793",
	precio:{tapablanda:12.3, ebook:8.5},
	formato: ["Tapa blanda", "eBook"]
	},

	{
	_id:8,
	nombre:"Carrie",
	codautor:102,
	editorial:"DEBOLSILLO",
	fecha: new Date("2018-06-15"),
	ISBN:"9788497595698",
	precio:{tapablanda:10},
	formato: ["Tapa blanda"]
	},

	{
	_id:9,
	nombre:"Doctor Sueño",
	codautor:102,
	editorial:"DEBOLSILLO",
	fecha: new Date("2020-10-01"),
	ISBN:"9788490622858",
	precio:{tapadura:22, tapablanda:12, ebook:6.5},
	formato: ["Tapa dura", "Tapa blanda", "eBook"]
	},

	{
	_id:10,
	nombre:"La chica invisible",
	codautor:103,
	editorial:"PLANETA",
	fecha: new Date("2021-03-03"),
	ISBN:"9788408239147",
	precio:{tapablanda:9.45, ebook:7.1},
	formato: ["Tapa blanda","eBook"]
	},

	{
	_id:11,
	nombre:"El puzle de cristal",
	codautor:103,
	editorial:"PLANETA",
	fecha: new Date("2021-03-03"),
	ISBN:"9788408239154",
	precio:{tapablanda:9.45, ebook:7.3},
	formato: ["Tapa blanda", "eBook"]
	},

	{
	_id:12,
	nombre:"La promesa de Julia",
	codautor:103,
	editorial:"PLANETA",
	fecha: new Date("2021-03-03"),
	ISBN:"9788408239178",
	precio:{tapablanda:9.45, ebook:7.3},
	formato: ["Tapa blanda", "eBook"]
	},

	{
	_id:13,
	nombre:"Reina Roja",
	codautor:104,
	editorial:"EDICIONES B",
	fecha: new Date("2018-11-08"),
	ISBN:"9788466664417",
	precio:{tapadura:19.85, ebook:4.7},
	formato: ["Tapa dura", "eBook"]
	},

	{
	_id:14,
	nombre:"Rey Blanco",
	codautor:104,
	editorial:"EDICIONES B",
	fecha: new Date("2020-11-05"),
	ISBN:"9788466668545",
	precio:{tapadura:19.85, ebook:4.7},
	formato: ["Tapa dura", "eBook"]
	},

	{
	_id:15,
	nombre:"Loba negra",
	codautor:104,
	editorial:"EDICIONES B",
	fecha: new Date("2019-10-24"),
	ISBN:"9788466666497",
	precio:{tapadura:18.95, ebook:5.3},
	formato: ["Tapa dura", "eBook"]
	},

	{
	_id:16,
	nombre:"Espía de Dios",
	codautor:104,
	editorial:"EDICIONES B",
	fecha: new Date("2021-01-28"),
	ISBN:"9788413142630",
	precio:{tapablanda:9.55},
	formato: ["Tapa blanda"]
	},

])

db.autores.drop()
db.autores.insertMany([
/** Estructura de la colección autores*/
	{
	_id:200,
	codautor:100,
	nombreAutor:"Gabriel Garcia Marquez"
	},

	{
	_id:201, codautor:101, nombreAutor:"George Orwell"
	},

	{
	_id:202, codautor:102, nombreAutor:"Stephen King"
	},

	{
	_id:203, codautor:103, nombreAutor:"Blue Jeans"
	},

	{
	_id:204, codautor:104, nombreAutor:"Juan Gómez-Jurado"
	},
])

db.almacen.drop()
db.almacen.insertMany([
/** Estructura de la colección almacén*/
	{
	_id:300,
	cautor: 100,
	ISBN:"9788497592437",
	existencia: { tblanda:3 , tdura:12} 
	},
	
	{
	_id:301, cautor: 100, ISBN:"9788497592208", existencia: { tblanda:12 , tdura:11} 
	},

	{
	_id:302, cautor: 100, ISBN:"9788439701095", existencia: { tblanda:15 , tdura:7}
	},

	{
	_id:303, cautor: 100, ISBN:"9788490322765", existencia: { tblanda:0 ,tdura:6}
	},

	{
	_id:304, cautor: 101, ISBN:"9788499890944", existencia: { tblanda:3 , tdura:8}
	},

	{
	_id:305, cautor: 101, ISBN:"9788499890951", existencia: { tblanda:13 , tdura:4}
	},

	{
	_id:306, cautor: 102, ISBN:"9788497593793", existencia: { tblanda:11, tdura:0 }
	},

	{
	_id:307, cautor: 102, ISBN:"9788497595698", existencia: { tblanda:4, tdura:0}
	},

	{
	_id:308, cautor: 102, ISBN:"9788490622858", existencia: { tblanda:9 , tdura:4}
	},

	{
	_id:309, cautor: 103, ISBN:"9788408239147", existencia: { tblanda:16, tdura:0}
	},

	{
	_id:310, cautor: 103, ISBN:"9788408239154", existencia: { tblanda:12, tdura:0}
	},

	{
	_id:311, cautor: 103, ISBN:"9788408239178", existencia: { tblanda:5, tdura:0}
	},

	{
	_id:312, cautor: 104, ISBN:"9788466664417", existencia: { tblanda:0, tdura:5}
	},

	{
	_id:313, cautor: 104, ISBN:"9788466668545", existencia: {tblanda:0 , tdura:12}
	},

	{
	_id:314, cautor: 104, ISBN:"9788466666497", existencia: { tblanda:0, tdura:7}
	},

	{
	_id:315, cautor: 104, ISBN:"9788413142630", existencia: { tblanda:6, tdura:0}
	},

])

