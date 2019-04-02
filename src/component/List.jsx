import React, { PureComponent } from 'react';

export default class List extends PureComponent {
    handleClick(e) {
        let target = e.target;
        while(!target.getAttribute('data-path') && target.className !== 'ul-path-warpper') {
            target = e.parentNode;
        }
        const path = target.getAttribute('data-path');
        if (path) {
            this.props.history.push(path);
        }
    }
    render() {
        const { pathMap } = this.props;
        const showIndex = pathMap.map((item, index) => {
            return <li className={window.location.pathname === `/${item.index}` ? 'select' : ''}
            key={index} data-path={item.index}><span className='san'></span>{item.name}</li>;
        });
        return (
            <ul
            className='ul-path-warpper'
            handleClick={(e) => this.handleClick(e)}
            >
                {showIndex}
            </ul> 
        );
    }
}