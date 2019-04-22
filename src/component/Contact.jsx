import React from 'react';

export default () => {
    return(
        <div>
            <div style={{
                display: 'flex',
                marginTop: 60,
                marginLeft: 64,
                marginBottom: 200,
            }}>
                <img src='./src/static/img/phone.jpg' width={300} height={168}/>
                <div style={{
                    fontSize: 15,
                    fontWeight: 400,
                    marginLeft: 35,
                }}>
                    <span style={{ fontFamily: 'Verdana', fontWeight: 900 }}>Bryan House Publishing Limited</span>
                    <p style={{ margin: '30 0' }}>
						<span style={{ fontFamily: 'Verdana' }}><span style={{ fontWeight: 900 }}>Address</span><br />
                        Flat 4, Huntingdon House Faulkers Farm Drive Edington, Birmingham West Midlans, United Kingdom, B23 7XF.
                        </span> 
					</p>
                    <p>
						<span style={{ fontFamily: 'Verdana', fontWeight: 900 }}>E-mail:</span><br />
                        <span style={{ fontFamily: 'Verdana' }}></span><a href="mailto: service@bryanhousepub.org" target="_blank"><span style={{ fontFamily: 'Verdana' }}>service@bryanhousepub.org</span></a><br />
					</p>
                    <p>
						<span style={{ fontFamily: 'Verdana', fontWeight: 900 }}>Telephone: </span><br />
                        <span style={{ fontFamily: 'Verdana' }}>0044-121-7813744</span><br />
					</p>
                </div>
            </div>
        </div>
    );
};