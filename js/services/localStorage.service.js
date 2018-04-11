function store(key, data) {
    localStorage[key] = JSON.stringify(data);
    return Promise.resolve();
}

function load(key) {
    var str = localStorage[key];
    return Promise.resolve(JSON.parse(str));
}

export default {
    store,
    load
}