import emailService from '../../services/mister-email.service.js';
import emailList from '../../cmps/mister-email/email-list.js';
import emailDetails from '../../cmps/mister-email/email-details.js';
import emailCompose from '../../cmps/mister-email/email-compose.js';
import emailFilter from '../../cmps/mister-email/email-filter.js';
import utilService from '../../services/util-services.js';
import storageService from '../../services/localStorage.service.js';

import {KEY} from '../../services/mister-email.service.js';

export default {
    template: `
    <section class="email-home">
    <router-link to="/email/compose"><button class="btn-compose"> Compose </button></router-link>
        <div class="filter-area">
            <email-filter @userInput="runSearchText" @userSortByDateDescending="sortByDateDescending" @userSortByDateAscending="sortByDateAscending"></email-filter>
        </div>
        <div class="emails-area">
            <email-list v-if="!emailToSerch.length" :emails="emails" @selected="selectEmail"></email-list>
            <email-list v-else :emails="emailToSerch" @selected="selectEmail"></email-list>
            <!-- <email-details v-if="selectedEmail" :id="selectedEmail.id" class="email-detalis"></email-details> -->
            <!-- <div v-else>Loading....</div> -->

            <div class="comp-area">
                <router-view @close="close" @updateData="updateData"></router-view>
            </div>
        </div>
    </section>
    `,
    methods: {
        selectEmail(idx = 0) {
            var selectedEmail = this.emails[idx]
            this.$router.push('/email/detail/' + selectedEmail.id);
            this.emails[idx].isRead = true;
            storageService.store(KEY,this.emails);
        },
        sortByDateDescending() {
            this.emailToSerch = this.emails.sort(utilService.sortNumberDescending);
        },
        sortByDateAscending() {
            this.emailToSerch = this.emails.sort(utilService.sortNumberAscending);
        },
        close(value){
                console.log(value);
                emailService.deleteEmail(value)
                .then(() => {
                    emailService.query()
                    .then(emails => this.emails = emails)
                    .then(() => this.selectEmail(0))
                })
        },
        hideButton(){
            this.compose = !this.compose;
        },
        updateData(email) {
            this.emails.push(email);
            console.log('Yes!');
        },
        runSearchText(elInput) {
             this.emailToSerch = this.emails.filter(function(email) {
                var emailSubject = email.subject.toLowerCase();;
                var input = elInput.toLowerCase();
                return emailSubject.includes(input);
            });
        }
    },
    data() {
        return {
            emails: [],
            emailToSerch: [],
            compose: true
        }
    },
    created() {
        emailService.query()
            .then(emails => this.emails = emails)
            .then(() => this.selectEmail(0));
    },
    components: {
        emailList,
        emailDetails,
        emailCompose,
        emailFilter
    }
}


