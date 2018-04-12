import emailService from '../../services/mister-email.service.js'
import utilService from '../../services/util-services.js'

export default {
    template: `
            <section class="email-composer">
            <h2>email compose</h2>
            <form @submit.prevent="saveEmail">
                Subject: <input type="text" v-model="email.subject" >
                Message:<input type="text" v-model="email.body" >
                <button type="submit"> {{(email.id)? 'Reply': 'Send'}}</button>
            </form>
        </section>
        
        
    `
    ,
    data() {
        return {
            email: {sendFrom: { name: 'Orela', email: 'orel@walla.com' } , subject: '', body: ``, isRead: false, sentAt: utilService.generateDate()}
        }
    },
    methods: {
        saveEmail() {
            console.log(this.email);
            emailService.saveEmail(this.email)
                .then(() => {
                    console.log('Saved!');
                    this.$router.push('/email');
                })
        }
    }
}
