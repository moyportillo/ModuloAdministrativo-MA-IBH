"use client"

import PreviousMap from "postcss/lib/previous-map";
import React, { useState, useEffect } from "react";

const MONTH_NAME = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const DAYS = ['Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab']

function NuevoCalendario() {
    const [month, setMonth] = useState(new Date().getMonth());
    const [year, setYear] = useState(new Date().getFullYear());
    const [noOfDays, setNoOfDays] = useState([]);
    const [blankDays, setBlankDays] = useState([]);
    const [events, setEvents] = useState([
        {
            event_date: new Date(2020, 3, 1),
            event_title: "April Fool's Day",
            event_theme: 'blue'
        },
        // Add more events...
    ]);

    const handlePreviousMonthClick = () => {
        setMonth((prevMonth) => {
            const newMonth = prevMonth - 1;
            getNoOfDays(newMonth)
            return newMonth
        })
    }

    const handleNextMonthClick = () => {
        setMonth((currentMonth) => {
            const newMonth = currentMonth + 1;
            if(newMonth > 11){
                setMonth(0)
                setYear((currentYear) => currentYear + 1)
                getNoOfDays(0, year + 1)
            }else{
                getNoOfDays(newMonth, year)
            }
            return newMonth % 12
        })
    }

    const getNoOfDays = (newMonth, newYear) => {

    }
    const [openEventModal, setOpenEventModal] = useState(false);
    const [eventTitle, setEventTitle] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventTheme, setEventTheme] = useState('blue');

    useEffect(() => {
        function getNoOfDays() {
            let daysInMonth = new Date(year, month + 1, 0).getDate();
            let dayOfWeek = new Date(year, month).getDay();
            let blankdaysArray = [];
            for (let i = 1; i <= dayOfWeek; i++) {
                blankdaysArray.push(i);
            }

            let daysArray = [];
            for (let i = 1; i <= daysInMonth; i++) {
                daysArray.push(i);
            }

            setBlankDays(blankdaysArray);
            setNoOfDays(daysArray);
        }

        getNoOfDays();
    }, [month, year]);
    return (
        <div className="antialiased sans-serif bg-gray-700 h-screen">
            <div x-data="app()" x-init="[initDate(), getNoOfDays()]" x-cloak>
                <div className="container mx-auto px-4 py-2 md:py-24">
                    <div className="bg-white rounded-lg shadow overflow-hidden">

                        <div className="flex items-center justify-between py-2 px-6">
                            <div>
                                <span className="text-lg font-bold text-gray-800">{MONTH_NAME[month]}</span>
                                <span className="ml-1 text-lg text-gray-600 font-normal">{year}</span>
                            </div>
                            <div className="border rounded-lg px-1">
                                <button
                                    type="button"
                                    className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center {'cursor-not-allowed opacity-25': month == 0 }"
                                    disabled={month == 0 ? true : false}
                                    onClick={handlePreviousMonthClick}>
                                    <svg className="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                                    </svg>
                                </button>
                                <div className="border-r inline-flex h-6"></div>
                                <button
                                    type="button"
                                    className="leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1 {'cursor-not-allowed opacity-25': month == 11 }"
                                    disabled={month == 11 ? true : false}
                                    onClick={handleNextMonthClick}>
                                    <svg className="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="-mx-1 -mb-1">
                            <div className="flex flex-wrap">
                                {DAYS.map((day, index) => (
                                    <div key={index} className="w-40 px-2 py-2">
                                        <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">
                                            {day}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-wrap border-t border-l">
                                {blankDays.map((_, index) => (
                                    <div key={index} className="text-center border-r border-b px-5 py-2/6 w-40 h-5/6">
                                    </div>
                                ))}
                            </div>
                            <div className="flex flex-wrap border-t border-l">
                                {noOfDays.map((date, dateIndex) => (
                                    <div key={dateIndex} className="px-4 pt-2 border-r border-b relative">
                                        <div
                                            onClick={() => showEventModal(date)}
                                            className={`inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100`}
                                        >
                                            {date}
                                        </div>
                                        <div className="overflow-y-auto mt-1">
                                            {events.filter(e => new Date(e.event_date).toDateString() === new Date(year, month, date).toDateString()).map((event, eventIndex) => (
                                                <div key={eventIndex} className={`px-2 py-1 rounded-lg mt-1 overflow-hidden border ${event.event_theme === 'blue' ? 'border-blue-200 text-blue-800 bg-blue-100' :
                                                    event.event_theme === 'red' ? 'border-red-200 text-red-800 bg-red-100' :
                                                        event.event_theme === 'yellow' ? 'border-yellow-200 text-yellow-800 bg-yellow-100' :
                                                            event.event_theme === 'green' ? 'border-green-200 text-green-800 bg-green-100' :
                                                                'border-purple-200 text-purple-800 bg-purple-100' // asumiendo que siempre habrá un tema definido
                                                    }`}>
                                                    <p className="text-sm truncate leading-tight">{event.event_title}</p>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NuevoCalendario