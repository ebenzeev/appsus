export default {
    template: `
                <section class="email-filter">
                    <div class="search-items">Search: <input type="search" @input="runSearch" placeholder="Search by subject ..."/></div>
                    <div class="buttons">
                        <button class="sort-by-date">Sort by date</button>
                    </div>
                </section>
    
    `,
    methods: {
        runSearch(event) {
            console.log(event.srcElement.value);
            this.$emit('userInput', event.srcElement.value);
        }

    }
}