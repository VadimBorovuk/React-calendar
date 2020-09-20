import React from 'react';
import './style.scss';

const Title = () => {
    return (
        <div className="content__title">
            <div className="content__title-upper">
                Choose the day <br/> for the meeting
            </div>
            <div className="content__title-down">
                We encourage you to book your <br/> appointment online. <br/> This will save you time.
            </div>
        </div>
    );
};

export default Title;
