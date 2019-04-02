import React from 'react';

export default () => {
    return (
        <div>
            <div style={{
                display: 'flex',
                marginTop: 25,
            }}>
                <img src='./src/static/img/talk.png' width={250}/>
                <div style={{
                    fontSize: 15,
                    marginTop: 35,
                    fontWeight: 400,
                }}>
                    <div>Isaac Scientific Publishing publishes proceedings for academic and technical conferences and provides professional and timely services to conference organizers.</div>
                    <br />
                    <div>We provide flexible options on proceedings production, including hard copy, CD/DVD ROM, e-Book, flash memory and so on. We also offer "Open Access" option so that the conference papers could be freely downloaded and their visibility and influence would be effectively increased. Besides, we provide flexible options on the post-conference sell of the proceedings.</div>
                    <br />
                    <div>We understand many conferences are organized by professors and their teams who lack experiences on conference organization, and we can give considerate and detailed guidance and instructions on proceedings publication and all the related issues.</div>
                    <br />
                    <div>Please contact
                        <a href='mailto:book@isaacpub.org' style={{ fontWeight: 700, }}> book@isaacpub.org</a> if you want to publish the proceedings of your conference, and we will get back to you as soon as possible.</div>
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