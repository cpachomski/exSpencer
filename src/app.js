import React from 'react'
import c from 'calendar'
import ReactDOM from 'react-dom'

import MonthCalendar from './components/calendars/month'
import DateProvider from './providers/date'
import './global/styles.css'

const cal = new c.Calendar()

const App = () => {
  return (
    <div className="layout--container">
      {
        <DateProvider>
          {({ date, month, year, incrementMonth, decrementMonth }) => {
            const weeks = cal.monthDates(year, month)
            return <MonthCalendar weeks={weeks} month={month} year={year} />
          }}
        </DateProvider>
      }
    </div>
  )
}

export default App

ReactDOM.render(<App />, document.getElementById('app'))
