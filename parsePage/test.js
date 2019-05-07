const fs = require('fs');
let year = 2019;
let mouth = 1;
let day = 1;
let allData = {};
const command = 'getPage'; // getPage or getList
const { warp } = require('./getPdfNumber');
let numLenth = 0;
let currentTime = false;
let firstTime = false;


const removeNO = function (item) {
    return !!(item.trim());
};

function addTime(str) {
    // console.log(str)
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
    if(newArr[0] > 2019) return false;
    return newArr.join('-');
}

function getTxt(time, journal, callback) {
    fs.readFile(`./${journal}-${time}.txt`, 'utf8', (err, data) => {
        if (err) {
            if(err.code === 'ENOENT') {
                const newTime = addTime(time);
                if(newTime) return getTxt(newTime, journal, callback);
                show();
                writeFile(journal);
                callback(allData);
            }else {
                throw err;
            }
        } else {
            const parseData = praseTxt(data, time);
            currentTime = time;
            if(!firstTime) firstTime = time;

            if(command === 'getList') {
                if(parseData.length !== 0) allData[time] = parseData.length;
            }else {
                if(parseData.length !== 0) allData[time] = parseData;
            }

            numLenth += 1;

            const newTime = addTime(time);
            if(newTime) return getTxt(newTime, journal, callback);
            show();
            writeFile(journal);
            allData = {};
            callback(allData);
        }
    });
}

function praseTxt (data, time) {
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

function show() {
    // console.log(allData);
    if(command === 'getList') {
        allData = {
            data: Object.assign(allData, {}),
            length: numLenth,
            currentTime,
            firstTime,
        };
    }
}

function writeFile(journal) {
    if(command === 'getList') { //每个目录数量
        fs.writeFile(`./${journal}-pageList.json`, JSON.stringify(allData), (err) => {
            if(err) console.log(err);
        });
    }
    if(command === 'getPage') { //每个page 详细信息
        fs.writeFile(`./${journal}-page.json`, JSON.stringify(allData), (err) => {
            if(err) console.log(err);
        });
    }
}

const time = `${year}-${mouth}-${day}`;

const wrapTxt = (time, journal) => {
    return new Promise(resolve => {
        getTxt(time, journal, resolve);
    });
};

wrapTxt(time, 'IJER');
// module.exports = {
//     wrapTxt,
// }
// const journals = [
//     'IJER',
//     'JRVE',
//     'JPCE',
//     'JPME',
//     'JCMP',
//     'JRSE',
//     'JERP',
//     'JMME',
//     'IJER',
//     'JGEBF',
//     'JES',
//     'JSSH',
//     'JAH',
// ];
// async function testPdfToTxt() {
//     let testStatus = true;

//     console.log('开始解析pdf');
//     const pdf = await warp(time);
//     console.log('解析pdf成功');

//     console.log('开始解析目录');
//     const txt = await wrapTxt(time);
//     console.log('解析目录成功');
//     pdf.map(item => {
//         const {time, number} = item;
//         if(txt[time] !== number) {
//             console.log(`目录:${time}.txt 解析论文数量为${txt[time]?txt[time]:0}，与实际获取pdf数量:${number}不符合`);
//             testStatus = false;
//         }
//     })
//     const logData = testStatus? 'pdf与目录数量对应成功' : 'pdf与目录数量对应失败' ;
//     console.log(logData);
// }

// testPdfToTxt();