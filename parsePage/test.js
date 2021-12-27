const fs = require('fs');
const iconv = require('iconv-lite');
let year = 2018;
let mouth = 1;
let day = 1;

const removeNO = function (item) {
    return !!(item.trim());
};

function addTime(str) {
    const arr = str.split('-');
    const newArr = arr.map(item => parseInt(item));
    newArr[2] += 1;
    if (newArr[2] === 32) {
        newArr[2] = 1;
        newArr[1] += 1;
    }
    if (newArr[1] === 13) {
        newArr[1] = 1;
        newArr[0] += 1;
    }
    if(newArr[0] > 2025) return false;
    return newArr.join('-');
}

function getTxt(time, journal, journalData, command, currentTime, firstTime, numLength) {
    fs.readFile(`./${journal}-${time}.txt`, 'utf8', (err, data) => {
        if (err) {
            if(err.code === 'ENOENT') {
                const newTime = addTime(time);
                if(newTime) return getTxt(newTime, journal, journalData, command, currentTime, firstTime, numLength);
                const writeData = show(journalData, command, currentTime, firstTime, numLength);
                writeFile(journal, command, writeData);
            }else {
                throw err;
            }
        } else {
	    data = iconv.decode(data, 'GBK');
            const parseData = parseTxt(data);
            currentTime = time;
            if(!firstTime) firstTime = time;

            if(command === 'getList') {
                if(parseData.length !== 0) journalData[time] = parseData.length;
            }else {
                if(parseData.length !== 0) journalData[time] = parseData;
            }

            numLength += 1;

            const newTime = addTime(time);
            if(newTime) return getTxt(newTime, journal, journalData, command, currentTime, firstTime, numLength);
            const writeData = show(journalData, command, currentTime, firstTime, numLength);
            writeFile(journal, command, writeData);
        }
    });
}

function parseTxt (data) {
    const arr = [];
    const list = data.split(/(\r\n)+/).filter(removeNO);
    // console.log(list.length, time)
    for(let i = 0, len = list.length/2; i < len; i ++) {
        arr.push({
            title: list[i * 2],
            name: list[i * 2 + 1],
        });
    }
    // console.log(arr)
    return arr;
}

function show(journalData, command, currentTime, firstTime, numLength) {
    // console.log(allData);
    if(command === 'getList') {
        return {
            data: Object.assign(journalData, {}),
            length: numLength,
            currentTime,
            firstTime,
        };
    } 
    return journalData;
}

function writeFile(journal, command, writeData) {
    if(command === 'getList') { //每个目录数量
        fs.writeFile(`./${journal}-pageList.json`, JSON.stringify(writeData), (err) => {
            if(err) console.log(err);
        });
    }
    if(command === 'getPage') { //每个page 详细信息
        fs.writeFile(`./${journal}-page.json`, JSON.stringify(writeData), (err) => {
            if(err) console.log(err);
        });
    }
}

const time = `${year}-${mouth}-${day}`;

const journals = [
    'IJER',
    'JRVE',
    'JPCE',
    'JPME',
    'JCMP',
    'JRSE',
    'JERP',
    'JMME',
    'JGEBF',
    'JES',
    'JSSH',
    'JAH',
];
journals.map(item => {
    getTxt(time, item, {}, 'getPage', {}, false, false, 0);
    getTxt(time, item, {}, 'getList', {}, false, false, 0);
});
