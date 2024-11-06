import type { Values } from "@/data/interfaces.ts";

import missionImage from "@/assets/values/mision.jpg";
import visionImage from "@/assets/values/vision.jpg";

//Imágenes Valores
import valueImage1 from "@/assets/values/value1.jpg";

//Iconos Valores
import valueIcon1 from "@/assets/values/global-refresh.svg";

export const values : Values = {
    mision      : {
        titulo      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imagen      : missionImage,
        altImage    : "Muestra de nuestra misión",
    },
    vision      : {
        titulo      : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        imagen      : visionImage,
        altImage    : "Muestra de nuestra visión",
    },
    valores     : [
        {
            numero      : 1,
            titulo      : "Valor 1",
            descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            icono       : valueIcon1,
            imagen      : valueImage1,
        },
        {
            numero      : 2,
            titulo      : "Valor 2",
            descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            icono       : valueIcon1,
            imagen      : valueImage1,
        },
        {
            numero      : 3,
            titulo      : "Valor 3",
            descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            icono       : valueIcon1,
            imagen      : valueImage1,
        },
        {
            numero      : 4,
            titulo      : "Valor 4",
            descripcion : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            icono       : valueIcon1,
            imagen      : valueImage1,
        },
    ]
}
