import MisterEmailSerice from '../../services/mister-email.service.js'
export default {
    props: ['id'],
    template: `
        <section>
          <div v-if="email" class="email-details flex direction-col" >
            <div class="flex direction-col" v-if="email">
                <h2>{{ email.subject }}</h2>
                <p><span  class="bold underline">From</span>: {{ email.sendFrom.name }} | {{ email.sendFrom.email }} </p>
                <p><span  class="bold underline">Sent</span>: {{ email.sentAt }}</p>
                <p>{{ email.body }}</p>
                <button @click="$emit('close')"> close </button>
            </div>
            </div>
            <p v-else>loading..</p>
        </section>
    `,
    data() {
        return {
            email: null
        }
    },
    methods: {
        setEmail(id) {
            MisterEmailSerice.getById(id)
                .then(email => {
                    this.email = email
                })
        }
    },
    created() {
        console.log(this.id)
        this.setEmail(this.id)
    },
    watch: {
        id(to, from) {
            this.setEmail(to)
        }
    }




}