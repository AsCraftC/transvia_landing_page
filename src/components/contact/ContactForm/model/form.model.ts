import { z as zod } from 'zod'

export const schema = zod.object(
  {
    fullName:   zod.string({required_error: 'Necesitamos saber como dirigirnos a usted'})
      .min(6, {message: 'Debe incluir nombre y apellido'})
      .includes(' ', {message: 'Debe incluir nombre y apellido'}),
    email:      zod.string({required_error: 'Se necesita para el contacto de vuelta'})
      .email({message:'Correo electrónico no reconocido.'}),
    message:    zod.string({required_error: 'Requerimos mensaje de contexto para responderle correctamente'})
      .min(10, {message: 'Mensaje con poco contenido, use al menos 10 caracteres'})
      .max(500, {message: 'Mensaje muy largo'})
  }
)

export type formValues = zod.infer<typeof schema>