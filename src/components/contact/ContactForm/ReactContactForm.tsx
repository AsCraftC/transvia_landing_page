import { useForm, type SubmitErrorHandler, type SubmitHandler } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRef } from "react";

import { type formValues, schema } from "./model/form.model"
import { ButtonForm, InputForm } from "./components"
import { sendEmail } from "./utils/SendEmail";
import './ContactForm.css'

export function ReactContactForm() {
  const formRef = useRef(null)
  const {control, handleSubmit, formState: {errors}} = useForm<formValues>({resolver: zodResolver(schema)})

  const onInvalid : SubmitErrorHandler<formValues> = (errors) => {
    console.error(errors)
  }

  const onSubmit : SubmitHandler<formValues> = (data) => {
    // console.info("success", data)
    sendEmail(data)
    formRef.current.reset()
  }

  return (
    <form className="contact__form" onSubmit={handleSubmit(onSubmit, onInvalid)} ref={formRef}>
      <InputForm name='fullName' control={control} label="Nombre y Apellido"  error={errors.fullName}/>
      <InputForm name='email' control={control} label="Correo Electrónico" type="email" error={errors.email}/>
      <InputForm name='message' control={control} label="Mensaje" type="textarea" error={errors.message}/>

      <ButtonForm> Enviar </ButtonForm>

      {/* <span class="before active">
            Enviar
          </span>
          <span class="sending">
            <span class="button__icon">
            <LoadingIcon />
          </span>
            Enviando...
          </span>
          <span class="after ">
            Enviado 
            <span class="button__icon">
              <CheckIcon />
            </span>
          </span> */}
    </form>
  )
}
