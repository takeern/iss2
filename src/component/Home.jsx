import React, { PureComponent } from 'react';

import List from './List';

//less
import '../static/css/home.less';

export default class Home extends PureComponent {
    render () {
        const pathMap = [
            {
                name: 'Journal of Petroleum and Mining Engineering',
                index: '/journal?journal=JPME&page=introduce',
            },
            {
                name: 'Journal of Research in Science and Engineering',
                index: '/journal?journal=JRSE&page=introduce',
            },
            {
                name: 'Journal of Research in Vocational Education',
                index: '/journal?journal=JRVE&page=introduce',
            },
            {
                name: 'Journal of Metallurgy and Materials Engineering',
                index: '/journal?journal=JMME&page=introduce',
            },
            {
                name: 'Journal of Global Economy, Business and Finance',
                index: '/journal?journal=JGEBF&page=introduce',
            },
            {
                name: 'Journal of Progress in Civil Engineering',
                index: '/journal?journal=JMME&page=introduce',
            },
            {
                name: 'Journal of Contemporary Medical Practice',
                index: '/journal?journal=JCMP&page=introduce',
            },
            {
                name: 'Journal of Educational Research and Policies',
                index: '/journal?journal=JERP&page=introduce',
            },
        ];
        return (
            <div className='home' style={{ marginTop: 10 }}>
                <div className='left'>
                    <h4>Browser by journal</h4>
                    <List pathMap={pathMap} push={this.props.history.push}/>
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

