import React, {useState} from 'react';
import Calendar from "./Calendar";
import Title from "./Title";
import moment from 'moment';

import './style.scss';

const Content = () => {
    const [selectedDate, setSelectedDate] = useState(moment());

    return (
        <div className="werD__content">
            <div className="container-fluid p-0">
                <div className="content__info">
                    <div className="col-12 col-lg-7">
                        <Title/>
                    </div>
                    <div className="col-12 col-lg-5 p-0">
                        <div className="werD__calendar">
                            <Calendar value={selectedDate} onChange={setSelectedDate}/>;
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
