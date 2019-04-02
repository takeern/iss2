import React from 'react';

export default () => {
    return(
        <div>
            <div style={{
                display: 'flex',
                marginTop: 25,
                marginLeft: 64,
            }}>
                <img src='./src/static/img/phone.png' width={279} height={227}/>
                <div style={{
                    fontSize: 15,
                    marginTop: 35,
                    fontWeight: 400,
                }}>
                    <span style={{ fontFamily: 'Verdana', fontWeight: 900 }}>Isaac Scientific Publishing Co., Ltd</span>
                    <p style={{ margin: '30 0' }}>
						<span style={{ fontFamily: 'Verdana' }}><span style={{ fontWeight: 900 }}>Address</span><br />
                            Unit 04, 7/F Bright Way Tower, No. 33 Mong Kok Rd, Kowloon, Hong Kong 
                        </span> 
					</p>
                    <p>
						<span style={{ fontFamily: 'Verdana', fontWeight: 900 }}>E-mail</span><br />
                        <span style={{ fontFamily: 'Verdana' }}>For General Inquiry: </span><a href="mailto: service@isaacpub.org" target="_blank"><span style={{ fontFamily: 'Verdana' }}>service@isaacpub.org</span></a><br />
                        <span style={{ fontFamily: 'Verdana' }}>For Book Publication: </span><a href="mailto: book@isaacpub.org" target="_blank"><span style={{ fontFamily: 'Verdana' }}>book@isaacpub.org</span></a><br />
                        <span style={{ fontFamily: 'Verdana' }}>For Conference Proceedings Publication: </span><a href="mailto: confpub@isaacpub.org" target="_blank"><span style={{ fontFamily: 'Verdana' }}>confpub@isaacpub.org</span></a> 
					</p>
                </div>
            </div>
            <div class="foot" style={{
                paddingTop: 30,
                minHeight: 50,
                background: '#2065b2',
                textAlign: 'center',
                font: '16px Arial , Verdana , Helvetica , Geneva ,sans-serif',
                color: '#fff',
                marginTop: 70,
            }}>
                Copyright © 2019 Isaac Scientific Publishing Co. All rights reserved.
            </div>
        </div>
    );
};