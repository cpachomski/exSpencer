import React, { Component } from 'react'
import c from 'calendar'

import MonthCalendar from '../../components/calendars/month'
import DateProvider from '../../providers/date'
import ExpenseForm from '../../components/forms/expense'

const cal = new c.Calendar()

class MonthView extends Component {
  state = {
    showExpenseForm: false
  }

  toggleStateProp = stateProp => {
    return this.setState(prevState => {
      return { [stateProp]: !prevState[stateProp] }
    })
  }

  render() {
    return (
      <div className="layout--container">
        <DateProvider>
          {({ date, month, year, incrementMonth, decrementMonth }) => {
            const weeks = cal.monthDates(year, month)
            return <MonthCalendar weeks={weeks} month={month} year={year} />
          }}
        </DateProvider>
        <button onClick={() => this.toggleStateProp('showExpenseForm')}>
          New Expense
        </button>
        {this.state.showExpenseForm && (
          <ExpenseForm
            closeForm={() => this.toggleStateProp('showExpenseForm')}
          />
        )}
      </div>
    )
  }
}

export default MonthView
