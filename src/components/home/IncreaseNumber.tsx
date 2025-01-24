import type { CountUp } from "countup.js";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


interface props{
  value : number;
}

export default function IncreaseNumber({value}:props) {
  const number = useRef(null)

  useEffect( ( ) => {
    gsap.registerPlugin(useGSAP,ScrollTrigger);
  }, [])

  useGSAP( () => {
      gsap.registerPlugin(useGSAP,ScrollTrigger);
      gsap.from(number.current, {
        innerText : 0,
        duration  : 2,
        snap : {
          innerText : 1
        },
        scrollTrigger:{
          trigger : number.current,
          start : 'bottom bottom'
        }
      }
    )
    }
  )

  return (
    <p ref={number}> {value} </p>
  )
}
