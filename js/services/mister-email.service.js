import storageService from './localStorage.service.js';
import utilService from './util-services.js'

const KEY = 'emailAppKey';
var gId = 0 
function createData() {
    let data = [
        { id: ++gId, sendFrom: {  name: 'Orel', email: 'orel@walla.com' } , subject: 'Dear Rami', body: `I'm at home. let's meet at 20:00pm`, isRead: false, sentAt: utilService.generateDate(Date.now())},
        { id: ++gId,sendFrom: {  name: 'Popo', email: 'popo@walla.com' }, subject: 'Limited time DEAL', body: 'Hot tripel is having a good price for new memebers, only 99.90 annual', isRead: false, sentAt: utilService.generateDate(Date.now())},
        { id: ++gId, sendFrom: {  name: 'Lolo', email: 'lolo@walla.com' }, subject: 'Wasssuuup', body: 'Are we hacing a dinner tonight?', isRead: false, sentAt: utilService.generateDate(Date.now())},
        { id: ++gId,sendFrom: {  name: 'Eyal', email: 'eyal@walla.com' }, subject: 'The book we talked', body: 'Just remebered the book I told you. it is "vue JS"', isRead: false, sentAt: utilService.generateDate(Date.now())}
    ];
    storageService.store(KEY,data);
    return storageService.load(KEY);
}

function query() {
    var emails = storageService.load(KEY);
    return (emails)? emails: createData();
}

function saveEmail(email) {
    return storageService.load(KEY)
        .then(emails => {
            if (email.id) {
                var emailIdx = emails.findIndex(currEmail => currEmail.id === email.id)
                emails.splice(emailIdx, 1, email);
            } else {
                email.id =  emails.length+1;
                emails.unshift(email);
            }
            return storageService.store(KEY, emails);
        });
}

function deleteEmail(emailId) {
    return storageService.load(KEY)
        .then(emails => {
            var emailIdx = emails.findIndex(email => email.id === emailId);
            emails.splice(emailIdx, 1);
            return storageService.store(KEY, emails);
        })
}



function getById(id) {
    return storageService.load(KEY)
            .then(emails => {
                var email = emails.find(email => email.id + '' === id + '')
                if(email) return email
                return Promise.reject('email with id: ' + id + 'not found')
            })
}

export default {
    query,
    saveEmail,
    getById

}



