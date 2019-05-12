import React, { Component } from 'react';
import api from '../ulit/api';

export default class IssueList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
        };
    }

    componentDidMount() {
        const { getList } = api;
        const config = {
            method: 'GET',
            mode: 'cors',
        };
        fetch(`${getList}?journal=${this.props.journal}`, config)
            .then(res => {
                if(res.ok) return res.json();
            })
            .then(data => {
                const { resData } = data;
                if(resData.code === 200) {
                    this.setState({
                        data: resData.pageListData.data,
                    });
                }
            });
    }

    onClick(e) {
        let { target } = e;
        if(target.localName !== 'li') {
            target = target.parentNode;
        }
        // const volume = /Volume[/s]?(.*)[/s]?Issue/g.exec(target.innerText)[1];
        const volume = target.innerText.split('Volume')[1].split('Issue')[0].split(' ')[1];
        // console.log(volume.split(' '));
        const year = target.getAttribute('data-year');
        const mouth = target.getAttribute('data-mouth');
        console.log(this.props);
        this.props.push(`/journal?journal=${this.props.journal}&page=issueList&time=${year}&mouth=${mouth}&volume=${volume}`);
    }

    parseTime(time) {
        return time && time.split('-');
    }

    parseMouth(num) {
        const mouth = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];
        return mouth[num - 1];
    }

    render() {
        const { data } = this.state;
        // const { parseTime, parseMouth } = this;
        let startTime = 200000;
        let endTime = 0;

        if(!data) return null;
        const ul = {};
        const mouth = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ];

        for(let i in data) {
            const time = this.parseTime(i);
            const year = parseInt(time[0]);
            if(year < startTime) startTime = year;
            if(year > endTime) endTime = year;
            if(!ul[year]) {
                ul[year] = [];
            }
            ul[year].push(
                // `${i}|Issue - ${time[2]} ${parseMouth(time[1])} ${year}`
                `${i}|Issue - ${time[2]}|${year}`
            );
        }
        const showList = [];

        for(let i = endTime; i >= startTime; i --) {
            if(!ul[i] || ul[i].length === 0) return;
            const j = Math.floor(12 / ul[i].length);
            let k = 0 - j;
            let list = ul[i].map((item, index) => {
                const items = item.split('|');
                
                k += j;
                return <li key={index} data-year={items[0]} data-mouth={mouth[k]} onClick={(e) => this.onClick(e)}><a>Volume {i-startTime+1} {items[1]} {mouth[k]} {items[2]}</a></li>;
            });
            if(i > 2018) {
                list = ul[i].map((item, index) => {
                    const items = item.split('|');
                    return <li 
                    key={index} 
                    data-year={items[0]} 
                    data-mouth={mouth[k]} 
                    onClick={(e) => this.onClick(e)}
                    >
                        <a>Volume {i-startTime+1} {items[1]} {mouth[index]} {items[2]}</a>
                    </li>;
                });
            }
            if (i === 2018) {
                list = ul[i].map((item, index) => {
                    const items = item.split('|');
                    return <li 
                    key={index} 
                    data-year={items[0]} 
                    data-mouth={mouth[k]} 
                    onClick={(e) => this.onClick(e)}
                    >
                        <a>Volume {i-startTime+1} {items[1]} December {items[2]}</a>
                    </li>;
                });
            }  
            if(i === 2014) {
                let _motuh_2014 = [ 'July', 'Septembe', 'December' ];
                list = ul[i].map((item, index) => {
                    const items = item.split('|');
                    return <li key={index} data-year={items[0]} data-mouth={mouth[k]} onClick={(e) => this.onClick(e)}><a>Volume {i-startTime+1} {items[1]} {_motuh_2014[index]} {items[2]}</a></li>;
                });
            }
            showList.push(
                <div className='item' key={i}> 
                    <hr />
                    <div className='heading'>Volume {i-startTime+1} {i} </div>
                    <hr />
                    <ul style={{ display: 'flex', flexFlow: 'column', alignItems: 'center' }} data-volume={i}>{list}</ul>
                </div>
            );
        }


        return(
            <div className='issue-list'>
                <img src={`/src/static/img/${this.props.journal.toLowerCase()}-fm.png`}  style={{
                    width: 500,
                    marginLeft: -190,
                    marginTop: -10,
                 }}/>
                <h1 style={{
                    fontSize: 20,
                    marginTop: 12,
                }}>All Previous Issues</h1>
                {showList}
            </div>
        );
    }
}