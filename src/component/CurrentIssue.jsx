import React, { PureComponent } from 'react';
import api from '../ulit/api';

export default class CurrentAchieve extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            time: '',
            volume: ' ',
            currentYearNumber: ' ',
        };
    }
    componentDidMount() {
        this.getData();
    }
    getData() {
        const { getCurrentPage } = api;
        const config = {
            method: 'GET',
            mode: 'cors',
        };
        fetch(`${getCurrentPage}?journal=${this.props.journal}`, config)
            .then(res => {
                if(res.ok) return res.json();
            })
            .then(data => {
                const { resData } = data;
                if(resData.code === 200) {
                    this.setState({
                        data: resData.data,
                        time: data.time,
                        volume: data.volume,
                        currentYearNumber: data.currentYearNumber,
                    });
                }
            });

    }
    getMouth() {
        const { currentYearNumber } = this.state;
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
        // console.log(currentYearNumber);
        return mouth[currentYearNumber - 1];
    }
    render() {
        const { data, time, volume } = this.state;
        if(!data) return null;

        const showList = data.map((item, index) => {
            return (
                <div key={index}>
                    <hr />
                    <div style={{
                        marginLeft: 30,
                        textIndent: 0,
                    }}><a href={`./src/static/pdf/${this.props.journal}-${time}_${index + 1}.pdf`}>{item.title}</a></div>
                    <p style={{
                        marginLeft: 30,
                    }}>{item.name}</p>
                </div>
            );
        });
        const times = time.split('-');
        return (
            <div className='issue'>
                <img src={`/src/static/img/${this.props.journal.toLowerCase()}-fm.png`}  style={{
                    width: 500,
                    marginLeft: -190,
                    marginTop: -10,
                 }}/>
                <h2 style={{ textAlign:'center', marginTop: 10 }}>Volume {volume} Issue {times[2]},   {this.getMouth()} {times[0]}</h2>
                {showList}
            </div>
        );
    }
}