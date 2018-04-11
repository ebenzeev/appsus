import storageService from './localStorage.service.js';

const KEY = 'emailAppKey';

function createData() {
    let data = [
        {sendFrom: { name: 'Orel', email: 'orel@walla.com' }, subject: 'לכבוד רמי היקר', body: 'היני בביתת מוזמן להגיע', isRead: false, sentAt: Date.now()},
        {sendFrom: { name: 'Popo', email: 'popo@walla.com' }, subject: 'החודש בלבד', body: 'מבצע למצטרפים חדשים לחברת הוט טריםל ב 99 ש״ח בלבד', isRead: false, sentAt: Date.now()},
        {sendFrom: { name: 'Lolo', email: 'lolo@walla.com' }, subject: 'מה קורה ?', body: 'אני מכין ארוחת ערב אתה מגיע ?', isRead: false, sentAt: Date.now()},
        {sendFrom: { name: 'Eyal', email: 'eyal@walla.com' }, subject: 'הספר שאמרתי לך', body: 'זוכר שדיברנטו על ספר שבוע שעבר ? לספר קוראים ״אל תקרא אותי״ ממליץ בחום', isRead: false, sentAt: Date.now()}
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



