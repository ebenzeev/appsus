function generateDate(time) {
    var date = new Date(time);
    var calDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} @ ${date.getHours()}:${date.getSeconds()}`
    return calDate;
    
}

function sortNumberDescending(a, b) {
    return a.time - b.time;
}

function sortNumberAscending(a, b) {
    return b.time - a.time;
}

export default {
    generateDate,
    sortNumberDescending,
    sortNumberAscending
}