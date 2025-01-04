import type { CountUp } from "countup.js";
import {  useEffect, useRef } from "react";

interface props{
  value : number;
}

export default function IncreaseNumber({value}:props) {
  const countupRef = useRef(null)
  let countUpAnim : CountUp

  useEffect(() => {
    initCountUp()
  },[])

  async function initCountUp() {
    const countUpModule = await import('countup.js')
    countUpAnim = new countUpModule.CountUp(countupRef.current, value)
    if (!countUpAnim.error) {
      countUpAnim.start();
    } else {
      console.error(countUpAnim.error);
    }
  }

  return (
    <p ref={countupRef}>0</p>
  )
}
