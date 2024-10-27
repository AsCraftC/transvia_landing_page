export interface HomeData {
    eslogan         : string;
    estadisticas    : [
        {valor : number, etiqueta : string},
        {valor : number, etiqueta : string},
        {valor : number, etiqueta : string}
    ];
    servicios       : {id : number, rutaImagen : string, titulo : string, descripcion : string}[]
}

export interface CompanyData{
    nombreCompañia  : string;
    email           : string;
    telefono        : string;
    direccion       : string;
    ciudad          : string;
}