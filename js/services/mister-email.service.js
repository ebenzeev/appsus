import storageService from './localStorage.service.js';
import utilService from './util-services.js'

const KEY = 'emailAppKey';

function createData() {
    let data = [
        {sendFrom: { name: 'Orel', email: 'orel@walla.com' } , subject: 'Dear Rami', body: `I'm at home. let's meet at 20:00pm`, isRead: false, sentAt: utilService.generateDate()},
        {sendFrom: { name: 'Popo', email: 'popo@walla.com' }, subject: 'Limited time DEAL', body: 'Hot tripel is having a good price for new memebers, only 99.90 annual', isRead: false, sentAt: utilService.generateDate()},
        {sendFrom: { name: 'Lolo', email: 'lolo@walla.com' }, subject: 'Wasssuuup', body: 'Are we hacing a dinner tonight?', isRead: false, sentAt:utilService.generateDate()},
        {sendFrom: { name: 'Eyal', email: 'eyal@walla.com' }, subject: 'The book we talked', body: 'Just remebered the book I told you. it is "vue JS"', isRead: false, sentAt: utilService.generateDate()}
    ];
    storageService.store(KEY,data);
    return storageService.load(KEY);
}

function query() {
    var emails = storageService.load(KEY);
    return (emails)? emails: createData();

    // return storageService.load(KEY)
    //         .then(emails => {
    //            return (emails)? emails: createData();
    //         });
}

export default {
    query
}



