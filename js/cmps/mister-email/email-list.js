import emailPreview from '../../cmps/mister-email/email-preview.js';

export default {
    props:['emails'],
    template: `
        <section class="">
            <nav class="email-list">
                <ul>
                    <li v-for="(email,idx) in emails">
                        <email-preview :email="email" @click.native="emitSelected(idx)"></email-preview>
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