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

const getFileType = (filename) => {
    var buffer = fs.readFileSync(filename);
    if (buffer[0]==0xff&&buffer[1]==0xfe) {
        return ('unicode')
    } else if (buffer[0]==0xfe&&buffer[1]==0xff) {
    　　return ('unicode')
    } else if(buffer[0]==0xef&&buffer[1]==0xbb) {
　　　  return ('utf-8')
    } else {
    　　return ('gbk')
    }
}

function getTxt(time, journal, journalData, command, currentTime, firstTime, numLength) {
    const filename = `./${journal}-${time}.txt`;

    try {
        const type = getFileType(filename);
        var fileStr = fs.readFileSync(filename, {encoding:'binary'});
        var buf = Buffer.from(fileStr, 'binary');
        var data = iconv.decode(buf, type);
        const parseData = parseTxt(data, filename);
            currentTime = time;
            if(!firstTime) firstTime = time;

            if(command === 'getList') {
                if(parseData.length !== 0) journalData[time] = parseData.length;
            }else {
                if(parseData.length !== 0) journalData[time] = parseData;
            }

            numLength += 1;

            const newTime = addTime(time);
            if(newTime) {
                getTxt(newTime, journal, journalData, command, currentTime, firstTime, numLength)
                return
            };
            const writeData = show(journalData, command, currentTime, firstTime, numLength);
            writeFile(journal, command, writeData);
    } catch (err) {
        if (err) {
            if(err.code === 'ENOENT') {
                const newTime = addTime(time);
                if(newTime) {
                    getTxt(newTime, journal, journalData, command, currentTime, firstTime, numLength)
                    return;
                };
                const writeData = show(journalData, command, currentTime, firstTime, numLength);
                writeFile(journal, command, writeData);
            }else {
                throw err;
            }
        } 
    }
}

function parseTxt (data, filename) {
    const arr = [];
    const list = data.split(/(\r\n|\n)+/).filter(removeNO);
    // console.log(list, time)
    let version = 0;
    let end = list.length/2;
    if (list.length && !isNaN(parseInt(list[0], 10))) {
        version = parseInt(list[0], 10);
    }

    if (version === 1) {
        list.shift();
        end = list.length / 3;
    }
    // console.log(version)
    for (let i = 0; i < end; i ++) {
        switch (version) {
            case 0:
                arr.push({
                    title: list[i * 2],
                    name: list[i * 2 + 1],
                });
                break;
            case 1:
                arr.push({
                    title: list[i * 3],
                    name: list[i * 3 + 1],
                    doi: list[i * 3 + 2],
                });
                break;
            default:
                arr.push({
                    title: list[i * 2],
                    name: list[i * 2 + 1],
                });
                console.log('unhander version', version, filename);
                break;
        }
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
