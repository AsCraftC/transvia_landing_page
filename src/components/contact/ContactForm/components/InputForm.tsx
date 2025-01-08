import { Controller, type Control, type FieldError } from "react-hook-form";
import type { formValues } from "../model/form.model";

import './InputForm.css'

interface Props{
  name    : keyof formValues;
  control : Control<formValues>;
  label   : string;
  type   ?: string;
  error  ?: FieldError
}
export function InputForm({name, control, label, type, error} : Props) {
  const isTextarea = type == 'textarea'
  
  return (
    <>
      <label className='contact__label' htmlFor={name}> {label} </label>
      <Controller 
        name = {name}
        control = {control}
        render  = { ({field}) => (
          isTextarea ?
            <textarea id = {name} {... field} className= {`contact__input contact__message ${error && 'contact__input--is-invalid'}`}></textarea>
          :
            <input id = {name} type = {type} {... field} className= {`contact__input ${error && 'contact__input--is-invalid'}`}/>
        )
        }
      />
      {error && <div className='contact__invalid-feedback'>{error.message}</div>}
    </>
  )
}
