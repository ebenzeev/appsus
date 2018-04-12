import emailService from '../../services/mister-email.service.js'
import utilService from '../../services/util-services.js'

export default {
    template: `
        <section class="email-composer">
            <h2>email compose</h2>
            <h1>Edit</h1>
            <form @submit.prevent="saveEmail">
                <input type="text" v-model="email.subject" >
                <input type="text" v-model="email.body" >
                <button type="submit"> {{(email.id)? 'Save': 'Add'}}</button>
            </form>
        </section>
        
    `
    ,
    data() {
        return {
            email: {sendFrom: { name: 'Orel', email: 'orel@walla.com' } , subject: '', body: ``, isRead: false, sentAt: utilService.generateDate()}
        }
    },
    methods: {
        saveEmail() {
            console.log(this.email);
            emailService.saveEmail(this.email)
                .then(() => {
                    console.log('Saved!');
                    this.$router.push('/car');
                })
        }
    }
}
