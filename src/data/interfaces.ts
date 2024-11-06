
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
    servicios       : {
        id          : number,
        imagen      : ImageMetadata,
        titulo      : string,
        descripcion : string
    }[]
}


export interface AboutUs {
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
        retrato         : ImageMetadata;
    }[],
    colaboracionesLogo  : ImageMetadata[]
}

export interface Projects{
    projects    :{
        imagenMuestra   : ImageMetadata;
        nombreProyecto  : string;
        direccion       : string;
        fechaInicio     : Date;
        duracion        : number;
        impacto         : string;
    }[]
}

export interface Values {
    mision      : {
        titulo      : string;
        descripcion : string;
        imagen      : ImageMetadata;
        altImage    : string;
    }
    vision      : {
        titulo      : string;
        descripcion : string;
        imagen      : ImageMetadata;
        altImage    : string;
    }
    valores     : {
        numero      : number;
        titulo      : string;
        descripcion : string;
        icono       : ImageMetadata;
        imagen      : ImageMetadata;
    }[]
}
