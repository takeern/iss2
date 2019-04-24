import React, { PureComponent } from 'react';
import { renderRoutes }from 'react-router-config';

import '../static/css/index.less';

export default class View extends PureComponent {
    handleClick(e) {
        let target = e.target;
        while(!target.getAttribute('data-path') && target.className !== 'home-header') {
            target = e.parentNode;
        }
        const path = target.getAttribute('data-path');
        if (path) {
            this.props.history.push(path);
        }
    }
    render() {
        const pathMap = [
            {
                name: 'Home',
                index: 'home',
                width: 250,
            },
            {
                name: 'Journal',
                index: 'journals',
                width: 250,
            },
            {
                name: 'Conference',
                index: 'conference',
                width: 250,
            },
            {
                name: 'Contact Us',
                index: 'contact',
                width: 250,
            },
        ];
        const showIndex = pathMap.map((item, index) => {
            return <div className={window.location.pathname === `/${item.index}` ? 'select' : ''}
            style={{
                width: item.width + 'px',
                textAlign: 'center',
            }}
            key={index} data-path={item.index}>{item.name}</div>;
        });
        const { route } = this.props;
        return (
            <div className='wraper'
                style={{
                    width: 1000,
                    margin: '0 auto',
                }}
            >
                <img src='/src/static/img/logo.bmp' width='1000px' style={{
                    display: 'block',
                }}/>
                <div className='home-header'
                style={{
                    color: 'white',
                    fontWeight: 'bold',
                    height: 50,
                    borderBottom: '2px solid #f57605',
                    font: 'bold 16px Verdana, Arial, Helvetica, Geneva, sans-serif',
                    lineHeight: '50px',
                    width: 1000,
                    margin: '0 auto',
                    display: 'flex',
                    backgroundColor: '#3e8cca',
                    cursor: 'pointer',
                }}
                onClick={(e) => this.handleClick(e)}
                >
                    {showIndex}
                </div>
                <div>
                    {renderRoutes(route.routes)}
                </div>
                <div class="foot" style={{
                    paddingTop: 30,
                    minHeight: 50,
                    background: '#2065b2',
                    textAlign: 'center',
                    font: '16px Arial , Verdana , Helvetica , Geneva ,sans-serif',
                    color: '#fff',
                    marginTop: 25,
                    width: 1000,
                }}>
                    Copyright © 2019 Bryan House Publishing Limited. All rights reserved.
                </div>
            </div>
        );
    }    
}