import React from 'react';

export default function AddCalendar() {
    return (
        <>
            <iframe
                name='Ultimate Fighting Calendar'
                title='Ultimate Fighting Calendar'
                className="w-full calendar-iframe aspect-square"
                src="https://calendar.google.com/calendar/embed?src=03a2d54379aa24f372e2d616e1d50ee4725e833e43daaecd39235f2f623fe8d2%40group.calendar.google.com&ctz=America%2FLos_Angeles"
            ></iframe>
        </>
    );
}
