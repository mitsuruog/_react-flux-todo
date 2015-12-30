import React, {Component, PropTypes} from 'react'
import TodoTextInput from '../TodoTextInput'

class Header extends Component {

  constructor(props) {
    super(props)
  }

  componentDidMount() {}
  componentWillUnmount() {}

  render() {
    return (
      <header>
        <h1>todos</h1>
        <TodoTextInput />
      </header>
    )
  }

};

export default Header
