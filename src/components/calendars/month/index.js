import React from 'react'
import c from 'calendar'
import cx from 'classnames'
import './styles.css'
import { weekdays, months } from '../../../config/date'

const cal = new c.Calendar()

const MonthCalendar = ({ month, year, weeks }) => {
  return (
    <div className="month-calendar">
      <div className="month-calendar--container">
        <div className="month-calendar--header">
          <h3 className="month-calendar--month">{months[month]}</h3>
          <h4 className="month-calendar--year">{year}</h4>
        </div>
        <div className="flex-row">
          {weekdays.map(weekday => (
            <div key={`weekday-${weekday}`}>
              <span className="month-calendar--weekday">{weekday}</span>
            </div>
          ))}
        </div>
        {weeks.map((days, weekIdx) => (
          <div className="flex-row" key={`week-${weekIdx}`}>
            {days.map((day, dayIdx) => (
              <Day
                key={`week-${weekIdx}-day-${dayIdx}`}
                day={day}
                month={month}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

const Day = ({ day, month }) => {
  const dayClass = cx({
    'month-calendar--day': true,
    opaque: day.getMonth() !== month
  })

  return <div className={dayClass}>{day.getDate()}</div>
}

export default MonthCalendar
