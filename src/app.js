import React from 'react'
import ReactDOM from 'react-dom'

import MonthView from './views/month'
import './global/styles.css'

const App = () => <MonthView />
export default App

ReactDOM.render(<App />, document.getElementById('app'))
