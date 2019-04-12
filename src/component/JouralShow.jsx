import React from 'react';

export default (props) => {
    const arr = [
        {
            title: 'Journal of Research in Vocational Education (JRVE)',
            iSSN: '2408-5170',
            email: 'jrve@bryanhousepub.org',
            name: 'JRVE',
        },
        {
            title: 'Journal of Progress in Civil Engineering (JPCE)',
            iSSN: ' 2322-0856',
            email: 'jmme@bryanhousepub.org',
            name: 'JPCE',
        },
        {
            title: 'Journal of Petroleum and Mining Engineering (JPME)',
            iSSN: '1110-6506',
            email: 'jpme@bryanhousepub.org',
            name: 'JPME',
        },
        {
            title: 'Journal of Contemporary Medical Practice (JCMP)',
            iSSN: '2006-2745',
            email: 'jcmp@bryanhousepub.org',
            name: 'JCMP',
        },
        {
            title: 'Journal of Research in Science and Engineering (JRSE)',
            iSSN: '1656-1996',
            email: 'jrse@bryanhousepub.org',
            name: 'JRSE',
        },
        {
            title: 'Journal of Educational Research and Policies (JERP)',
            iSSN: '2006-1137',
            email: 'jerp@bryanhousepub.org',
            name: 'JERP',
        },
        {
            title: 'Journal of Metallurgy and Materials Engineering (JMME)',
            iSSN: '2006-1919',
            email: 'jmme@bryanhousepub.org',
            name: 'JMME',
        },
        {
            title: 'International Journal of Environment Research (IJER)',
            iSSN: '1595-4080',
            email: 'ijer@bryanhousepub.org',
            name: 'IJER',
        },
        {
            title: 'Journal of Global Economy, Business and Finance (JGEBF)',
            iSSN: '2141-5595',
            email: 'jgebf@bryanhousepub.org',
            name: 'JGEBF',
        },
        {
            title: 'Journal of Energy Science (JES)',
            iSSN: '1689-8338',
            email: 'jes@bryanhousepub.org',
            name: 'JES',
        },
        {
            title: 'Journal of Social Science and Humanities (JSSH)',
            iSSN: '1811-1564',
            email: 'jssh@bryanhousepub.org',
            name: 'JSSH',
        },
        {
            title: 'Journal of Agriculture and Horticulture (JAH)',
            iSSN: '1711-8239',
            email: 'jah@bryanhousepub.org',
            name: 'JAH',
        },
    ];
    const handleClick = (e) => {
        let target = e.target;
        while(!target.getAttribute('data-path') && target.className !== 'journals-content') {
            target = target.parentNode;
        }
        const path = target.getAttribute('data-path');
        if (path) {
            props.history.push(`/journal?journal=${path}&page=introduce`);
        }
    };
    const showList = arr.map((item, index) => {
        return (
            <div key={index} data-path={item.name} 
            onClick={(e) => handleClick(e)}
            style={{
                width: '48%',
                display: 'flex',
                height: '250px',
                margin: '10px 0',
            }}>
                <img src={`/src/static/img/${item.name.toLowerCase()}.jpg`} width="200px" />
                <div style={{
                    // display: 'inline-block',
                    marginLeft: '15px',
                    padding: '15px',
                }}>
                    <h4>{item.title}</h4>
                    <p>ISSN: {item.iSSN}</p>
                    <p>Frequency: {item.frequency ? item.frequency : '12 Issues per Year'}</p>
                    <p>Accepted Language: {item.language ? item.language : 'English'}</p>
                    <p>Submit Email:</p>
                    <p>{item.email}</p>
                </div>
            </div>
        );
    });
    return (
        <div className="journals-content" style={{
            display: 'flex',
            flexFlow: 'wrap',
        }}>
            {showList}
        </div>
    );
};