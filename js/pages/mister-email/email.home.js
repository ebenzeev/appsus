import emailService from '../../services/mister-email.service.js';
import emailList from '../../cmps/mister-email/email-list.js';
import emailDetails from '../../cmps/mister-email/email-details.js';
import emailCompose from '../../cmps/mister-email/email-compose.js'
export default {
    template: `
    <section class="email-home">
        <div class="emails-area">
            <email-list :emails="emails" @selected="selectEmail"></email-list>
            <!-- <email-details v-if="selectedEmail" :id="selectedEmail.id" class="email-detalis"></email-details> -->
            <!-- <div v-else>Loading....</div> -->
            <router-link to="/email/compose">compose</router-link>
            <div style="border: 3px green dashed">
            <router-view @close="close"></router-view>
            </div>
        </div>
    </section>
    `,
    methods: {
        selectEmail(idx = 0) {
            var selectedEmail = this.emails[idx]
            this.$router.push('/email/detail/' + selectedEmail.id)
        },
        close(){
            console.log('dfsdfsd')
        }
    },
    data() {
        return {
            emails: [],
        }
    },
    created() {
        emailService.query()
            .then(emails => this.emails = emails)
            .then(() => this.selectEmail(0))
    },
    components: {
        emailList,
        emailDetails,
        emailCompose
    }
}


