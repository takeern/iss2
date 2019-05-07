const fs = require('fs');
let year = 2014;
let mouth = 1;
let day = 1;
let items = [];

function addTime(str) {
    // console.log(str)
    const arr = str.split('-');
    const newArr = arr.map(item => parseInt(item))
    newArr[2] += 1;
    if( newArr[2] === 32) {
        newArr[2] = 1;
        newArr[1] += 1;
    }
    if( newArr[1] === 13) {
        newArr[1] = 1;
        newArr[0] += 1;
    }
    if(newArr[0] > 2018) return false;
    return newArr.join('-');
}

function getPdf(time, index, callback) {
    // console.log(`${time}_${index}`);
    fs.readFile(`../src/assets/pdf/${time}_${index}.pdf`, 'utf8', (err, data) => {
        if(err) {
            if(err.code === 'ENOENT') {
                if(index !== 1) {
                    items.push({
                        "time": time,
                        "number": index - 1
                    })
                }
                const newTime = addTime(time);
                if(newTime) return getPdf(newTime, 1, callback);
                // console.log(items);
                callback(items);
            }
        } else {
            index += 1;
            getPdf(time, index, callback);
        }
    })
}

function show() {
    // console.log(items);
    return items;
}

function warp(time) {
    return new Promise(resolve => {
        getPdf(time, 1, resolve);
    })
}

const time = `${year}-${mouth}-${day}`;

module.exports = {
    warp,
}