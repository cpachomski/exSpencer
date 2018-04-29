import React, { Component } from 'react'
import './styles.css'

const getDateAttrs = date => {
  return {
    date: date.getDate(),
    day: date.getDay(),
    month: date.getMonth(),
    year: date.getFullYear()
  }
}

class DateProvider extends Component {
  constructor() {
    super()
    const today = new Date()

    this.state = getDateAttrs(today)
  }

  incrementMonth = () => {
    const { month, year } = this.state

    this.setState({
      month: month === 11 ? 0 : month + 1,
      year: month === 11 ? year + 1 : year
    })
  }

  decrementMonth = () => {
    const { month, year } = this.state

    this.setState({
      month: month === 0 ? 11 : month - 1,
      year: month === 0 ? year - 1 : year
    })
  }

  select = date => {
    this.setState(getDateAttrs(date))
  }

  render = () => (
    <div>
      <div className="date-provider--controls">
        <button onClick={this.decrementMonth}>{'<<'}</button>
        <button onClick={this.incrementMonth}>{'>>'}</button>
      </div>
      {this.props.children(this.state)}
    </div>
  )
}

export default DateProvider
