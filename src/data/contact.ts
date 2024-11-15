import type { CompanyData } from "@/data/interfaces";

import retratoAgente from "@/assets/contact/legalAgent.jpg";

export const companyData : CompanyData = {
    nombreCompañia  : "Transvia Ingeniería",
    email           : "direccion@dominio.cl",
    telefono        : "+56 9 1234 5678",
    oficina         : "Oficina 704",
    direccion       : "Vicuña Mackenna 678",
    ciudad          : "Temuco, Chile",
    enlaceTerminos  : "#",
    enlaceInstagram : "#",
    enlaceLinkedin  : "#",
    representante   : {
        nombre          : "Marcelo Ceballos Ribas",
        telefono        : "+56 9 8765 4321",
        email           : "direccion2@dominio.cl",
        retrato         : retratoAgente
    }
}