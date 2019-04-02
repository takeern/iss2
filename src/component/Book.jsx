import React from 'react';

export default () => {
    return(
        <div>
            <div style={{
                display: 'flex',
                marginTop: 25,
            }}>
                <img src='./src/static/img/book.png'/>
                <div style={{
                    fontSize: 15,
                    marginTop: 35,
                    fontWeight: 400,
                }}>
                    <div>Isaac Scientific Publishing publishes academic books in a wide range of disciplines from science, engineering to humanities and art. We provide high quality services for book writers, including fast and strict review process, professional editing, typesetting and proof reading, effective global promotion and generous royalty rates. In addition, we offer "Open Access" option to book writers which will increase the visibility and influence of the books through free download.</div>
                    <br />
                    <div>We sincerely invite distinguished scholars from all over the world to deliver your manuscript and publish you excellent work. Please contact 
                        <a href='mailto:book@isaacpub.org' style={{ fontWeight: 700, }}> book@isaacpub.org</a> if you want to publish a book or have any questions about book publication.</div>
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