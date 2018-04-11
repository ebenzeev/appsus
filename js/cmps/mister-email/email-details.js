export default {
    props: ['email'],
    template: `
        <section>
          <div class="email-details flex direction-col">
            <button class="btn"> Compose </button>
            <div class="flex direction-col">
                <h2>{{ email.subject }}</h2>
                <p><span  class="bold underline">From</span>: {{ email.sendFrom.name }} | {{ email.sendFrom.email }} </p>
                <p><span  class="bold underline">Sent</span>: {{ email.sentAt }}</p>
                <p>{{ email.body }}</p>
            </div>
            </div>
        </section>
    `
}