import type { CountUp } from "countup.js";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface props{
  value : number;
}

export default function IncreaseNumber({value}:props) {
  const number = useRef(null)
  
  useGSAP( () => {
      gsap.from(number.current, {
        innerText : 0,
        duration  : 3,
        snap : {
          innerText : 1
        },
        scrollTrigger:{
          trigger : number.current,
          start   : 'bottom'
        }
      }
    )
    }
  )

  return (
    <p ref={number}> {value} </p>
  )
}
