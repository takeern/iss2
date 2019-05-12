import React, { Component } from 'react';
import api from '../ulit/api';


export default class Issue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: '',
            time: this.getQueryByName(window.location.search, 'time'),
            mouth: this.getQueryByName(window.location.search, 'mouth'),
            volume: this.getQueryByName(window.location.search, 'volume'),
        };
    }

    getQueryByName(url, name) {
        let reg=new RegExp('[?&]'+name+'=([^&#]+)');
        let query=url.match(reg);
        return query?query[1]:null;
    }
    
    componentDidMount() {
        const { time } = this.state;
        this.getData(time);
    }

    getData(time) {
        const { getPageList } = api;
        const config = {
            method: 'GET',
            mode: 'cors',
        };
        fetch(getPageList+`?time=${time}&journal=${this.props.journal}`, config)
            .then(res => {
                if(res.ok) return res.json();
            })
            .then(data => {
                const { resData } = data;
                if(resData.code === 200) {
                    this.setState({
                        data: resData.data,
                    });
                }
            });
    }
    render() {
        const { data, time, volume, mouth } = this.state;

        if(!data) return null;

        const showList = data.map((item, index) => {
            return (
                <div key={index}>
                    <hr />
                    <div style={{
                        marginLeft: 30,
                        textIndent: 0,
                    }}><a href={`./src/static/pdf/${time}_${index + 1}.pdf`}>{item.title}</a></div>
                    <p style={{
                        marginLeft: 30,
                    }}>{item.name}</p>
                </div>
            );
        });
        const times = time.split('-');
        return (
            <div className='issue'>
                <h1 style={{ textAlign:'center' }}>Volume {volume} Issue {times[2]}, {mouth} {times[0]}</h1>
                {showList}
            </div>
        );
    }
}