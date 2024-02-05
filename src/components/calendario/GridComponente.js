"use client"

import React, { useState, useEffect } from "react";

const MONTH_NAME = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
const DAYS = ['Dom', 'Lun', 'Mar', 'Mier', 'Jue', 'Vie', 'Sab']



const GridComponent = () => {
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

    // Include the rest of your component logic and UI here...

    return (
        <div>
            
        </div>
    );
}

export default GridComponent