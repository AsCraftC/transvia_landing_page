import emailjs from '@emailjs/browser'
import type { formValues } from "../model/form.model";

export async function sendEmail( data : formValues ) {

  return await emailjs.send('service_8ucf2ha','template_zxdz9e6',{
    fullName: data.fullName,
    message: data.message,
    email: data.email
    },
    {
      publicKey : 'zM-ZPSrfyriu3sssj'
    }
  )
}