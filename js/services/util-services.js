function generateDate(){
    var date = new Date(Math.floor(Date.now()*Math.random()));
    var calDate = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()} @ ${date.getHours()}:${date.getSeconds()}`
    return calDate;
    
}

export default {
    generateDate
}