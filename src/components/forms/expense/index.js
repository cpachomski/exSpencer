import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './styles.css'

class ExpenseForm extends Component {
  render() {
    return (
      <div className="expense-form--container">
        <form>
          <label htmlFor="expense-name">Expense name</label>
          <input id="expense-name" type="text" placeholder="name" />
        </form>
      </div>
    )
  }
}

export default ExpenseForm
