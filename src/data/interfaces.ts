export interface CompanyData{
    nombreCompañia  : string;
    email           : string;
    telefono        : string;
    direccion       : string;
    ciudad          : string;
}

export interface HomeData {
    eslogan         : string;
    estadisticas    : [
        {valor : number, etiqueta : string},
        {valor : number, etiqueta : string},
        {valor : number, etiqueta : string}
    ];
    servicios       : {id : number, rutaImagen : string, titulo : string, descripcion : string}[]
}


export interface aboutUs {
    frase           : string;
    descripcion     : string;
    hitos           : {
        mes         : "Ene" | "Feb" | "Mar" | "Abr" | "May" | "Jun" | "Jul" | "Ago" | "Sep" | "Oct" | "Nov" | "Dic" | "Xxx";
        año         : number | "20XX";
        titulo      : string;
        descripcion : string;
    }[],
    empleados       : {
        gradoAcademico  : string;
        nombres         : string;
        apellidos       : string;
        cargo           : string;
        rutaRetrato     : string;
    }[],
    colaboracionesLogo  : string[]
}

export interface projectsI{
    projects    :{
        imagenMuestra   : string;
        nombreProyecto  : string;
        direccion       : string;
        fechaInicio     : Date;
        duracion        : number;
        impacto         : string;
    }[]
}
