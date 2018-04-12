import emailService from '../../services/mister-email.service.js'
import utilService from '../../services/util-services.js'

export default {
    template: `
            <h2>email compose</h2>
        
        
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
