import Mail from '../lib/Mail';

export default {
    key: 'RegistrationMail',
    options: {

    },
    async handle({ data }) {
        const { user } = data;
        await Mail.sendMail({
            from: 'DIO',
            to: `${user.name} <${user.email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${user.name}, bem-vindo.`
        });        
    }
}