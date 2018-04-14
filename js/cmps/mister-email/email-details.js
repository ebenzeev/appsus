import MisterEmailSerice from '../../services/mister-email.service.js';

export default {
    props: ['id'],
    template: `
        <section class="email-details">
            <button class="del-btn" @click="$emit('close', id)">Delete Email</button>
            <div class="email-item-details" v-if="email">
                <h2>{{ email.subject }}</h2>
                <p><span  class="bold underline">From</span>: {{ email.sendFrom.name }} | {{ email.sendFrom.email }} </p>
                <p><span  class="bold underline">Sent</span>: {{ email.sentAt }}</p>
                <div class="bold underline" style="font-size: 1.2em">Body</div><p>{{ email.body }}</p>
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
    deleteEmail() {
        MisterEmailSerice.deleteEmail(this.email.id)
        .then(res => {
            console.log(`Email ${this.email.id} Deleted`);
            this.$router.push('/detail/'+email.id);
        })
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