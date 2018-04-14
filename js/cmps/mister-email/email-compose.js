import emailService from '../../services/mister-email.service.js'
import utilService from '../../services/util-services.js'

export default {
    template: `
        <section class="email-composer">
            <h2>Email compose</h2>
            <form @submit.prevent="saveEmail">
                <div class="input input-subject">Your Name: <input type="text" v-model="email.sendFrom.name" ></div>
                <div class="input input-subject">Your Email: <input type="email" v-model="email.sendFrom.email" ></div>
                <div class="input input-subject">Your Subject: <input type="text" v-model="email.subject" ></div>
                <div class="input input-message">Your Message:<textarea class="message-area" type="text" v-model="email.body" ></textarea></div>
                <button type="submit" class="btn-comp"> {{(email.id)? 'Reply': 'Send'}}</button>

            </form>
        </section>
        
        
    `
    ,
    data() {
        return {
            email: {sendFrom: { name: '', email: '' } , subject: '', body: ``, isRead: false, sentAt: utilService.generateDate(Date.now()), time: Date.now()}
        }
    },
    methods: {
        saveEmail() {
            console.log(this.email);
            emailService.saveEmail(this.email)
                .then(() => {
                    console.log('Saved!', this.email.id);
                    this.emitSelected(this.email.id);
                    this.$router.push('/email/detail/'+this.email.id);
                    this.$emit('updateData',this.email);
                })
        },
        emitSelected(idx) {
            this.$emit('selected',idx);
        }
    },
    created() {
        
    }
}
