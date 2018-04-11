import storageService from './localStorage.service.js';

const KEY = 'emailAppKey';

function createData() {
    let data = [
        {subject: 'orel', body: 'dsfsfdsf', isRead: false, sentAt: Date.now()},
        {subject: 'bobo', body: 'sdfsfsdfsdf', isRead: false, sentAt: Date.now()},
        {subject: 'eyal', body: 'sdfsfsdfsdfcvvvvv', isRead: false, sentAt: Date.now()},
        {subject: 'popo', body: '123dfefwfewdfsdfsdffsdfsdfsd', isRead: false, sentAt: Date.now()}
    ];
    storageService.store(KEY,data);
    return storageService.load(KEY);
}

function getData() {
    let data =  storageService.load[KEY];
    return (data)? data: createData();
}

export default {
    getData
}