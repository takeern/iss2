import React, { PureComponent } from 'react';

import List from './List';

//less
import '../static/css/home.less';

export default class Home extends PureComponent {
    render () {
        const pathMap = [
            {
                name: 'Journal of Petroleum and Mining Engineering',
                index: 'JPME',
            },
            {
                name: 'Journal of Research in Science and Engineering',
                index: 'JRSE',
            },
            {
                name: 'Journal of Research in Vocational Education',
                index: 'JRVE',
            },
            {
                name: 'Journal of Metallurgy and Materials Engineering',
                index: 'JMME',
            },
        ];
        return (
            <div className='home' style={{ marginTop: 10 }}>
                <div className='left'>
                    <h4>Browser by journal</h4>
                    <List pathMap={pathMap} />
                    <h4>Contact Us</h4>
                    <ul
                    className='ul-path-warpper'
                    >
                        <li><span className='san' /> <a href='mailto:isaacpublishing@gmail.com' 
                        style={{    
                            textDecoration: 'none',
                            color: 'black', 
                            fontWeight: 400 }}
                        >Email: isaacpublishing@gmail.com</a></li>
                        <li><span className='san' /> QQ: 123456789</li>
                    </ul>
                </div>
                <div className='right'>
                            
                </div>
            </div> 
        );
    }
}

