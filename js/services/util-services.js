function generateDate(){
    var date = new Date(Math.floor(Date.now()-100*Math.random()));
    var calDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} @ ${date.getHours()}:${date.getMinutes()}`
    return calDate;
    
}

export default {
    generateDate
}