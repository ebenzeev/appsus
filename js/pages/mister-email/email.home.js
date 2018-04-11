import emailService from '../../services/mister-email.service.js';
import emailList from '../../cmps/mister-email/email-list.js';
import emailDetails from '../../cmps/mister-email/email-details.js';
export default {
    template: `
    <section class="email-home">
        <email-list :emails="emails" @selected="selectEmail"></email-list>
        <email-details v-if="selectedEmail" :email="selectedEmail"></email-details>
        <div v-else>Loading....</div>
    </section>
    `,
    methods: {
        selectEmail(idx) {
            this.selectedEmail = this.emails[idx];
        }
    },
    data() {
        return {
            emails: [],
            selectedEmail: null,
        }
    },
    created() {
        emailService.query()
        .then(emails => this.emails = emails)
        .then(()=> this.selectedEmail = this.emails[0])

    },
    components: {
        emailList,
        emailDetails
    }
}