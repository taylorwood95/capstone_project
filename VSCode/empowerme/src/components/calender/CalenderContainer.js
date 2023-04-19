import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import multiMonthPlugin  from '@fullcalendar/multimonth'
import './calender.css'







const CalenderContainer = () => {
  return (
    <div className="calender">
           <FullCalendar 
        plugins={[ dayGridPlugin, multiMonthPlugin ]}
        initialView="multiMonthYear"
        multiMonthMaxColumns=":1"
      />
    </div>
    
  )
}

export default CalenderContainer