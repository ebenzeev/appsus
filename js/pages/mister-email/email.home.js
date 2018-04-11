import emailService from '../../services/mister-email.service.js';

export default {
    template: `
    <section class="email-home">
        <h1>Mister Email App!</h1>
        <ul>
            <li v-for="email in emails">{{ email }}</li>
        </ul>
    </section>
    `,
    data() {
        return {
            emails: []
        }
    },
    created() {
        emailService.getData()
        .then(emails => this.emails = emails);
    }
}