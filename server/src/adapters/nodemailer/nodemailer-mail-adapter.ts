import nodemailer from  'nodemailer'
import { MailAdapter, SendMaildata } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "f64820244f2f64",
      pass: "ad6cc65b049492"
    }
  });


export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMaildata){

    await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Leonardo Maquiaveli <lmaquiaveli@gmail.com>',
        subject,
        html: body,
    }) 

    }
}