export default {
    props: ['email'],
    template: `
        <section>
          <div>
            <button> Compose </button>
            <div>
                <h2>{{ email.subject }}</h2>
                <p>From: {{ email.sendFrom.name }} | {{ email.sendFrom.email }} </p>
                <p>Sent: {{ email.sentAt }}</p>
                <hr>
                <p>{{ email.body }}</p>
            </div>
            </div>
        </section>
    `
}