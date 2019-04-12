import React from 'react';

export default (props) => {
    const { data } = props;
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
            marginTop: 60,
        }}>
            <img src={`/src/static/img/${props.journal.toLowerCase()}.jpg`} width='150px'/>
            <div style={{
                margin: 0,
                textIndent: 0,
                textAlign: 'initial',
                fontSize: 13,
            }}>
                <p>ISSN: <span>{data[0].iSSN}</span></p>
                <p>Frequency: <span>{data[0].frequency ? data[0].frequency : '12 Issues per Year'}</span></p>
                <p>Accepted Language: <span>{data[0].language ? data[0].language : 'English'}</span></p>
                <p>Submit Email: </p>
                <p style={{
                    fontWeight: 600,
                    fontSize: 16,
                }}>{data[0].email}</p>
            </div>
        </div>
    );
    
    const journalTitle = (
        <p style={{
            textAlign: 'end',
            fontSize: 18,
            fontHeight: 700,
            color: 'blue',
            marginBottom: 20,
        }}>{data[0].name}</p>
    );
    return (
        <div className={props.page} style={{
            display: 'flex',
        }}>
            {props.page === 'introduce' && imgShow}
            <div>
                {props.page === 'introduce' && journalTitle}
                {showList}
            </div>
        </div>
    );
};