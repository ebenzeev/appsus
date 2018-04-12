function generateDate(time) {
    var date = new Date(time);
    var calDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} @ ${date.getHours()}:${date.getSeconds()}`
    return calDate;
    
}

function sortNumber(a,b) {
    return a.sentAt - b.sentAt;
}


export default {
    generateDate,
    sortNumber
}