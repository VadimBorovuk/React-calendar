import React, { useState, useEffect } from "react";
import moment from "moment";
import Header from "./header";
import './style.scss';


export default function Calendar({ value, onChange }) {
    const [calendar, setCalendar] = useState([]);

    useEffect(() => {
        setCalendar(buildCalendar(value));
    }, [value]);

    function buildCalendar(date) {
        const a = [];

        const startDay = date.clone().startOf("month").startOf("week");
        const endDay = date.clone().endOf("month").endOf("week");

        const _date = startDay.clone().subtract(1, "day");

        while (_date.isBefore(endDay, "day")) {
            a.push(
                Array(7)
                    .fill(0)
                    .map(() => _date.add(1, "day").clone())
            );
        }
        return a;
    }

    function isSelected(day) {
        return value.isSame(day, "day");
    }

    function beforeToday(day) {
        return moment(day).isBefore(new Date(), "day");
    }

    function isToday(day) {
        return moment(new Date()).isSame(day, "day");
    }

    function dayStyles(day) {
        if (beforeToday(day)) return "before";
        if (isSelected(day)) return "selected";
        if (isToday(day)) return "today";
        return "";
    }
    function activeModal() {
       let modalView = document.querySelector('.modalView');
       modalView.classList.toggle('active')
    }

    return (
        <div className="calendar">
            <Header value={value} onChange={onChange} />

            <div className="body">
                {calendar.map((week, wi) => (
                    <div key={wi} onClick={activeModal}>
                        {week.map((day, di) => (
                            <div
                                key={di}
                                className="day"
                                onClick={() => {
                                    if (day < moment(new Date()).startOf("day")) return;
                                    onChange(day);
                                }}
                            >
                                <div className={dayStyles(day)}>
                                    {day.format("D").toString()}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
                <div className="day-names">
                    {["s", "m", "t", "w", "t", "f", "s"].map((d) => (
                        <div className="week">{d}</div>
                    ))}
                </div>

                <div className="modalView">
                    <button onClick={activeModal} className="btn-close">&times;</button>
                    <div className="modal-view">
                        <div className="content__items">
                            <div className="content__item">
                                <div className="content__item-month">
                                    Month
                                </div>
                                <div className="content__item-field">
                                    <input type="text" value="September" disabled/>
                                </div>
                            </div>
                            <div className="content__item">
                                <div className="content__item-month">
                                    Day
                                </div>
                                <div className="content__item-field">
                                    <input type="text" value="18th Friday" disabled/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}