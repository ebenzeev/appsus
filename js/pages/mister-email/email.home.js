import emailService from '../../services/mister-email.service.js';

export default {
    template: `
    <section class="email-home">
        <h1>Mister Email App!</h1>
        <!-- <email-list></email-list> -->
        <router-view></router-view>
        <!-- <emial-status></email-status> -->
    </section>
    `,
    data() {
        return {
            data: emailService.getData()
        }
    }
}