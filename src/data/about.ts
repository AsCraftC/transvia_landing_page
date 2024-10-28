import type { aboutUs } from "../data/interfaces";

//Imágenes de empleados
import alarconPortrait from "../assets/employees/employee1.jpg"
import CuevasPortrait from "../assets/employees/employee2.jpg";

//Logos de colaboraciones
import logTransvia from "../assets/transviaLogo.png";

export const about : aboutUs = {
    frase       : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor",
    descripcion : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",

    hitos       : [
        {
            mes         : "Xxx",
            año         : "20XX",
            titulo      : "Hito más reciente",
            descripcion : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            mes         : "Xxx",
            año         : "20XX",
            titulo      : "Hito 2",
            descripcion : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            mes         : "Xxx",
            año         : "20XX",
            titulo      : "Hito 1",
            descripcion : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
        {
            mes         : "Xxx",
            año         : "20XX",
            titulo      : "Fundación",
            descripcion : "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        },
    ],

    empleados   : [
        {
            gradoAcademico  : "Ing. Civil",
            nombres         : "Lucas Miguel",
            apellidos       : "Alarcon Castillo",
            cargo           : "Gerente General",
            rutaRetrato     : alarconPortrait.src
        },
        {
            gradoAcademico  : "Ing. Comercial",
            nombres         : "Clara Pilar",
            apellidos       : "Cuevas Machado",
            cargo           : "Gerente Finanzas",
            rutaRetrato     : CuevasPortrait.src
        },
        {
            gradoAcademico  : "Ing. Civil",
            nombres         : "Lucas Miguel",
            apellidos       : "Alarcon Castillo",
            cargo           : "Gerente General",
            rutaRetrato     : alarconPortrait.src
        },
        {
            gradoAcademico  : "Ing. Civil",
            nombres         : "Lucas Miguel",
            apellidos       : "Alarcon Castillo",
            cargo           : "Gerente General",
            rutaRetrato     : alarconPortrait.src
        },
        {
            gradoAcademico  : "Ing. Civil",
            nombres         : "Lucas Miguel",
            apellidos       : "Alarcon Castillo",
            cargo           : "Gerente General",
            rutaRetrato     : alarconPortrait.src
        },
    ],
    colaboracionesLogo : [
        logTransvia.src,
        "",
        "",
        "",
        "",
        "",
        "",
        "",
    ]
}
