import emailService from '../../services/mister-email.service.js';

export default {
    template: `
    <section class="email-home">
        <h1>Mister Email App!</h1>
    </section>
    `,
    data() {
        return {
            data: emailService.getData()
        }
    }
}