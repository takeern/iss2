import React from 'react';

export default (props) => {
    const { data, title } = props;
    // console.log(dta)
    const showList = data.map((item, index) => {
        const { title, p } = item;
        const pmap = p.map((item, index) => {
            if (Object.prototype.toString.apply(item) === '[object Array]') {
                return (
                    <ul key={index}>{item.map((lidata) => <li>{lidata}</li>)}</ul>
                );
            } 
            return <div key={index} dangerouslySetInnerHTML={{ __html: item }}></div>;
        });
        return (
            <div key={index}>
                <h4>{title}</h4>
                {pmap}
            </div>
        );
    });

    const imgShow = (
        <div style={{
            marginTop: 20,
        }}>
            <img src={`/src/static/img/${props.journal.toLowerCase()}.jpg`} width='150px'/>
            <div style={{
                margin: 0,
                textIndent: 0,
                textAlign: 'initial',
                fontSize: 13,
            }}>
                <p><span>ISSN: </span><br />{data[0].iSSN}</p>
                <p><span>Frequency: </span><br />{data[0].frequency ? data[0].frequency : '12 Issues per Year'}</p>
                <p><span>Accepted Language: </span><br />{data[0].language ? data[0].language : 'English'}</p>
                <p><span>Submit Email: </span></p>
                <p>{data[0].email}</p>
            </div>
        </div>
    );
    
    const journalTitle = (
        <p style={{
            fontSize: 20,
            fontHeight: 700,
            color: '#35b8f3',
            textDecoration: 'underline',
            position: 'relative',
            top: -40,
            left: -400,
            fontStyle: 'oblique',
        }}>{title}</p>
    );
    return (
        <div className={props.page} style={{
            display: 'flex',
            paddingTop: 30,
        }}>
            {imgShow}
            <div>
                {journalTitle}
                {showList}
            </div>
        </div>
    );
};