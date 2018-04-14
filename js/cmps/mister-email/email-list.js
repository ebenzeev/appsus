import emailPreview from '../../cmps/mister-email/email-preview.js';

export default {
    props:['emails'],
    template: `
        <section class="email-list">
            <nav class="email-list-items">
                <div class="bg-email-list-items">
                    <div class="nav-email-preview">
                        <div class="read-status title">Status</div>
                        <div class="email-from title">From</div>
                        <div class="email-subject title">Subject</div>
                        <div class="sent-at title">Date</div>
                    </div>
                </div>

                <hr class="hr-email-list">

                <ul>
                    <li v-for="(email,idx) in emails">
                        <email-preview :email="email" :class="(!email.isRead)? 'bold': 'lala'" @click.native="emitSelected(idx)"></email-preview>
                    </li>
                </ul>
            </nav>
        </section>
    `,
    methods: {
        emitSelected(idx) {
            this.$emit('selected',idx);
        }
    },
    components: {
        emailPreview
    }
}