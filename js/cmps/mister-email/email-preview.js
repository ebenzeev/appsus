export default {
    props: ['email'],
    template : `
                <section class="email-preview">
                    <div class="email-details-item">
                        <span v-if="email.isRead" class="read-status">✔</span>
                        <span v-else class="read-status">►</span>
                        <div class="email-from"> {{ email.sendFrom.name}} </div> 
                        <div class="email-subject"> {{email.subject}} </div>
                        <div class="sent-at"> {{ email.sentAt }} </div>
                    </div>
                </section>`
}