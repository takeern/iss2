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
    return (
        <div className={props.key}>
            {showList}
        </div>
    );
};