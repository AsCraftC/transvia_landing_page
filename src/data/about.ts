import type { AboutUs } from "@/data/interfaces";

//Imágenes de empleados
import alarconPortrait from "@/assets/employees/employee1.jpg"
import CuevasPortrait from "@/assets/employees/employee2.jpg";

//Logos de colaboraciones
import logTransvia from "@/assets/transviaLogo.png";

export const about : AboutUs = {
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
            retrato         : alarconPortrait
        },
        {
            gradoAcademico  : "Ing. Comercial",
            nombres         : "Clara Pilar",
            apellidos       : "Cuevas Machado",
            cargo           : "Gerente Finanzas",
            retrato         : CuevasPortrait
        },
        {
            gradoAcademico  : "Ing. Civil",
            nombres         : "Lucas Miguel",
            apellidos       : "Alarcon Castillo",
            cargo           : "Gerente General",
            retrato         : alarconPortrait
        },
        {
            gradoAcademico  : "Ing. Civil",
            nombres         : "Lucas Miguel",
            apellidos       : "Alarcon Castillo",
            cargo           : "Gerente General",
            retrato         : alarconPortrait
        },
        {
            gradoAcademico  : "Ing. Civil",
            nombres         : "Lucas Miguel",
            apellidos       : "Alarcon Castillo",
            cargo           : "Gerente General",
            retrato         : alarconPortrait
        },
    ],
    colaboracionesLogo : [
        logTransvia,
        logTransvia,
        logTransvia,
        logTransvia,
        logTransvia,
        logTransvia,
        logTransvia,
        logTransvia,
    ]
}
