export default {
    template: `
                <section class="email-filter">
                    <div class="search-items">Search: <input type="search" @input="runSearch" placeholder="Search by subject ..."/></div>
                    <div class="buttons">
                        <button class="sort-by-date" @click="reqSortByDateDescending">Sort Descending Date</button>
                        <button class="sort-by-date" @click="reqSortByDateAscending">Sort Ascending Date</button>
                    </div>
                </section>
    
    `,
    methods: {
        runSearch(event) {
            console.log(event.srcElement.value);
            this.$emit('userInput', event.srcElement.value);
        },
        reqSortByDateDescending() {
            this.$emit('userSortByDateDescending');
        },
        reqSortByDateAscending() {
            this.$emit('userSortByDateAscending');
        }

    }
}