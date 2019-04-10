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
            {
                name: 'International Journal of Environment Research',
                index: '/journal?journal=IJER&page=introduce',
            },
            {
                name: 'Journal of Energy Science',
                index: '/journal?journal=JES&page=introduce',
            },
            {
                name: 'Journal of Social Science and Humanities',
                index: '/journal?journal=JSSH&page=introduce',
            },
            {
                name: 'Journal of Agriculture and Horticulture',
                index: '/journal?journal=JAH&page=introduce',
            },
        ];
        const arr = [
            {
                href: 'https://goo.gl/8y5KYk',
                img: '/src/static/img/semantic.jpg',
            },
            {
                href: '#',
                img: '/src/static/img/niscair.jpg',
            },
            {
                href: 'https://search.crossref.org/?q=2319-7064',
                img: '/src/static/img/CrossRef.jpg',
            },
            {
                href: 'https://goo.gl/d1n3Uy',
                img: '/src/static/img/ResearchGate_Logo.png',
            },
            {
                href: 'https://goo.gl/dKTpxy',
                img: '/src/static/img/research-bible.jpg',
            },
            {
                href: 'https://goo.gl/NvH8d3',
                img: '/src/static/img/citefactor.png',
            },
            {
                href: 'https://goo.gl/x9jQZc',
                img: '/src/static/img/worldcat.jpg',
            },
            {
                href: 'https://ijsr.academia.edu/IjsrnetEditorial',
                img: '/src/static/img/academia.png',
            },
        ];
        const imgList = arr.map((item, index) => 
			<li key={index}>
				<a href={item.href} target='_blank'>
					<img src={item.img} align='middle' />
				</a>
				<hr />
			</li>
		);
        return (
            <div className='home' style={{ 
                marginTop: 10,
                display: 'flex', 
            }}>
                <div className='left'>
                    <h4>Browser by journal</h4>
                    <List pathMap={pathMap} push={this.props.history.push}/>
                    <h4>Valuable Links</h4>
                    <ul className='ul-path-warpper' style={{ textAlign: 'center' }}>
                        {imgList}
                    </ul> 
                    <h4>Contact Us</h4>
                    <ul className='ul-path-warpper'>
                        <li><span className='san' /> <a href='mailto:contact@bryanhousepub.org' 
                        style={{    
                            textDecoration: 'none',
                            color: 'black', 
                            fontWeight: 400 }}
                        >Email: contact@bryanhousepub.org</a></li>
                        <li><span className='san' /> Telephone: 0044-121-7813744</li>
                    </ul>
                </div>
                <div className='right'>
                    <h4>About us</h4>
                    <div><span>Bryan House Publishing Limited</span> is a young (founded in 2018) publishing house from Birmingham city, United Kingdom. Its goal is to promote scientific scholarship, scientific knowledge dissemination in the world and to enhance our knowledge/information spreading/exchanging as well as seeking to create an academic environment that fosters growth in knowledge and understanding of the world. </div>
                    <div><span>Bryan House Publishing Limited</span> is dedicated to increasing depths of subjects across disciplines with the ultimate aim of expanding knowledge in science. We strive to provide the best service to the public, scientists, professors, students, industries, and academic institutions. We will make the best efforts to publish all the valuable works as soon as possible. One key request to researchers across the world is unrestricted access to research publications. Open access gives a worldwide audience larger than that of any subscription-based journal, and thus increases the visibility and impact of published works. It also enhances indexing, retrieval power, and eliminates the need for permissions to reproduce and distribute content. </div>
                    <div><span>Bryan House Publishing Limited is entirely not-for-profit, so the article processing charge (APC) is free, and there are no article submission charges, page charges, or color charges.</span></div>
                    <h4 style={{
                        fontSize: 25,
                    }}>Feature Journals</h4>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        textAlign: 'center',
                    }}>
                        <div>
                            <img src='/src/static/img/jrve.jpg' width='130px'/>
                            <p>JRVE</p>
                        </div>
                        <div>
                            <img src='/src/static/img/jrse.jpg' width='130px'/>
                            <p>JRSE</p>
                        </div>
                        <div>
                            <img src='/src/static/img/jpme.jpg' width='130px'/>
                            <p>JPME</p>
                        </div>
                        <div>
                            <img src='/src/static/img/jah.jpg' width='130px'/>
                            <p>JAH</p>
                        </div>
                        <div>
                            <img src='/src/static/img/jssh.jpg' width='130px'/>
                            <p>JSSH</p>
                        </div>
                    </div>
                    <h4 style={{
                        fontSize: 25,
                    }}>Recently Published Papers</h4>
                </div>
            </div> 
        );
    }
}

