export default {
    props: ['email'],
    template : `
                <section class="email-preview">
                    <div class="mail-details-item">
                        <div class="mail-from"> {{ email.sendFrom.name}} </div> 
                        <div class="mail-subject"> {{email.subject}} </div>
                        <div class="sent-at"> {{ email.sentAt }} </div>
                    </div>
                </section>
    `
}