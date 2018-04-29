import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

import { getHtmlFormDate } from '../../../util/date'
import frequencies from '../../../config/frequencies'

class ExpenseForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expenseTitle: '',
      expenseDate: this.props.expenseDate,
      expenseFrequency: '',
      expenseRecurring: false,
      expenses: []
    }
  }

  static propTypes = {
    expenseDate: PropTypes.string
  }

  static defaultProps = {
    expenseDate: getHtmlFormDate()
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name

    this.setState({
      [name]: value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState(
      ({
        expenses,
        expenseTitle,
        expenseDate,
        expenseRecurring,
        expenseFrequency
      }) => ({
        expenses: [
          ...expenses,
          { expenseTitle, expenseDate, expenseRecurring, expenseFrequency }
        ]
      })
    )
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('[prevState]', prevState)
    console.log('[nextState]', this.state)
  }

  render() {
    return (
      <div className="expense-form--container">
        <form onSubmit={this.handleSubmit}>
          <p>
            <label htmlFor="expenseTitle" value="Title" />
            <input
              id="exenseTitle"
              type="text"
              name="expenseTitle"
              placeholder="Add Title"
              value={this.state.expenseTitle}
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <label htmlFor="expenseDate" value="Date">
              {this.state.expenseDate}
            </label>
            <input
              id="expenseDate"
              name="expenseDate"
              type="date"
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <label htmlFor="expenseRecurring" value="Recurring">
              Recurring
            </label>
            <input
              type="checkbox"
              name="expenseRecurring"
              checked={this.state.expenseRecurring}
              onChange={this.handleInputChange}
            />
          </p>
          {this.state.expenseRecurring && (
            <p>
              <label htmlFor="expenseFrequency" value="Frequency">
                Frequency
              </label>
              <select type="select" onChange={this.handleInputChange}>
                {frequencies.map(({ value }) => (
                  <option key={value} value={value}>
                    {value}
                  </option>
                ))}
              </select>
            </p>
          )}
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default ExpenseForm
