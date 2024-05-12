const user = {
    "firstName": "Гена",
    "lastName": "Букин",
    "achievements": {
        "important": "хет-трик в финале турнира Кожаный мяч"
    }
}

const company = {
    "name": "Apple",
    "location": "Калифорния, США",
    "achievements": {
        "important": "Сделали iPhone"
    }
}

function printOnlyAch( {achievements} ) {
    console.dir(achievements)
}

function printInfo(obj) {
    console.dir(obj)
}